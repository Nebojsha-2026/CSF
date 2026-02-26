import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import Container from "@/components/Container";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "International Students",
  description:
    "Information for international students studying at CSF Australia. Learn about student visas, OSHC, English requirements, and student support services.",
};

const steps = [
  { step: "01", title: "Choose Your Course", description: "Browse our CRICOS-registered courses and choose the qualification that fits your career goals." },
  { step: "02", title: "Apply Online", description: "Submit your application with certified academic transcripts and English proficiency results." },
  { step: "03", title: "Receive Offer & CoE", description: "Accept your offer and receive your Confirmation of Enrolment (CoE) to support your visa application." },
  { step: "04", title: "Apply for Student Visa", description: "Apply for a Student Visa (Subclass 500) through the Department of Home Affairs." },
  { step: "05", title: "Arrange OSHC", description: "Purchase Overseas Student Health Cover (OSHC) for the duration of your course." },
  { step: "06", title: "Arrive & Study", description: "Attend orientation, meet your trainers, and begin your studies in Australia." },
];

const support = [
  {
    title: "Pre-Arrival Support",
    items: [
      "Visa application guidance",
      "Accommodation assistance",
      "Airport pickup coordination",
      "Pre-arrival orientation materials",
    ],
  },
  {
    title: "On-Campus Support",
    items: [
      "International student orientation",
      "English language support",
      "Cultural adjustment guidance",
      "Buddy program with domestic students",
    ],
  },
  {
    title: "Ongoing Wellbeing",
    items: [
      "Counselling and welfare services",
      "Career and employment support",
      "Emergency 24/7 contact line",
      "Social and cultural activities",
    ],
  },
];

const faqs = [
  {
    q: "What English level do I need?",
    a: "You will need a minimum IELTS Academic score of 5.5 (no band below 5.0), or equivalent in TOEFL iBT (46+), PTE Academic (42+), or Cambridge English (B2 Preliminary).",
  },
  {
    q: "Can I work while studying?",
    a: "Yes. Student Visa (Subclass 500) holders can work up to 48 hours per fortnight during the academic term and unlimited hours during scheduled breaks.",
  },
  {
    q: "What is OSHC?",
    a: "Overseas Student Health Cover (OSHC) is mandatory health insurance for international students in Australia. It covers doctor visits, hospitalisation, and some prescription medications.",
  },
  {
    q: "Can I extend my visa to complete the course?",
    a: "Yes. If your course duration is extended for academic reasons, CSF will support you in applying for a visa extension through the Department of Home Affairs.",
  },
  {
    q: "Is there accommodation available on campus?",
    a: "CSF does not have on-campus accommodation, but our International Student team can help you find suitable homestay, shared housing, or student accommodation options near our campus.",
  },
];

