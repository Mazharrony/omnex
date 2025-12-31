import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — OMNEX",
  description: "Get in touch with OMNEX. Request a quote or inquire about our solutions.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

