import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://sps-enterprise-landing-page.vercel.app";

const coverImage = `${siteUrl}/images/sps-cover.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SPS | Cybersecurity, Cloud, AI & Automation Solutions",
    template: "%s | SPS",
  },
  description:
    "SPS empowers enterprises with Cybersecurity, Cloud, AI & Automation solutions that reduce operational costs and enhance customer experience.",
  applicationName: "SPS",
  keywords: [
    "cybersecurity",
    "cloud solutions",
    "AI automation",
    "IT services",
    "enterprise security",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "SPS",
    title: "SPS | Cybersecurity, Cloud, AI & Automation Solutions",
    description:
      "SPS empowers enterprises with Cybersecurity, Cloud, AI & Automation solutions that reduce operational costs and enhance customer experience.",
    images: [
      {
        url: coverImage,
        width: 1200,
        height: 630,
        alt: "SPS - Cybersecurity, Cloud, AI & Automation Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPS | Cybersecurity, Cloud, AI & Automation Solutions",
    description:
      "SPS empowers enterprises with Cybersecurity, Cloud, AI & Automation solutions that reduce operational costs and enhance customer experience.",
    images: [coverImage],
  },
  other: {
    image: coverImage,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistMono.variable} font-sans min-h-full flex flex-col antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-100 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-slate-900 focus:outline-2 focus:outline-offset-2 focus:outline-[#1d4ed8]"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
