import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import Container from "@/components/Container";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Education Agents & Partners",
  description:
    "Partner with CSF Australia as an education agent. Learn about our commission structure, partnership benefits, and how to refer international students.",
};

const benefits = [
  { title: "Competitive Commission", description: "Earn competitive commissions on every successfully enrolled student you refer to CSF Australia." },
  { title: "Dedicated Agent Support", description: "Access a dedicated agent liaison team for fast turnaround on applications, CoE issuance, and enquiries." },
  { title: "Marketing Materials", description: "Receive branded brochures, course fact sheets, and digital assets to support your student recruitment." },
  { title: "Regular Training", description: "Participate in agent webinars and site visits to stay updated on courses, fees, and entry requirements." },
  { title: "Student Progress Updates", description: "Receive regular updates on your referred students' progress, attendance, and academic results." },
  { title: "Priority Processing", description: "Applications from registered agents receive priority assessment and faster offer letter issuance." },
];

const process = [
  { step: "01", title: "Register as an Agent", description: "Complete our online agent registration form and provide your business credentials and references." },
  { step: "02", title: "Sign the Agreement", description: "Review and sign the CSF Agent Agreement, which outlines commission rates and responsibilities." },
  { step: "03", title: "Attend Agent Training", description: "Participate in a CSF agent orientation to learn about our courses, entry requirements, and processes." },
  { step: "04", title: "Start Referring Students", description: "Begin referring prospective students using your unique agent code and our online application portal." },
  { step: "05", title: "Earn Commissions", description: "Receive commission payments for successfully enrolled students in accordance with the agreement." },
];

const commissionTable = [
  { level: "Certificate III", domestic: "5%", international: "12%" },
  { level: "Certificate IV", domestic: "5%", international: "12%" },
  { level: "Diploma", domestic: "5%", international: "15%" },
];

export default function AgentsPage() {
  return (
    <>
      <HeroSection
        title="Education Agent Partners"
        subtitle="Partner With CSF"
        description="Join our global network of education agents and help international students access quality vocational education in Australia."
        minHeight="min-h-[350px]"
      />

      {/* Intro */}
      <section className="py-20" aria-labelledby="agents-intro-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#FF6B00] font-semibold text-sm uppercase tracking-widest mb-2">Our Partnership</p>
              <h2 id="agents-intro-heading" className="text-3xl font-bold text-[#003366] mb-5">Why Partner With CSF?</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                CSF Australia is a nationally registered RTO (Registered Training Organisation) and CRICOS provider offering quality vocational qualifications in fitness, sport, and health. We work with a select network of trusted education agents worldwide to help international students achieve their educational goals in Australia.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our agent partners receive dedicated support, competitive commission structures, and access to marketing resources to help them succeed in student recruitment.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.slice(0, 4).map((b) => (
                <div key={b.title} className="bg-[#f8f9fa] rounded-xl p-5">
                  <h3 className="font-bold text-[#003366] text-sm mb-2">{b.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Commission Structure */}
      <section className="py-16 bg-[#003366]" aria-labelledby="commission-heading">
        <Container>
          <div className="text-center mb-10">
            <h2 id="commission-heading" className="text-3xl font-bold text-white mb-3">Commission Structure</h2>
            <p className="text-blue-100 max-w-xl mx-auto text-sm">Earn competitive commissions on every enrolled student. Rates are based on course level and student type.</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="overflow-hidden rounded-xl border border-white/20">
              <table className="w-full text-sm">
                <thead className="bg-white/10">
                  <tr>
                    <th className="text-left px-6 py-4 text-blue-100 font-semibold">Qualification Level</th>
                    <th className="text-left px-6 py-4 text-blue-100 font-semibold">Domestic Referral</th>
                    <th className="text-left px-6 py-4 text-blue-100 font-semibold">International Referral</th>
                  </tr>
                </thead>
                <tbody>
                  {commissionTable.map((row, i) => (
                    <tr key={row.level} className={i % 2 === 0 ? "bg-white/5" : "bg-transparent"}>
                      <td className="px-6 py-4 text-white font-medium">{row.level}</td>
                      <td className="px-6 py-4 text-blue-100">{row.domestic}</td>
                      <td className="px-6 py-4 text-[#FF6B00] font-bold">{row.international}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-blue-200 text-xs mt-4 text-center">Commission rates are based on total tuition fees. Full details are outlined in the Agent Agreement.</p>
          </div>
        </Container>
      </section>

      {/* How to Partner */}
      <section className="py-20" aria-labelledby="how-to-partner-heading">
        <Container>
          <div className="text-center mb-12">
            <h2 id="how-to-partner-heading" className="text-3xl font-bold text-[#003366] mb-4">How to Become an Agent</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {parseInt(step.step)}
                </div>
                <h3 className="font-bold text-[#003366] text-sm mb-2">{step.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/contact" variant="secondary" size="lg">Register as an Agent</Button>
          </div>
        </Container>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 bg-[#f8f9fa]" aria-labelledby="benefits-heading">
        <Container>
          <h2 id="benefits-heading" className="text-3xl font-bold text-[#003366] mb-8 text-center">All Agent Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-8 h-8 bg-[#FF6B00]/10 rounded-lg flex items-center justify-center mb-3" aria-hidden="true">
                  <svg className="w-4 h-4 text-[#FF6B00]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#003366] mb-2 text-sm">{b.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[#FF6B00]" aria-label="Agent enquiry CTA">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Partner With Us?</h2>
            <p className="text-orange-100 max-w-xl mx-auto mb-8">
              Contact our agent relations team to discuss partnership opportunities and start the registration process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">Contact Agent Team</Button>
              <Button href="mailto:agents@csf.edu.au" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-[#FF6B00]">
                Email agents@csf.edu.au
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
