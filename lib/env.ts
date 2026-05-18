function optional(name: string): string | undefined {
  const v = process.env[name];
  return v && v.length > 0 ? v : undefined;
}

export const env = {
  SUPABASE_URL: optional("SUPABASE_URL"),
  SUPABASE_SERVICE_ROLE_KEY: optional("SUPABASE_SERVICE_ROLE_KEY"),
  ADMIN_PASSWORD: optional("ADMIN_PASSWORD"),
  ADMIN_SESSION_SECRET: optional("ADMIN_SESSION_SECRET"),
  VID_COOKIE_SECRET: optional("VID_COOKIE_SECRET"),
  SPOTIFY_REFRESH_TOKEN: optional("SPOTIFY_REFRESH_TOKEN"),
  SPOTIFY_CLIENT_ID: optional("SPOTIFY_CLIENT_ID"),
  SPOTIFY_CLIENT_SECRET: optional("SPOTIFY_CLIENT_SECRET"),
};

export function hasSupabaseConfig(): boolean {
  return Boolean(env.SUPABASE_URL && env.SUPABASE_SERVICE_ROLE_KEY);
}

export function hasAdminConfig(): boolean {
  return Boolean(env.ADMIN_PASSWORD && env.ADMIN_SESSION_SECRET);
}

export function hasVisitorCookieConfig(): boolean {
  return Boolean(env.VID_COOKIE_SECRET);
}
