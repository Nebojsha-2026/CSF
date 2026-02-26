import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import Container from "@/components/Container";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About CSF Australia",
  description:
    "Learn about the College of Sport & Fitness Australia — our history, mission, accreditation, RTO status, facilities, and the team behind our courses.",
};

const timeline = [
  { year: "2010", event: "CSF Australia founded in Sydney with a vision to deliver world-class vocational fitness education." },
  { year: "2012", event: "Achieved Registered Training Organisation (RTO) status with ASQA." },
  { year: "2015", event: "Expanded course offerings to include sport coaching and recreation qualifications." },
  { year: "2018", event: "Opened new state-of-the-art fitness facility in the Sydney CBD campus." },
  { year: "2020", event: "Launched online and blended learning delivery to support flexible study." },
  { year: "2023", event: "Exceeded 500 annual enrolments and celebrated our 1,000th graduate." },
];

const staff = [
  { name: "Dr. Claire Morrison", role: "Chief Executive Officer", bio: "With 20+ years in vocational education, Claire leads CSF's mission to deliver excellence in fitness and sport education." },
  { name: "James Thornton", role: "Head of Fitness Training", bio: "An elite certified personal trainer and exercise scientist, James oversees all fitness programs and trainer development." },
  { name: "Priya Sharma", role: "International Student Coordinator", bio: "Priya supports international students through every step of their journey, from application to graduation." },
  { name: "Marcus Williams", role: "Sport & Coaching Lead", bio: "A former professional athlete and certified coach, Marcus brings real-world experience to all sport coaching programs." },
];

const facilities = [
  { name: "Commercial Gym Floor", description: "Over 200 sq metres of commercial-grade gym equipment for practical training sessions." },
  { name: "Group Fitness Studio", description: "Dedicated studio space for group exercise classes, dance, and functional training." },
  { name: "Sports Courts", description: "Indoor multi-purpose courts for sport coaching practicals and athletic development." },
  { name: "Learning Centre", description: "Modern computer labs, library resources, and quiet study spaces for student use." },
  { name: "Student Common Room", description: "Relaxed common area with kitchen facilities for students to connect and collaborate." },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About CSF Australia"
        subtitle="Who We Are"
        description="Empowering the next generation of fitness and sport professionals through quality vocational education."
        minHeight="min-h-[350px]"
      />

      {/* Mission & Vision */}
      <section className="py-20" aria-labelledby="mission-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#FF6B00] font-semibold text-sm uppercase tracking-widest mb-2">Our Purpose</p>
              <h2 id="mission-heading" className="text-3xl font-bold text-[#003366] mb-6">Mission & Vision</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-[#003366] mb-2">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To deliver nationally recognised, industry-relevant vocational training that equips students with the practical skills and knowledge to build successful careers in fitness, sport, and health.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#003366] mb-2">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be Australia&rsquo;s leading RTO for fitness and sport education, known for graduate quality, industry connections, and student support excellence.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#003366] mb-2">Our Values</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Excellence", "Integrity", "Inclusion", "Innovation", "Respect"].map((v) => (
                      <span key={v} className="px-4 py-2 bg-[#f8f9fa] border border-gray-200 rounded-full text-sm font-medium text-[#003366]">{v}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Accreditation box */}
            <div id="accreditation" className="bg-[#003366] rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-5">Accreditation & RTO Status</h3>
              <div className="space-y-4">
                {[
                  { label: "RTO Number", value: "XXXXX" },
                  { label: "Registered With", value: "Australian Skills Quality Authority (ASQA)" },
                  { label: "Qualifications Framework", value: "Australian Qualifications Framework (AQF)" },
                  { label: "CRICOS Code", value: "0XXXXX" },
                  { label: "ABN", value: "XX XXX XXX XXX" },
                ].map((item) => (
                  <div key={item.label} className="border-b border-white/20 pb-4 last:border-0 last:pb-0">
                    <p className="text-blue-200 text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className="text-white font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-[#f8f9fa]" aria-labelledby="history-heading">
        <Container>
          <div className="text-center mb-12">
            <h2 id="history-heading" className="text-3xl font-bold text-[#003366] mb-4">Our History</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-[#003366]/20 hidden md:block" aria-hidden="true" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={item.year} className={`flex flex-col md:flex-row gap-4 md:gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="md:w-1/2 flex md:justify-end">
                    <div className={`bg-white rounded-xl p-5 shadow-sm max-w-sm w-full ${i % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                      <span className="text-[#FF6B00] font-bold text-lg">{item.year}</span>
                      <p className="text-gray-700 text-sm mt-1 leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-0 items-center justify-center relative" aria-hidden="true">
                    <div className="w-3 h-3 bg-[#FF6B00] rounded-full absolute left-1/2 transform -translate-x-1/2" />
                  </div>
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Facilities */}
      <section className="py-16" aria-labelledby="facilities-heading" id="facilities">
        <Container>
          <div className="text-center mb-12">
            <h2 id="facilities-heading" className="text-3xl font-bold text-[#003366] mb-4">Our Facilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our Sydney CBD campus features modern, purpose-built facilities designed to support hands-on learning.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility) => (
              <div key={facility.name} className="bg-[#f8f9fa] rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-[#003366] rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#003366] mb-2">{facility.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-[#f8f9fa]" aria-labelledby="team-heading">
        <Container>
          <div className="text-center mb-12">
            <h2 id="team-heading" className="text-3xl font-bold text-[#003366] mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Our dedicated team of industry professionals brings real-world experience to every training session.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {staff.map((member) => (
              <div key={member.name} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <span className="text-white font-bold text-xl">{member.name.charAt(0)}</span>
                </div>
                <h3 className="font-bold text-[#003366] mb-1">{member.name}</h3>
                <p className="text-[#FF6B00] text-xs font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#003366]" aria-label="Apply CTA">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join the CSF Community</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Become part of a passionate community of fitness and sport professionals. Apply today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/courses" variant="secondary" size="lg">Explore Courses</Button>
              <Button href="/contact" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-[#003366]">
                Get in Touch
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
