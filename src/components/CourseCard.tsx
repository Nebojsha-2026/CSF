import Link from 'next/link';
import Button from './Button';

export interface Course {
  id: string;
  slug: string;
  name: string;
  code: string;
  duration: string;
  category: string;
  description: string;
  level?: string;
}

interface CourseCardProps {
  course: Course;
}

const categoryColors: Record<string, string> = {
  fitness: 'bg-blue-100 text-blue-800',
  sport: 'bg-green-100 text-green-800',
  coaching: 'bg-purple-100 text-purple-800',
  recreation: 'bg-orange-100 text-orange-800',
  default: 'bg-gray-100 text-gray-800',
};

export default function CourseCard({ course }: CourseCardProps) {
  const badgeColor = categoryColors[course.category] ?? categoryColors.default;

  return (
    <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
      {/* Card header accent */}
      <div className="h-2 bg-[#003366]" aria-hidden="true" />

      <div className="p-6 flex flex-col flex-1">
        {/* Category & Level badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${badgeColor}`}>
            {course.category}
          </span>
          {course.level && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
              {course.level}
            </span>
          )}
        </div>

        {/* Course name */}
        <h3 className="text-lg font-bold text-[#003366] mb-1 leading-snug">
          <Link
            href={`/courses/${course.slug}`}
            className="hover:text-[#FF6B00] transition-colors duration-200"
          >
            {course.name}
          </Link>
        </h3>

        {/* Course code */}
        <p className="text-sm text-gray-500 font-mono mb-3">{course.code}</p>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
          {course.description}
        </p>

        {/* Duration */}
        <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-5">
          <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{course.duration}</span>
        </div>

        {/* CTA */}
        <Button href={`/courses/${course.slug}`} variant="primary" size="sm" className="w-full">
          View Course Details
        </Button>
      </div>
    </article>
  );
}
