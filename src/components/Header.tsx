'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './Button';

const navLinks = [
  { label: 'Courses', href: '/courses' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'International', href: '/international' },
  { label: 'Students', href: '/students' },
  { label: 'About', href: '/about' },
  { label: 'Agents', href: '/agents' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="CSF Home">
            <div className="w-10 h-10 bg-[#003366] rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <span className="text-white font-bold text-sm">CSF</span>
            </div>
            <div className="hidden sm:block">
              <span className="block text-[#003366] font-bold text-base leading-tight">
                College of Sport
              </span>
              <span className="block text-[#FF6B00] font-semibold text-xs leading-tight">
                &amp; Fitness Australia
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-[#FF6B00] bg-orange-50'
                      : 'text-gray-700 hover:text-[#003366] hover:bg-gray-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button href="/admissions" variant="secondary" size="sm">
              Apply Now
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-[#003366] hover:bg-gray-100 transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="px-4 pt-2 pb-4 space-y-1" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2.5 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-[#FF6B00] bg-orange-50'
                      : 'text-gray-700 hover:text-[#003366] hover:bg-gray-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <Button href="/admissions" variant="secondary" size="sm" className="w-full">
                Apply Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
