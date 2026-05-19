interface AdminSetupNoticeProps {
  errorMessage?: string;
  compact?: boolean;
}

export default function AdminSetupNotice({
  errorMessage,
  compact = false,
}: AdminSetupNoticeProps) {
  return (
    <div className="border border-[#a2a9b1] bg-[#f8f9fa] p-4 text-sm">
      <strong>Analytics database is not initialized.</strong>{" "}
      Run the Supabase SQL migrations in order:
      <ol className="list-decimal ml-6 mt-2 space-y-1">
        <li>
          <code className="bg-white px-1 border border-[#eaecf0]">
            supabase/migrations/0001_init_analytics.sql
          </code>
        </li>
        <li>
          <code className="bg-white px-1 border border-[#eaecf0]">
            supabase/migrations/0002_admin_functions.sql
          </code>
        </li>
      </ol>
      {!compact && (
        <p className="mt-3">
          After both scripts finish in the Supabase SQL editor, refresh this
          page.
        </p>
      )}
      {errorMessage && (
        <p className="mt-3 text-xs text-gray-600 break-words">
          Supabase reported:{" "}
          <code className="bg-white px-1 border border-[#eaecf0]">
            {errorMessage}
          </code>
        </p>
      )}
    </div>
  );
}
