import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CourseCard from "@/components/CourseCard";
import Container from "@/components/Container";
import { courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Browse CSF Australia's nationally recognised vocational courses in fitness, sport coaching, and recreation. Certificate III, IV and Diploma qualifications available.",
};

const categories = [
  { value: "all", label: "All Courses" },
  { value: "fitness", label: "Fitness" },
  { value: "sport", label: "Sport" },
  { value: "coaching", label: "Coaching" },
  { value: "recreation", label: "Recreation" },
];

export default function CoursesPage() {
  return (
    <>
      <HeroSection
        title="Our Courses"
        subtitle="Nationally Recognised Qualifications"
        description="Choose from a range of AQF-accredited vocational courses in fitness, sport, and recreation."
        minHeight="min-h-[350px]"
      />

      <section className="py-16" aria-labelledby="courses-list-heading">
        <Container>
          {/* Category filter (static display) */}
          <div className="flex flex-wrap gap-2 mb-10" role="navigation" aria-label="Course categories">
            {categories.map((cat) => (
              <span
                key={cat.value}
                className={`px-4 py-2 rounded-full text-sm font-medium cursor-default ${
                  cat.value === "all"
                    ? "bg-[#003366] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </span>
            ))}
          </div>

          <h2 id="courses-list-heading" className="sr-only">All Courses</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* Info panel */}
          <div className="mt-14 bg-[#f8f9fa] rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-[#003366] mb-2">Flexible Delivery</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Courses are delivered face-to-face, online, or in a blended format to suit your schedule.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#003366] mb-2">Multiple Intakes</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                New intakes start throughout the year. Contact us to find the next available start date.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#003366] mb-2">RPL Available</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Recognition of Prior Learning (RPL) may be available for your existing skills and experience.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
