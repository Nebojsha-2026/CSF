import Link from 'next/link';
import Button from './Button';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  backgroundImage?: string;
  overlayOpacity?: number;
  minHeight?: string;
  centered?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  overlayOpacity = 60,
  minHeight = 'min-h-[600px]',
  centered = true,
}: HeroSectionProps) {
  const bgStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {};

  return (
    <section
      className={`relative flex items-center ${minHeight}`}
      style={bgStyle}
      aria-label="Hero section"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#003366]"
        style={{ opacity: backgroundImage ? overlayOpacity / 100 : 1 }}
        aria-hidden="true"
      />

      {/* Decorative accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF6B00]"
        aria-hidden="true"
      />

      <div className={`relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full ${centered ? 'text-center' : ''}`}>
        {subtitle && (
          <p className="text-[#FF6B00] font-semibold text-sm sm:text-base uppercase tracking-widest mb-3">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
          {title}
        </h1>
        {description && (
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            {description}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className={`flex flex-col sm:flex-row gap-4 ${centered ? 'justify-center' : ''}`}>
            {primaryCta && (
              <Button href={primaryCta.href} variant="secondary" size="lg">
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md border-2 border-white text-white hover:bg-white hover:text-[#003366] transition-colors duration-200"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
