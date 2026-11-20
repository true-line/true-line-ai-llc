import { createFileRoute } from "@tanstack/react-router";
import { PublicPage } from "@/components/public-page";
import { InquiryForm } from "@/components/inquiry-form";

export const Route = createFileRoute("/inquiry")({
  head: () => ({
    meta: [
      { title: "Inquiry — True Line AI LLC" },
      {
        name: "description",
        content:
          "Contact True Line AI about software, AI training, partnerships, product support, or privacy.",
      },
      { property: "og:title", content: "Inquiry — True Line AI LLC" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Inquiry,
});

function Inquiry() {
  return (
    <PublicPage>
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">Let’s talk</p>
      <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">Inquiry</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        Have a question about our software, AI training, or working together? Tell us what you have
        in mind.
      </p>
      <InquiryForm />
    </PublicPage>
  );
}
