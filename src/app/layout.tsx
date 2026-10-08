import { SITE_URL } from "@/data";
import type { Metadata, Viewport } from "next";
import { Barlow, Fraunces } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  weight: ["700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const name = "sunnyside";
const title = `${name} | Full-service creative agency`;
const description =
  "A full-service creative agency helping brands grow fast through graphic design, photography and campaigns that reach the right audience.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "The sunnyside wordmark beside a halved orange on a bright blue ground.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: name,
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3299cc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${fraunces.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
