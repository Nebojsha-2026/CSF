import Link from 'next/link';
import Container from './Container';

const footerLinks = {
  courses: {
    title: 'Courses',
    links: [
      { label: 'Certificate III in Fitness', href: '/courses/certificate-iii-fitness' },
      { label: 'Certificate IV in Fitness', href: '/courses/certificate-iv-fitness' },
      { label: 'Diploma of Sport', href: '/courses/diploma-of-sport' },
      { label: 'Cert IV Sport Coaching', href: '/courses/certificate-iv-sport-coaching' },
      { label: 'Cert III Sport & Recreation', href: '/courses/certificate-iii-sport-recreation' },
      { label: 'View All Courses', href: '/courses' },
    ],
  },
  study: {
    title: 'Study at CSF',
    links: [
      { label: 'Admissions', href: '/admissions' },
      { label: 'International Students', href: '/international' },
      { label: 'Fees & Scholarships', href: '/admissions#fees' },
      { label: 'Intake Dates', href: '/admissions#intakes' },
      { label: 'Student Portal', href: '/students' },
    ],
  },
  about: {
    title: 'About CSF',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Accreditation', href: '/about#accreditation' },
      { label: 'Facilities', href: '/about#facilities' },
      { label: 'Education Agents', href: '/agents' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#003366] text-white" aria-label="Site footer">
      {/* Main footer */}
      <Container className="py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5" aria-label="CSF Home">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <span className="text-[#003366] font-bold text-sm">CSF</span>
              </div>
              <div>
                <span className="block text-white font-bold text-sm leading-tight">College of Sport</span>
                <span className="block text-[#FF6B00] font-semibold text-xs leading-tight">&amp; Fitness Australia</span>
              </div>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-5">
              Registered Training Organisation (RTO) providing high-quality vocational education in fitness, sport, and health across Australia.
            </p>
            <div className="bg-white/10 rounded-lg px-4 py-3 inline-block">
              <p className="text-xs text-blue-200 uppercase tracking-wider font-medium">RTO Number</p>
              <p className="text-white font-bold text-base">XXXXX</p>
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-white/20">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-blue-200 text-sm hover:text-white hover:translate-x-0.5 transition-all duration-200 inline-flex items-center gap-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="mt-12 pt-8 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <p className="text-white text-sm font-medium">Address</p>
              <p className="text-blue-200 text-sm">123 Fitness Street, Sydney NSW 2000, Australia</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
            </svg>
            <div>
              <p className="text-white text-sm font-medium">Phone</p>
              <a href="tel:+61299999999" className="text-blue-200 text-sm hover:text-white transition-colors">+61 2 9999 9999</a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <p className="text-white text-sm font-medium">Email</p>
              <a href="mailto:info@csf.edu.au" className="text-blue-200 text-sm hover:text-white transition-colors">info@csf.edu.au</a>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/20">
        <Container className="py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-sm">
              &copy; {currentYear} College of Sport &amp; Fitness Australia. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link href="/privacy" className="text-blue-200 text-xs hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-blue-200 text-xs hover:text-white transition-colors">Terms of Use</Link>
              <Link href="/accessibility" className="text-blue-200 text-xs hover:text-white transition-colors">Accessibility</Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
