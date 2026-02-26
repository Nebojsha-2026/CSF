import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import Container from "@/components/Container";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Current Students",
  description:
    "Resources and information for current CSF Australia students. Access timetables, student policies, support services, and the student portal.",
};

const resources = [
  {
    title: "Student Portal",
    description: "Access your course materials, assessments, timetables, and results through the online student portal.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
    link: "#",
    linkLabel: "Login to Portal",
  },
  {
    title: "Timetables",
    description: "View your class schedule, room allocations, and upcoming assessment dates.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    link: "#",
    linkLabel: "View Timetable",
  },
  {
    title: "Library Resources",
    description: "Access textbooks, journal articles, and online learning resources through the CSF library.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    link: "#",
    linkLabel: "Access Library",
  },
  {
    title: "Academic Support",
    description: "Get help with your studies from our dedicated learning support team. Tutoring and writing assistance available.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    link: "/contact",
    linkLabel: "Request Support",
  },
];

const policies = [
  { name: "Student Code of Conduct", description: "Outlines expectations for student behaviour and academic integrity." },
  { name: "Assessment Policy", description: "Information on assessment procedures, submission requirements, and appeals." },
  { name: "Attendance Policy", description: "Requirements for course attendance and procedures for managing absences." },
  { name: "Complaints & Appeals", description: "How to raise a concern, make a formal complaint, or appeal a decision." },
  { name: "Refund Policy", description: "Information on course withdrawal, deferral, and fee refund procedures." },
  { name: "Privacy Policy", description: "How CSF collects, uses, and protects your personal information." },
];

export default function StudentsPage() {
  return (
    <>
      <HeroSection
        title="Current Students"
        subtitle="Student Hub"
        description="Everything you need to succeed in your studies at CSF Australia."
        minHeight="min-h-[350px]"
      />

      {/* Quick Resources */}
      <section className="py-20" aria-labelledby="resources-heading">
        <Container>
          <div className="text-center mb-12">
            <h2 id="resources-heading" className="text-3xl font-bold text-[#003366] mb-4">Student Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Access all the tools and support you need for a successful learning experience.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => (
              <div key={resource.title} className="bg-[#f8f9fa] rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#003366] rounded-xl flex items-center justify-center text-white mb-4">
                  {resource.icon}
                </div>
                <h3 className="font-bold text-[#003366] mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{resource.description}</p>
                <Button href={resource.link} variant="outline" size="sm">
                  {resource.linkLabel}
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Student Support */}
      <section className="py-16 bg-[#003366]" aria-labelledby="support-heading">
        <Container>
          <div className="text-center mb-12">
            <h2 id="support-heading" className="text-3xl font-bold text-white mb-4">Student Support Services</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">We&rsquo;re committed to your wellbeing and success. Access our range of support services.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Wellbeing & Counselling", desc: "Free confidential counselling and wellbeing support for all students, both on-campus and online." },
              { title: "Career Services", desc: "Resume assistance, interview coaching, and industry placement support to help launch your career." },
              { title: "Disability Support", desc: "Reasonable adjustments and support plans for students with disabilities or health conditions." },
            ].map((service) => (
              <div key={service.title} className="bg-white/10 rounded-xl p-6">
                <h3 className="text-white font-bold mb-2">{service.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Policies */}
      <section className="py-16" aria-labelledby="policies-heading">
        <Container>
          <h2 id="policies-heading" className="text-3xl font-bold text-[#003366] mb-8">Student Policies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {policies.map((policy) => (
              <div key={policy.name} className="flex items-start gap-4 p-5 bg-[#f8f9fa] rounded-xl hover:shadow-sm transition-shadow">
                <svg className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-bold text-[#003366] text-sm mb-1">{policy.name}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{policy.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6">For copies of all student policies and procedures, contact the Student Services team or visit the Student Portal.</p>
        </Container>
      </section>

      {/* Contact Support */}
      <section className="py-12 bg-[#f8f9fa] border-t border-gray-200" aria-label="Student support contact">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-[#003366] mb-1">Need Help?</h2>
              <p className="text-gray-600 text-sm">Our Student Services team is available Monday–Friday, 9am–5pm AEST.</p>
            </div>
            <div className="flex gap-4 flex-shrink-0">
              <Button href="tel:+61299999999" variant="outline" size="sm">Call Us</Button>
              <Button href="/contact" variant="primary" size="sm">Contact Support</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
