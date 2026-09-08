import { getSupabase } from "@/lib/supabase/server";
import { validateAmaAnswer, validateAmaQuestion, validateQuestionId } from "./validation";

export interface AmaQuestion {
  id: string;
  question: string;
  answer: string | null;
  askedAt: string;
  answeredAt: string | null;
  archivedAt: string | null;
}

interface AmaQuestionRow {
  id: string;
  question: string;
  answer: string | null;
  created_at: string;
  answered_at: string | null;
  archived_at: string | null;
}

function mapAmaQuestion(row: AmaQuestionRow): AmaQuestion {
  return {
    id: row.id,
    question: row.question,
    answer: row.answer,
    askedAt: row.created_at,
    answeredAt: row.answered_at,
    archivedAt: row.archived_at,
  };
}

export async function getAnsweredAmaQuestions(): Promise<AmaQuestion[]> {
  const { data, error } = await getSupabase()
    .from("ama_questions")
    .select("id, question, answer, created_at, answered_at, archived_at")
    .is("archived_at", null)
    .not("answer", "is", null)
    .order("answered_at", { ascending: false, nullsFirst: false })
    .order("created_at", { ascending: false });

  if (error) throw error;
  return ((data ?? []) as AmaQuestionRow[]).map(mapAmaQuestion);
}

export async function getAdminAmaQuestions(): Promise<AmaQuestion[]> {
  const { data, error } = await getSupabase()
    .from("ama_questions")
    .select("id, question, answer, created_at, answered_at, archived_at")
    .is("archived_at", null)
    .order("created_at", { ascending: false });

  if (error) throw error;

  const rows = ((data ?? []) as AmaQuestionRow[]).map(mapAmaQuestion);
  return rows.sort((a, b) => {
    if (Boolean(a.answer) !== Boolean(b.answer)) {
      return a.answer ? 1 : -1;
    }
    return new Date(b.askedAt).getTime() - new Date(a.askedAt).getTime();
  });
}

export async function createAmaQuestion(question: string): Promise<void> {
  const { error } = await getSupabase()
    .from("ama_questions")
    .insert({ question: validateAmaQuestion(question) });

  if (error) throw error;
}

export async function saveAmaAnswer(id: string, answer: string): Promise<void> {
  validateQuestionId(id);
  const now = new Date().toISOString();
  const { error } = await getSupabase()
    .from("ama_questions")
    .update({
      answer: validateAmaAnswer(answer),
      answered_at: now,
      updated_at: now,
    })
    .eq("id", id)
    .is("archived_at", null)
    .select("id")
    .single();

  if (error) throw error;
}

export async function archiveAmaQuestion(id: string): Promise<void> {
  validateQuestionId(id);
  const now = new Date().toISOString();
  const { error } = await getSupabase()
    .from("ama_questions")
    .update({
      archived_at: now,
      updated_at: now,
    })
    .eq("id", id)
    .select("id")
    .single();

  if (error) throw error;
}
