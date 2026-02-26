import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { courses, courseDetails } from "@/lib/courses";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = courseDetails[slug];
  if (!detail) return { title: "Course Not Found" };
  return {
    title: `${detail.name} (${detail.code})`,
    description: detail.overview.slice(0, 160),
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = courseDetails[slug];
  if (!detail) notFound();

  const coreUnits = detail.units.filter((u) => u.type === "core");
  const electiveUnits = detail.units.filter((u) => u.type === "elective");

  return (
    <>
      {/* Header */}
      <div className="bg-[#003366] py-16 border-b-4 border-[#FF6B00]">
        <Container>
          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white" aria-current="page">{detail.name}</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-blue-100 capitalize">{detail.category}</span>
            <span className="px-3 py-1 bg-[#FF6B00] rounded-full text-xs text-white font-medium">{detail.level}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{detail.name}</h1>
          <p className="text-blue-200 font-mono text-lg mb-6">{detail.code}</p>
          <div className="flex flex-wrap gap-6 text-sm text-blue-100">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#FF6B00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {detail.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#FF6B00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {detail.location}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#FF6B00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
              </svg>
              {detail.deliveryMode}
            </span>
          </div>
        </Container>
      </div>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">Course Overview</h2>
                <p className="text-gray-600 leading-relaxed">{detail.overview}</p>
              </div>

              {/* Learning Outcomes */}
              <div>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">Learning Outcomes</h2>
                <ul className="space-y-3">
                  {detail.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm leading-relaxed">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Units */}
              <div>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">Units of Competency</h2>
                {coreUnits.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Core Units</h3>
                    <div className="rounded-xl border border-gray-200 overflow-hidden">
                      {coreUnits.map((unit, i) => (
                        <div key={unit.code} className={`flex items-center gap-4 p-4 ${i > 0 ? "border-t border-gray-100" : ""}`}>
                          <span className="font-mono text-xs text-gray-400 w-28 flex-shrink-0">{unit.code}</span>
                          <span className="text-sm text-gray-700">{unit.name}</span>
                          <span className="ml-auto px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full font-medium flex-shrink-0">Core</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {electiveUnits.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Elective Units</h3>
                    <div className="rounded-xl border border-gray-200 overflow-hidden">
                      {electiveUnits.map((unit, i) => (
                        <div key={unit.code} className={`flex items-center gap-4 p-4 ${i > 0 ? "border-t border-gray-100" : ""}`}>
                          <span className="font-mono text-xs text-gray-400 w-28 flex-shrink-0">{unit.code}</span>
                          <span className="text-sm text-gray-700">{unit.name}</span>
                          <span className="ml-auto px-2 py-0.5 bg-orange-50 text-orange-700 text-xs rounded-full font-medium flex-shrink-0">Elective</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Entry Requirements */}
              <div>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">Entry Requirements</h2>
                <ul className="space-y-2">
                  {detail.entryRequirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-[#003366] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Career Outcomes */}
              <div>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">Career Outcomes</h2>
                <div className="flex flex-wrap gap-2">
                  {detail.careerOutcomes.map((career) => (
                    <span key={career} className="px-4 py-2 bg-[#f8f9fa] border border-gray-200 rounded-full text-sm text-gray-700 font-medium">
                      {career}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6" aria-label="Course details">
              {/* Fees */}
              <div className="bg-[#f8f9fa] rounded-2xl p-6">
                <h3 className="font-bold text-[#003366] mb-4">Course Fees</h3>
                <dl className="space-y-3">
                  {detail.fees.map((fee) => (
                    <div key={fee.label} className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                      <dt className="text-sm text-gray-600">{fee.label}</dt>
                      <dd className="font-semibold text-[#003366] text-sm">{fee.amount}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Apply CTA */}
              <div className="bg-[#003366] rounded-2xl p-6 text-center">
                <h3 className="font-bold text-white mb-2">Ready to Apply?</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Take the next step in your career. Applications are open now.
                </p>
                <Button href="/admissions" variant="secondary" size="md" className="w-full">
                  Apply Now
                </Button>
                <Link href="/contact" className="block mt-3 text-blue-200 text-sm hover:text-white transition-colors">
                  Have questions? Contact us
                </Link>
              </div>

              {/* Quick links */}
              <div className="border border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-[#003366] mb-4 text-sm uppercase tracking-wide">Related Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/admissions" className="text-sm text-[#003366] hover:text-[#FF6B00] transition-colors">Admissions Information</Link></li>
                  <li><Link href="/admissions#fees" className="text-sm text-[#003366] hover:text-[#FF6B00] transition-colors">Fees &amp; Scholarships</Link></li>
                  <li><Link href="/international" className="text-sm text-[#003366] hover:text-[#FF6B00] transition-colors">International Students</Link></li>
                  <li><Link href="/courses" className="text-sm text-[#003366] hover:text-[#FF6B00] transition-colors">All Courses</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
