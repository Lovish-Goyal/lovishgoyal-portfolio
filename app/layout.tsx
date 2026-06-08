import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/components/site/Navbar";
import { Footer } from "@/app/components/site/Footer";
import { ThemeProvider } from "@/app/components/system/ThemeProvider";
import { seo, profile } from "@/app/Data/data";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const headingFont = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: seo.author }],
  creator: seo.author,
  publisher: seo.author,
  metadataBase: new URL(seo.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.siteUrl,
    siteName: seo.title,
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: seo.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    creator: seo.twitterUsername,
    images: [seo.ogImage],
  },
  verification: {
    google: seo.googleSiteVerification || undefined,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: seo.siteUrl,
    image: `${seo.siteUrl}${profile.avatar}`,
    jobTitle: seo.jobTitle,
    description: seo.description,
    sameAs: seo.sameAs,
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        "name": "Kurukshetra University"
      },
      {
        "@type": "EducationalOrganization",
        "name": "D.A.V. Sr. Sec. School, Ambala"
      }
    ],
    knowsAbout: [
      "Mobile Application Development",
      "Flutter Development",
      "Dart Programming",
      "Python Programming",
      "Flask",
      "FastAPI",
      "OpenAI API",
      "Google AdMob",
      "Search Engine Optimization (SEO)",
      "Full Stack Development",
      "React.js",
      "Node.js",
      "MongoDB",
      "MySQL",
      "REST APIs"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${bodyFont.variable} ${headingFont.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
