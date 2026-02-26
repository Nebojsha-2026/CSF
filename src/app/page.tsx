import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CourseCard from "@/components/CourseCard";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { courses } from "@/lib/courses";
import { createServerSupabaseClient } from "@/lib/supabase-server";

export const metadata: Metadata = {
  title: "Study Sport & Fitness in Australia | CSF Australia",
  description:
    "Start your career in fitness, sport, and health with CSF Australia's nationally recognised RTO qualifications. Courses in fitness, coaching, and sport management.",
};

interface Announcement {
  id: string;
  title: string;
  content: string;
  published_at: string;
}

async function getAnnouncements(): Promise<Announcement[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return [];
  }
  try {
    const supabase = createServerSupabaseClient();
    const { data, error } = await supabase
      .from("announcements")
      .select("id, title, content, published_at")
      .order("published_at", { ascending: false })
      .limit(3);
    if (error) return [];
    return (data as Announcement[]) ?? [];
  } catch {
    return [];
  }
}

async function AnnouncementsSection() {
  const announcements = await getAnnouncements();
  if (announcements.length === 0) return null;

  return (
    <section className="bg-[#003366] py-10" aria-label="Announcements">
      <Container>
        <h2 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
          <svg className="w-5 h-5 text-[#FF6B00]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
          </svg>
          Latest Announcements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {announcements.map((item) => (
            <div key={item.id} className="bg-white/10 rounded-lg p-5">
              <p className="text-xs text-blue-200 mb-1">
                {new Date(item.published_at).toLocaleDateString("en-AU")}
              </p>
              <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed line-clamp-3">{item.content}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const stats = [
  { value: "95%", label: "Graduate Employment Rate" },
  { value: "500+", label: "Students Enrolled Annually" },
  { value: "10+", label: "Years of Excellence" },
  { value: "5★", label: "Average Student Rating" },
];

const whyCSF = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Nationally Recognised Qualifications",
    description: "All courses are nationally accredited under the Australian Qualifications Framework (AQF) and recognised across Australia.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Expert Industry Trainers",
    description: "Learn from practising industry professionals with real-world experience in fitness, sport, and health sectors.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Modern Facilities",
    description: "Access to state-of-the-art fitness facilities, sports courts, and equipment to support your hands-on training.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "International Student Support",
    description: "Dedicated support services for international students including visa guidance, OSHC, and cultural adjustment assistance.",
  },
];

const testimonials = [
  {
    quote: "The Certificate IV in Fitness at CSF gave me the confidence and skills to launch my personal training business. The trainers were incredibly supportive.",
    author: "Sarah M.",
    role: "Personal Trainer & CSF Graduate",
  },
  {
    quote: "As an international student, the support I received at CSF was outstanding. From visa help to finding accommodation, they were there every step of the way.",
    author: "Kenji T.",
    role: "Diploma of Sport Graduate",
  },
  {
    quote: "The industry connections I made through CSF's placement program led directly to my current role as a Sport Development Officer.",
    author: "Emma R.",
    role: "Sport Development Officer & CSF Graduate",
  },
];

export default async function HomePage() {
  return (
    <>
      <HeroSection
        title="Study Sport & Fitness in Australia"
        subtitle="Registered Training Organisation"
        description="Launch your career in fitness, sport coaching, and health with nationally recognised qualifications from CSF Australia."
        primaryCta={{ label: "Explore Courses", href: "/courses" }}
        secondaryCta={{ label: "Apply Now", href: "/admissions" }}
      />

      <AnnouncementsSection />

      <section className="bg-[#f8f9fa] border-b border-gray-200" aria-label="Key statistics">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center py-8 px-4">
                <p className="text-3xl lg:text-4xl font-bold text-[#FF6B00] mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20" aria-labelledby="courses-heading">
        <Container>
          <div className="text-center mb-12">
            <p className="text-[#FF6B00] font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p>
            <h2 id="courses-heading" className="text-3xl sm:text-4xl font-bold text-[#003366] mb-4">Our Courses</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Nationally recognised qualifications to kickstart or advance your career in the fitness and sport industry.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {courses.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center">
            <Button href="/courses" variant="outline">View All Courses</Button>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-[#f8f9fa]" aria-labelledby="why-csf-heading">
        <Container>
          <div className="text-center mb-12">
            <p className="text-[#FF6B00] font-semibold text-sm uppercase tracking-widest mb-2">Our Difference</p>
            <h2 id="why-csf-heading" className="text-3xl sm:text-4xl font-bold text-[#003366] mb-4">Why Choose CSF?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyCSF.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-[#003366] rounded-2xl flex items-center justify-center text-white mx-auto mb-5">
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#003366] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20" aria-labelledby="testimonials-heading">
        <Container>
          <div className="text-center mb-12">
            <p className="text-[#FF6B00] font-semibold text-sm uppercase tracking-widest mb-2">Student Stories</p>
            <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold text-[#003366] mb-4">What Our Graduates Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <blockquote key={t.author} className="bg-[#f8f9fa] rounded-2xl p-8">
                <svg className="w-8 h-8 text-[#FF6B00] mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7.9C8.5 11.7 10 10 12 9.3L10 8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6.1c.6-2.3 2.1-4 4.1-4.7L24 8z" />
                </svg>
                <p className="text-gray-700 leading-relaxed mb-6 text-sm">{t.quote}</p>
                <footer>
                  <p className="font-bold text-[#003366] text-sm">{t.author}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#FF6B00] py-16" aria-label="Call to action">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
              Enrol in a nationally recognised course and take the first step toward your dream career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/admissions" variant="primary" size="lg">Apply Now</Button>
              <Button href="/contact" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-[#FF6B00]">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
