import Link from "next/link";
import AdminPageLayout from "@/components/admin/AdminPageLayout";
import AdminArticleHeader from "@/components/admin/AdminArticleHeader";
import {
  AdminArticleBody,
  AdminLeadNote,
  AdminPanel,
  AdminPanelHeader,
  AdminStatusDot,
  adminLinkClass,
} from "@/components/admin/AdminPrimitives";
import { requireAdmin } from "@/lib/auth/admin";
import {
  getAdminAmaQuestions,
  type AmaQuestion,
} from "@/lib/ama/queries";

export const dynamic = "force-dynamic";

interface AdminAmaPageProps {
  searchParams: Promise<{ archived?: string; question?: string; saved?: string; error?: string }>;
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "America/Los_Angeles",
});

function formatDate(value: string | null): string {
  if (!value) return "—";
  return dateFormatter.format(new Date(value));
}

function statusLabel(question: AmaQuestion) {
  if (question.answer) {
    return (
      <span className="text-xs font-medium text-[#3366cc]">Published</span>
    );
  }

  return <span className="text-xs font-medium text-[#b37d00]">Pending</span>;
}

function selectQuestion(
  questions: AmaQuestion[],
  selectedId: string | undefined,
): AmaQuestion | null {
  if (selectedId) {
    const selected = questions.find((question) => question.id === selectedId);
    if (selected) return selected;
  }

  return questions.find((question) => !question.answer) ?? questions[0] ?? null;
}

export default async function AdminAmaPage({
  searchParams,
}: AdminAmaPageProps) {
  await requireAdmin();
  const params = await searchParams;
  let questions: AmaQuestion[] = [];
  let unavailable = false;
  try { questions = await getAdminAmaQuestions(); } catch { unavailable = true; }
  const selectedQuestion = selectQuestion(questions, params.question);
  const pendingCount = questions.filter((question) => !question.answer).length;
  const publishedCount = questions.length - pendingCount;

  return (
    <AdminPageLayout currentWindow="">
      <AdminArticleHeader
        title="Ask Me Anything"
        subtitle="Anonymous question queue"
        activeTab="ama"
      />

      <AdminArticleBody>
        <AdminLeadNote>Answer anonymous questions here. Only answered, unarchived questions appear on the public AMA page.</AdminLeadNote>
        {unavailable && <p role="alert" className="mb-4 border border-amber-300 bg-amber-50 p-3 text-sm">Connect Supabase and run supabase/migrations/0004_ama_questions.sql to enable questions and answers.</p>}
        {params.error && <p role="alert" className="mb-4 text-sm text-red-700">The change could not be saved. Check the answer and database connection, then try again.</p>}

        <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
          <span>
            <strong>{pendingCount}</strong> pending
          </span>
          <AdminStatusDot />
          <span>
            <strong>{publishedCount}</strong> published
          </span>
          {params.saved === "1" && (
            <>
              <AdminStatusDot />
              <span className="font-medium text-[#14866d]">Answer saved.</span>
            </>
          )}
          {params.archived === "1" && (
            <>
              <AdminStatusDot />
              <span className="font-medium text-[#14866d]">
                Question archived.
              </span>
            </>
          )}
        </div>

        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_26rem]">
          <section className="min-w-0">
            <h2 className="border-b border-gray-300 pb-1 font-serif text-xl font-medium">
              Questions
            </h2>

            <div className="mt-3 overflow-x-auto">
              <table className="w-full border-collapse border border-[#a2a9b1] bg-white text-left text-sm">
                <thead>
                  <tr className="bg-[#eaecf0]">
                    <th className="border border-[#a2a9b1] px-3 py-1.5 font-semibold">
                      Asked
                    </th>
                    <th className="border border-[#a2a9b1] px-3 py-1.5 font-semibold">
                      Question
                    </th>
                    <th className="border border-[#a2a9b1] px-3 py-1.5 font-semibold">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {questions.length === 0 ? (
                    <tr>
                      <td
                        colSpan={3}
                        className="border border-[#a2a9b1] px-3 py-5 text-center italic text-gray-600"
                      >
                        No questions have been submitted yet.
                      </td>
                    </tr>
                  ) : (
                    questions.map((question) => {
                      const isSelected = question.id === selectedQuestion?.id;
                      return (
                        <tr
                          key={question.id}
                          className={
                            isSelected ? "bg-[#f8f9fa]" : "hover:bg-[#f8f9fa]"
                          }
                        >
                          <td className="w-32 border border-[#a2a9b1] px-3 py-2 text-xs text-gray-600">
                            {formatDate(question.askedAt)}
                          </td>
                          <td className="border border-[#a2a9b1] px-3 py-2 leading-6">
                            <Link
                              href={`/admin/ama?question=${question.id}`}
                              className={adminLinkClass}
                            >
                              {question.question}
                            </Link>
                          </td>
                          <td className="w-28 border border-[#a2a9b1] px-3 py-2">
                            {statusLabel(question)}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </section>

          <AdminPanel className="min-w-0">
            <AdminPanelHeader>Response</AdminPanelHeader>

            {selectedQuestion ? (
              <div className="space-y-4 p-3">
                <div>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-600">
                    Question
                  </div>
                  <p className="text-sm leading-6">{selectedQuestion.question}</p>
                  <p className="mt-1 text-xs italic text-gray-600">
                    Asked {formatDate(selectedQuestion.askedAt)}
                  </p>
                </div>

                <form key={selectedQuestion.id} action="/api/admin/ama" method="post" className="space-y-3">
                  <input type="hidden" name="action" value="publish" />
                  <input type="hidden" name="id" value={selectedQuestion.id} />
                  <label
                    htmlFor="answer"
                    className="block text-xs font-semibold uppercase tracking-wide text-gray-600"
                  >
                    Answer
                  </label>
                  <textarea
                    id="answer"
                    name="answer"
                    rows={9}
                    maxLength={5000}
                    required
                    defaultValue={selectedQuestion.answer ?? ""}
                    className="w-full resize-y border border-[#a2a9b1] bg-white px-3 py-2 text-sm leading-6 text-[#202122] outline-none focus:border-[#3366cc] focus:ring-1 focus:ring-[#3366cc]"
                  />
                  <button
                    type="submit"
                    className="border border-[#a2a9b1] bg-[#eaecf0] px-3 py-1.5 text-sm font-medium hover:bg-[#dce1e5]"
                  >
                    {selectedQuestion.answer ? "Update answer" : "Publish answer"}
                  </button>
                </form>

                <form action="/api/admin/ama" method="post">
                  <input type="hidden" name="action" value="archive" />
                  <input type="hidden" name="id" value={selectedQuestion.id} />
                  <button
                    type="submit"
                    className="text-sm text-[#b32424] hover:underline"
                  >
                    Archive question
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-3 text-sm italic text-gray-600">
                Select a question to write a response.
              </div>
            )}
          </AdminPanel>
        </div>
      </AdminArticleBody>
    </AdminPageLayout>
  );
}
