export function validateAmaQuestion(question: string): string {
  const trimmed = question.trim();
  if (!trimmed || trimmed.length > 1000) throw new Error("Questions must contain 1–1000 characters.");
  return trimmed;
}

export function validateAmaAnswer(answer: string): string {
  const trimmed = answer.trim();
  if (!trimmed || trimmed.length > 5000) throw new Error("Answers must contain 1–5000 characters.");
  return trimmed;
}

export function validateQuestionId(id: string): void {
  if (!/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/i.test(id)) {
    throw new Error("Invalid question.");
  }
}
