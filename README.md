# College of Sport & Fitness (CSF) Australia — Website

A modern Next.js website for the College of Sport & Fitness (CSF) Australia, a Registered Training Organisation (RTO) offering nationally recognised vocational qualifications in fitness, sport, and health.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16+ | React framework (App Router) |
| [TypeScript](https://typescriptlang.org) | 5+ | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | 4+ | Utility-first styling |
| [Supabase](https://supabase.com) | 2+ | Database & backend |
| [ESLint](https://eslint.org) | 9+ | Code linting |
| [pnpm](https://pnpm.io) | 10+ | Package manager |

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Header, Footer, metadata)
│   ├── page.tsx            # Home page
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── about/page.tsx      # About CSF
│   ├── admissions/page.tsx # Admissions & fees
│   ├── agents/page.tsx     # Education agents
│   ├── contact/
│   │   ├── page.tsx        # Contact page (server wrapper)
│   │   └── ContactForm.tsx # Contact form (client component)
│   ├── courses/
│   │   ├── page.tsx        # Course listing
│   │   └── [slug]/page.tsx # Dynamic course detail (SSG)
│   ├── international/page.tsx  # International students
│   └── students/page.tsx   # Current students
├── components/             # Reusable UI components
│   ├── Button.tsx          # Button (primary/secondary/outline)
│   ├── Container.tsx       # Max-width wrapper
│   ├── CourseCard.tsx      # Course listing card
│   ├── Footer.tsx          # Site footer
│   ├── Header.tsx          # Sticky header with mobile nav
│   └── HeroSection.tsx     # Hero banner component
└── lib/
    ├── courses.ts          # Course data & types
    ├── supabase.ts         # Client-side Supabase client
    └── supabase-server.ts  # Server-side Supabase client
```

---

## Local Development Setup

### Prerequisites

- Node.js 20+
- pnpm (`npm install -g pnpm`)

### Steps

```bash
# 1. Clone the repository
git clone <repo-url>
cd CSF

# 2. Install dependencies
pnpm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# 4. Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

| Variable | Description | Required |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes (for announcements) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Yes (for announcements) |

> **Note:** The site works without Supabase credentials — the home page announcements section is simply hidden when credentials are not configured.

---

## Available Scripts

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

---

## Supabase Setup

### 1. Create a Supabase Project

1. Go to [app.supabase.com](https://app.supabase.com) and create a new project
2. Copy your **Project URL** and **anon public key** from Settings → API
3. Add them to your `.env.local` file

### 2. Create the Announcements Table

Run this SQL in the Supabase SQL Editor:

```sql
CREATE TABLE public.announcements (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title       TEXT NOT NULL,
  content     TEXT NOT NULL,
  published_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read"
  ON public.announcements
  FOR SELECT
  USING (true);

-- Sample data
INSERT INTO public.announcements (title, content, published_at) VALUES
  ('2025 Intake Now Open', 'Enrolments for our February 2025 intake are now open. Limited spots available — apply today!', NOW()),
  ('New Sport Coaching Units', 'We have updated our Certificate IV in Sport Coaching with new elective units for 2025.', NOW() - INTERVAL '3 days'),
  ('Student Excellence Awards', 'Congratulations to our 2024 Student Excellence Award winners. See the full list in the Student Portal.', NOW() - INTERVAL '7 days');
```

---

## Deployment on Vercel

### 1. Push to GitHub

```bash
git add .
git commit -m "Initial CSF website"
git push origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and import your GitHub repository
2. Configure the following settings:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (default)
   - **Build Command:** `pnpm build`
   - **Install Command:** `pnpm install`
3. Add your environment variables in the Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Click **Deploy**

### Custom Domain

1. In Vercel, go to your project → Settings → Domains
2. Add `csf.edu.au` (or your domain)
3. Update DNS records as instructed by Vercel

---

## Pages & Routes

| Route | Page |
|---|---|
| `/` | Home (hero, courses, why CSF, testimonials) |
| `/courses` | Course listing |
| `/courses/[slug]` | Course detail (statically generated) |
| `/admissions` | How to apply, fees, intake dates |
| `/about` | About CSF, history, accreditation |
| `/international` | International students (visa, OSHC, FAQs) |
| `/students` | Current student resources |
| `/agents` | Education agent partnership |
| `/contact` | Contact form |
| `/sitemap.xml` | Auto-generated sitemap |

---

## Design System

### Brand Colors

| Token | Hex | Usage |
|---|---|---|
| Primary | `#003366` | Navy blue — headings, buttons, nav |
| Secondary | `#FF6B00` | Orange accent — CTAs, highlights |
| Text | `#1a1a1a` | Body text |
| Background | `#ffffff` | Page background |
| Light BG | `#f8f9fa` | Section backgrounds |

---

## Accessibility

- Semantic HTML throughout (headings hierarchy, landmarks, lists)
- Skip-to-content link for keyboard users
- ARIA labels on icons and interactive elements
- `aria-current="page"` on active nav links
- Form labels associated with inputs
- Focus-visible outlines on interactive elements
- Sufficient colour contrast ratios

---

## License

© College of Sport & Fitness Australia. All rights reserved.
