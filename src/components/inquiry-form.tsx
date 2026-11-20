import { useState, type FormEvent } from "react";
import { INQUIRY_TOPICS, inquiryCall } from "@/lib/inquiry";

const fieldClass =
  "mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus-visible:outline-2 focus-visible:outline-primary";

export function InquiryForm() {
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const data = new FormData(event.currentTarget);
    setBusy(true);
    setError("");
    try {
      const result = await inquiryCall({
        name: String(data.get("name") ?? "").trim(),
        email: String(data.get("email") ?? "").trim(),
        company: String(data.get("company") ?? "").trim(),
        topic: data.get("topic"),
        message: String(data.get("message") ?? "").trim(),
        website: String(data.get("website") ?? ""),
        consent: data.get("consent") === "on",
      });
      if (result.ok !== true)
        throw new Error("Delivery was not confirmed. Please try again later.");
      setDone(true);
    } catch (reason) {
      setError(
        reason instanceof Error
          ? reason.message
          : "Your inquiry could not be sent. Please try again.",
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {done ? (
        <div role="status" className="mt-10 rounded-lg border border-border bg-card p-8">
          <h2 className="font-display text-2xl font-bold">Thank you for your inquiry.</h2>
          <p className="mt-3 text-muted-foreground">
            Your message has been sent to True Line AI. We’ll reply using the email address you
            provided.
          </p>
          <a href="/" className="mt-6 inline-block text-primary hover:underline">
            Back to home →
          </a>
        </div>
      ) : null}
      <form
        onSubmit={submit}
        hidden={done}
        className="mt-10 space-y-6 rounded-lg border border-border bg-card p-6 sm:p-8"
        aria-busy={busy}
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="text-sm font-medium">
            Name <span aria-hidden="true">*</span>
            <input
              name="name"
              autoComplete="name"
              required
              maxLength={100}
              className={fieldClass}
            />
          </label>
          <label className="text-sm font-medium">
            Email <span aria-hidden="true">*</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              className={fieldClass}
            />
          </label>
        </div>
        <label className="block text-sm font-medium">
          Company or team (optional)
          <input
            name="company"
            autoComplete="organization"
            maxLength={120}
            className={fieldClass}
          />
        </label>
        <label className="block text-sm font-medium">
          Topic <span aria-hidden="true">*</span>
          <select name="topic" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Choose a topic
            </option>
            {INQUIRY_TOPICS.map((topic) => (
              <option key={topic}>{topic}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium">
          Message <span aria-hidden="true">*</span>
          <textarea
            name="message"
            required
            minLength={20}
            maxLength={2000}
            rows={6}
            aria-describedby="message-help"
            className={fieldClass}
          />
        </label>
        <p id="message-help" className="text-xs text-muted-foreground">
          20–2,000 characters. For training, include your team size and preferred format. Please
          leave out passwords, API keys, and other sensitive information.
        </p>
        <div hidden aria-hidden="true">
          <label>
            Leave this field empty
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <label className="flex items-start gap-3 text-sm">
          <input type="checkbox" name="consent" required className="mt-1 accent-primary" />
          <span>
            I agree that True Line AI may use my details to respond to this inquiry.{" "}
            <span aria-hidden="true">*</span>
          </span>
        </label>
        <p className="text-xs leading-relaxed text-muted-foreground">
          Required fields are marked *. Your details are sent to True Line AI through its email
          provider, Resend, to handle your request. Inquiry text is not stored in browser storage or
          the service’s database. Email correspondence remains in the recipient’s mailbox; an
          IP-based rate-limit counter expires after one hour.
        </p>
        {error ? (
          <p role="alert" className="text-sm">
            {error}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={busy}
          className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {busy ? "Sending…" : "Send inquiry"}
        </button>
        <noscript>
          <p>JavaScript is required to send this form.</p>
        </noscript>
      </form>
    </>
  );
}
