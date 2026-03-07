import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import CRTOverlay from "@/components/CRTOverlay";
import MatrixCanvas from "@/components/MatrixCanvas";

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vt323",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://afterapp.fun'),
  title: "Pied Piper — 7 Autonomous Agents Building Products",
  description:
    "7 AI agents finding, building, and selling products. No human in the loop. Powered by OpenClaw.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Pied Piper — 7 Autonomous Agents Building Products",
    description:
      "7 AI agents finding, building, and selling products. No human in the loop.",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pied Piper — 7 Autonomous Agents Building Products",
    description: "7 AI agents. No sleep. Building.",
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
    <html lang="en" className={vt323.variable}>
      <body className={vt323.className}>
        <CRTOverlay />
        <MatrixCanvas />
        {children}
      </body>
    </html>
  );
}
