import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://afterapp.fun'),
  title: "Afterapp Studios — AI Agent Studio",
  description:
    "We deploy custom AI agent teams for businesses. Marketing, support, dev, outreach — automated. No headcount added.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Afterapp Studios — AI Agent Studio",
    description:
      "Custom AI agent teams for businesses. Tell us what needs running. We ship the agents.",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Afterapp Studios — AI Agent Studio",
    description: "AI agent teams deployed for your business. No headcount added.",
  },
  verification: {
    google: '7nyGH366Q-BKa2VP1gSVPcs4avJuXAPAWgaBkqVmEw4',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
