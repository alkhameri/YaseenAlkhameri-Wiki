interface SupabaseLikeError {
  code?: string;
  message?: string;
  details?: string;
  hint?: string;
}

export function isMissingSupabaseFunctionError(
  error: unknown
): error is SupabaseLikeError {
  if (!error || typeof error !== "object") return false;

  const candidate = error as SupabaseLikeError;
  if (candidate.code === "PGRST202") return true;

  const text = [
    candidate.message,
    candidate.details,
    candidate.hint,
  ]
    .filter((value): value is string => typeof value === "string")
    .join(" ");

  return text.includes("Could not find the function");
}

export function adminErrorMessage(error: unknown): string {
  if (!error || typeof error !== "object") return "Unknown Supabase error";
  const candidate = error as SupabaseLikeError;
  return candidate.message ?? candidate.details ?? "Unknown Supabase error";
}
