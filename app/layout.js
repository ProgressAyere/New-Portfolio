import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Progress Ayere | Frontend Developer in Lagos, Nigeria",
  description: "Progress Ayere is a Frontend Developer based in Lagos, Nigeria, specializing in React, Next.js, Web3 interfaces, and interactive web experiences. Available for hire — freelance and contract projects welcome.",
  keywords: [
    "frontend developer Nigeria",
    "React developer Lagos",
    "Next.js developer Nigeria",
    "Web3 frontend developer",
    "hire frontend developer Nigeria",
    "Progress Ayere",
    "frontend developer Lagos",
    "React Next.js developer Africa",
  ],
  authors: [{ name: "Progress Ayere", url: "https://progress-dev.vercel.app" }],
  creator: "Progress Ayere",
  metadataBase: new URL("https://progress-dev.vercel.app"),
  openGraph: {
    title: "Progress Ayere | Frontend Developer in Lagos, Nigeria",
    description: "Frontend Developer based in Lagos, Nigeria. Specializes in React, Next.js, Web3 interfaces, and motion-rich web experiences. Available for freelance and contract work.",
    url: "https://progress-dev.vercel.app",
    siteName: "Progress Ayere Portfolio",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Progress Ayere | Frontend Developer in Lagos, Nigeria",
    description: "Frontend Developer based in Lagos, Nigeria. React, Next.js, Web3. Available for hire.",
    creator: "@MichaelAyere",
  },
  icons: {
    icon: "/my-nft.JPG",
  },
  verification: {
    google: "z1IugPlHzbgqPFLeMznZpeHhKEShcMp3jovoi3csoM8",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Progress Ayere",
  jobTitle: "Frontend Developer",
  url: "https://progress-dev.vercel.app",
  email: "mailto:progressayere@gmail.com",
  sameAs: [
    "https://x.com/MichaelAyere",
    "https://linkedin.com/in/progress-ayere-2b2a19271",
    "https://github.com/ProgressAyere",
    "https://t.me/Progress_Ayere",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Web3",
    "Solidity",
    "Framer Motion",
    "GSAP",
    "Frontend Development",
    "Blockchain",
  ],
  description:
    "Frontend Developer based in Lagos, Nigeria, specializing in React, Next.js, Web3 interfaces, and interactive web experiences. Builder of Ghonsi Proof (blockchain credential verification) and the Blockchain on Campus platform.",
  worksFor: {
    "@type": "Organization",
    name: "Ghonsi Proof",
    url: "https://ghonsiproof.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-950">{children}</body>
    </html>
  );
}