export default function InternationalPage() {
  return (
    <>
      <HeroSection
        title="International Students"
        subtitle="Study in Australia"
        description="Experience world-class vocational education in Australia. CSF Australia welcomes students from around the globe."
        minHeight="min-h-[380px]"
      />

      {/* Key info stats */}
      <section className="bg-[#f8f9fa] border-b border-gray-200" aria-label="International student key facts">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
            {[
              { value: "CRICOS", label: "Registered Provider", sub: "Code: 0XXXXX" },
              { value: "30+", label: "Countries Represented" },
              { value: "IELTS 5.5", label: "Min. English Requirement" },
              { value: "2 intakes", label: "Per Year" },
            ].map((stat) => (
              <div key={stat.label} className="text-center py-8 px-4">
                <p className="text-2xl lg:text-3xl font-bold text-[#FF6B00] mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                {stat.sub && <p className="text-xs text-gray-400 mt-0.5">{stat.sub}</p>}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Application Steps */}
      <section className="py-20" aria-labelledby="intl-apply-heading">
        <Container>
          <div className="text-center mb-12">
            <h2 id="intl-apply-heading" className="text-3xl font-bold text-[#003366] mb-4">How to Apply as an International Student</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these steps to start your journey at CSF Australia. Our international admissions team is here to support you throughout.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="relative bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <span className="absolute top-4 right-4 text-4xl font-black text-[#003366]/8">{s.step}</span>
                <div className="w-8 h-8 bg-[#FF6B00] rounded-full flex items-center justify-center text-white font-bold text-sm mb-4">
                  {parseInt(s.step)}
                </div>
                <h3 className="font-bold text-[#003366] mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/admissions" variant="secondary" size="lg">Start Application</Button>
          </div>
        </Container>
      </section>

      {/* Visa & OSHC Information */}
      <section className="py-16 bg-[#003366]" aria-labelledby="visa-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 id="visa-heading" className="text-3xl font-bold text-white mb-6">Visa &amp; OSHC Information</h2>
              <div className="space-y-6">
                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="text-white font-bold mb-3">Student Visa (Subclass 500)</h3>
                  <p className="text-blue-100 text-sm leading-relaxed mb-3">
                    To study at CSF Australia, you will need a Student Visa (Subclass 500) issued by the Australian Department of Home Affairs.
                  </p>
                  <ul className="space-y-1.5 text-sm text-blue-100">
                    {[
                      "Requires a Confirmation of Enrolment (CoE)",
                      "Must maintain satisfactory course progress",
                      "Allows work rights of 48 hrs/fortnight during term",
                      "OSHC must be maintained for visa duration",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-[#FF6B00] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="text-white font-bold mb-3">Overseas Student Health Cover (OSHC)</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    OSHC is mandatory for all international students in Australia and must be maintained for the duration of your student visa. CSF can assist you in arranging OSHC through our approved provider partners.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-4">English Requirements</h3>
              <div className="bg-white/10 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-white/10">
                    <tr>
                      <th className="text-left px-5 py-3 text-blue-100 font-semibold">Test</th>
                      <th className="text-left px-5 py-3 text-blue-100 font-semibold">Minimum Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { test: "IELTS Academic", score: "5.5 (no band below 5.0)" },
                      { test: "TOEFL iBT", score: "46+" },
                      { test: "PTE Academic", score: "42+" },
                      { test: "Cambridge B2 Preliminary", score: "Pass" },
                      { test: "OET", score: "B grade or above" },
                    ].map((row, i) => (
                      <tr key={row.test} className={i % 2 === 0 ? "bg-white/5" : "bg-transparent"}>
                        <td className="px-5 py-3 text-white">{row.test}</td>
                        <td className="px-5 py-3 text-blue-100">{row.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-blue-200 text-xs mt-3">English requirements may vary by course. Please contact admissions for specific requirements.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Support Services */}
      <section className="py-20" aria-labelledby="intl-support-heading">
        <Container>
          <div className="text-center mb-12">
            <h2 id="intl-support-heading" className="text-3xl font-bold text-[#003366] mb-4">International Student Support</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We understand that moving to a new country is a big step. Our dedicated international student support team is with you every step of the way.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {support.map((section) => (
              <div key={section.title} className="bg-[#f8f9fa] rounded-xl p-6">
                <h3 className="font-bold text-[#003366] mb-4">{section.title}</h3>
                <ul className="space-y-2.5">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-[#FF6B00] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-[#f8f9fa]" aria-labelledby="intl-faq-heading">
        <Container>
          <h2 id="intl-faq-heading" className="text-3xl font-bold text-[#003366] mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-[#003366] text-sm hover:bg-[#f8f9fa] transition-colors list-none">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FF6B00]" aria-label="International apply CTA">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Study in Australia?</h2>
            <p className="text-orange-100 mb-8 max-w-xl mx-auto">
              Contact our international admissions team or speak to one of our authorised education agents in your country.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/admissions" variant="primary" size="lg">Apply Now</Button>
              <Button href="/agents" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-[#FF6B00]">
                Find an Agent
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
