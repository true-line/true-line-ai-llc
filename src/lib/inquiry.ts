export const INQUIRY_ENDPOINT = "https://agents.true-line.ai/api/inquiry";
export const INQUIRY_TOPICS = [
  "Software",
  "AI training",
  "Partnership",
  "Product support",
  "Privacy request",
  "Other",
] as const;

export async function inquiryCall(body?: Record<string, unknown>) {
  const response = await fetch(INQUIRY_ENDPOINT, {
    method: body ? "POST" : "GET",
    mode: "cors",
    credentials: "omit",
    cache: "no-store",
    ...(body
      ? { headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }
      : {}),
    signal: AbortSignal.timeout(25000),
  });
  if (!response.ok) {
    if (response.status === 400)
      throw new Error(
        "Check your name, email, topic, consent, and message (20–2,000 characters), then try again.",
      );
    if (response.status === 429) throw new Error("Too many attempts. Please try again later.");
    throw new Error(
      "Your inquiry could not be sent. Please try again later; your message is still here.",
    );
  }
  return response.json() as Promise<{ ok?: boolean; available?: boolean }>;
}
