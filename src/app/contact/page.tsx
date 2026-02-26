import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ContactFormClient from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the College of Sport & Fitness Australia. Contact us for course enquiries, admissions information, or student support.",
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="Get in Touch"
        description="Have a question about our courses or admissions? We'd love to hear from you."
        minHeight="min-h-[300px]"
      />
      <ContactFormClient />
    </>
  );
}
