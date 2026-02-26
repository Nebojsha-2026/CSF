import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import Container from "@/components/Container";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "How to apply to CSF Australia. Entry requirements, fees, scholarships, intake dates, and the application process for domestic and international students.",
};

const steps = [
  { step: "01", title: "Choose Your Course", description: "Browse our courses and select the qualification that aligns with your career goals." },
  { step: "02", title: "Check Entry Requirements", description: "Review the entry requirements for your chosen course and ensure you meet the criteria." },
  { step: "03", title: "Submit Application", description: "Complete the online application form and attach the required supporting documents." },
  { step: "04", title: "Receive Offer Letter", description: "If your application is successful, you will receive an official offer letter from CSF." },
  { step: "05", title: "Confirm Enrolment", description: "Accept your offer and pay the enrolment deposit to secure your place." },
  { step: "06", title: "Orientation", description: "Attend orientation to meet your trainers and fellow students before your course begins." },
];

const intakes = [
  { month: "February", status: "Enrolling Now", spots: "Limited spots available" },
  { month: "May", status: "Open", spots: "Spots available" },
  { month: "July", status: "Open", spots: "Spots available" },
  { month: "October", status: "Coming Soon", spots: "Applications open March" },
];

const fees = [
  { course: "Certificate III in Fitness (SIS30321)", domestic: "AUD $3,500", international: "AUD $7,000" },
  { course: "Certificate IV in Fitness (SIS40221)", domestic: "AUD $5,500", international: "AUD $10,000" },
  { course: "Diploma of Sport (SIS50121)", domestic: "AUD $8,500", international: "AUD $14,000" },
  { course: "Cert IV in Sport Coaching (SIS40321)", domestic: "AUD $5,500", international: "AUD $10,000" },
  { course: "Cert III in Sport & Recreation (SIS30121)", domestic: "AUD $3,500", international: "AUD $7,000" },
];

export default function AdmissionsPage() {
  return (
    <>
      <HeroSection
        title="Admissions"
        subtitle="How to Apply"
        description="Follow our straightforward application process to join CSF Australia's next intake."
        minHeight="min-h-[350px]"
      />

      {/* How to Apply */}
      <section className="py-20" aria-labelledby="apply-heading">
        <Container>
          <div className="text-center mb-12">
            <h2 id="apply-heading" className="text-3xl font-bold text-[#003366] mb-4">How to Apply</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our application process is simple and straightforward. Follow these steps to secure your place.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="bg-[#f8f9fa] rounded-xl p-6">
                <span className="text-5xl font-black text-[#003366]/10 block mb-3">{s.step}</span>
                <h3 className="font-bold text-[#003366] mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/contact" variant="secondary" size="lg">Apply Now</Button>
          </div>
        </Container>
      </section>

      {/* Entry Requirements */}
      <section className="py-16 bg-[#f8f9fa]" aria-labelledby="requirements-heading" id="requirements">
        <Container>
          <h2 id="requirements-heading" className="text-3xl font-bold text-[#003366] mb-8">Entry Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-[#003366] mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-[#003366] rounded-lg flex items-center justify-center text-white text-sm">AU</span>
                Domestic Students
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                {["Completion of Year 10 (Certificate III) or Year 12 (Certificate IV/Diploma)",
                  "Australian Citizen, Permanent Resident, or New Zealand Citizen",
                  "Language, Literacy and Numeracy (LLN) assessment",
                  "Pre-enrolment interview with course advisor",
                  "Working with Children Check (where required)",
                  "Current First Aid certificate (or willingness to obtain)"].map((req) => (
                  <li key={req} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-[#003366] mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-[#FF6B00] rounded-lg flex items-center justify-center text-white text-sm">INT</span>
                International Students
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                {["Completion of Year 12 equivalent in home country",
                  "English proficiency: IELTS 5.5+ or equivalent",
                  "Valid student visa (subclass 500)",
                  "Overseas Student Health Cover (OSHC)",
                  "Certified copies of academic transcripts",
                  "Pre-enrolment interview (English language assessment)"].map((req) => (
                  <li key={req} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Fees */}
      <section className="py-16" aria-labelledby="fees-heading" id="fees">
        <Container>
          <h2 id="fees-heading" className="text-3xl font-bold text-[#003366] mb-8">Tuition Fees</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-[#003366] text-white">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold">Course</th>
                  <th className="text-left px-6 py-4 font-semibold">Domestic</th>
                  <th className="text-left px-6 py-4 font-semibold">International</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((row, i) => (
                  <tr key={row.course} className={i % 2 === 0 ? "bg-white" : "bg-[#f8f9fa]"}>
                    <td className="px-6 py-4 text-gray-700">{row.course}</td>
                    <td className="px-6 py-4 font-medium text-[#003366]">{row.domestic}</td>
                    <td className="px-6 py-4 font-medium text-[#003366]">{row.international}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4">* Fees are indicative and subject to change. Payment plans are available. Contact us for current fees and Government funding options.</p>
        </Container>
      </section>

      {/* Intake Dates */}
      <section className="py-16 bg-[#f8f9fa]" aria-labelledby="intakes-heading" id="intakes">
        <Container>
          <h2 id="intakes-heading" className="text-3xl font-bold text-[#003366] mb-8">Intake Dates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {intakes.map((intake) => (
              <div key={intake.month} className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <p className="text-2xl font-bold text-[#003366] mb-2">{intake.month}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${intake.status === "Enrolling Now" ? "bg-green-100 text-green-800" : intake.status === "Open" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-600"}`}>
                  {intake.status}
                </span>
                <p className="text-xs text-gray-500">{intake.spots}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Scholarships */}
      <section className="py-16" aria-labelledby="scholarships-heading" id="scholarships">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#FF6B00] font-semibold text-sm uppercase tracking-widest mb-2">Financial Support</p>
              <h2 id="scholarships-heading" className="text-3xl font-bold text-[#003366] mb-4">Scholarships & Funding</h2>
              <p className="text-gray-600 leading-relaxed mb-6">CSF Australia is committed to making education accessible. We offer a range of scholarships and payment options to help you achieve your goals.</p>
              <ul className="space-y-4">
                {[
                  { name: "CSF Excellence Scholarship", value: "Up to $1,000 off tuition", desc: "For high-achieving students demonstrating academic excellence and community involvement." },
                  { name: "Skills First Funding", value: "Subsidised fees", desc: "Victorian Government funding available for eligible domestic students." },
                  { name: "Payment Plans", value: "Flexible payments", desc: "Spread your tuition across the duration of your course." },
                ].map((s) => (
                  <li key={s.name} className="flex gap-4">
                    <div className="w-2 h-2 bg-[#FF6B00] rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-bold text-[#003366] text-sm">{s.name} — <span className="text-[#FF6B00]">{s.value}</span></p>
                      <p className="text-gray-600 text-sm mt-0.5">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#003366] rounded-2xl p-8 text-center">
              <h3 className="text-white font-bold text-xl mb-3">Need Help Deciding?</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Our student advisors are available to guide you through the admissions process and help you find the right course and funding options.
              </p>
              <Button href="/contact" variant="secondary" size="md" className="w-full">
                Talk to an Advisor
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
