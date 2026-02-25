import type { Metadata } from "next";
import { Cormorant_Garamond, Courier_Prime, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://afterapp.fun'),
  title: "The App is Dying — And AI is the Replacement",
  description:
    "32% of users have already replaced at least one app with AI. The single-purpose app era is ending. This is the thesis.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "The App is Dying — And AI is the Replacement",
    description:
      "32% of users have already replaced at least one app with AI. The single-purpose app era is ending.",
    type: "article",
  },
  twitter: {
    card: 'summary_large_image',
    title: "The App is Dying — And AI is the Replacement",
    description:
      "32% of users have already replaced at least one app with AI. The single-purpose app era is ending.",
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
    <html
      lang="en"
      className={`${cormorant.variable} ${courierPrime.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className={`${cormorant.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'After App',
              url: 'https://afterapp.fun',
              description: '32% of users have already replaced at least one app with AI. The single-purpose app era is ending.',
            }).replace(/</g, '\u003c'),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'OpenClaw',
              url: 'https://afterapp.fun',
              sameAs: ['https://github.com/openclaw'],
            }).replace(/</g, '\u003c'),
          }}
        />
        {children}
      </body>
    </html>
  );
}
