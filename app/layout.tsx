import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Pop Bestie Co. | Bespoke Event Setups in San Antonio",
  description:
    "Balloon garlands, custom backdrops, and bespoke event setups for intimate celebrations and large-scale corporate events across San Antonio, TX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
