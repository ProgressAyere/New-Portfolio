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
  title: "Progress Ayere | FrontEnd Developer Portfolio",
  description: "Progress Ayere is a FrontEnd Developer specializing in React, Next.js, and modern web technologies. Explore my portfolio to see my projects, skills, and why I'm the right choice for your next web development project.",
  icons: {
    icon: '/my-nft.JPG',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-950">{children}</body>
    </html>
  );
}
