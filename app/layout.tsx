import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Zohaib's Portfolio | Web & AI Developer",
  description:
    "Discover Zohaib's expertise in Next.js, TypeScript, Python, and Agentic AI. Building modern, scalable, and high-performance applications.",
  keywords: [
    "Zohaib Portfolio",
    "Next.js Developer",
    "Full Stack Developer",
    "React Developer",
    "Python Developer",
    "Agentic AI Engineer",
    "AI Developer",
    "Web Development",
    "JavaScript Developer",
    "TypeScript Developer",
    "Machine Learning",
    "Deep Learning",
  ],
  authors: [{ name: "Zohaib" }],
  robots: "index, follow",
  openGraph: {
    title: "Zohaib's Portfolio | Web & AI Developer",
    description:
      "Explore Zohaib's portfolio showcasing expertise in Next.js, TypeScript, Python, and Agentic AI.",
    url: "https://zohaib-portfolio-7689.vercel.app/",
    type: "website",
    locale: "en_US",
    siteName: "Zohaib's Portfolio",
    images: [
      {
        url: "/OG.jpeg",
        width: 1200,
        height: 630,
        alt: "Zohaib's Portfolio Preview",
      },
    ],
  },
    twitter: {
      card: "summary_large_image",
    },
  };
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) 
{
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
