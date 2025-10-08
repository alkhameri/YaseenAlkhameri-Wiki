import { NextResponse } from 'next/server';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const TOKEN_URL = 'https://accounts.spotify.com/api/token';
const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI!; // must match dashboard

async function exchangeCodeForToken(code: string, clientId: string, clientSecret: string) {
  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: REDIRECT_URI, // fixed; do NOT derive from request
  });

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${auth}`,
    },
    body: body.toString(),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Token exchange failed: ${res.status} ${text}`);
  }

  return res.json();
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const code = url.searchParams.get('code');

    const clientId = process.env.SPOTIFY_CLIENT_ID || url.searchParams.get('client_id') || '';
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET || url.searchParams.get('client_secret') || '';

    if (!code) {
      return new Response(
        `Missing 'code'. Start the OAuth flow with redirect_uri=${REDIRECT_URI}`,
        { status: 400, headers: { 'Content-Type': 'text/plain' } },
      );
    }

    if (!clientId || !clientSecret) {
      return new Response(
        'Missing Spotify client credentials. Provide SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET as env vars or append client_id/client_secret to the URL.',
        { status: 400, headers: { 'Content-Type': 'text/plain' } },
      );
    }

    const tokenResponse = await exchangeCodeForToken(code, clientId, clientSecret);
    const refreshToken = tokenResponse.refresh_token;

    const html = `
      <html>
      <head><meta charset="utf-8"><title>Spotify OAuth</title></head>
      <body style="font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;padding:24px;">
        <h1>Spotify Authorization Success</h1>
        <p>Put this into <code>.env.local</code> as <strong>SPOTIFY_REFRESH_TOKEN</strong>:</p>
        <pre style="background:#f6f8fa;padding:12px;border-radius:6px;">${refreshToken || '(no refresh_token returned — try again with show_dialog=true)'}</pre>
      </body>
      </html>
    `;
    return new Response(html, { headers: { 'Content-Type': 'text/html' } });
  } catch (err: any) {
    console.error('OAuth callback error:', err);
    return new Response(`Error during token exchange: ${err.message}`, { status: 500, headers: { 'Content-Type': 'text/plain' } });
  }
}
