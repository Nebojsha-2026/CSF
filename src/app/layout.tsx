import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://csf.edu.au"),
  title: {
    default: "College of Sport & Fitness Australia | RTO Courses",
    template: "%s | CSF Australia",
  },
  description:
    "College of Sport & Fitness (CSF) Australia is a Registered Training Organisation offering vocational courses in fitness, sport, and health.",
  keywords: [
    "fitness courses australia",
    "certificate III fitness",
    "certificate IV fitness",
    "diploma of sport",
    "RTO",
    "vocational education",
    "personal trainer course",
  ],
  authors: [{ name: "College of Sport & Fitness Australia" }],
  creator: "CSF Australia",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://csf.edu.au",
    siteName: "College of Sport & Fitness Australia",
    title: "College of Sport & Fitness Australia | RTO Courses",
    description:
      "Registered Training Organisation offering vocational courses in fitness, sport, and health.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "College of Sport & Fitness Australia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "College of Sport & Fitness Australia",
    description: "RTO courses in fitness, sport, and health.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased text-[#1a1a1a] bg-white" style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif" }}>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
