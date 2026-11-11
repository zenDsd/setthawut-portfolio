import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Sans_Thai, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const ibmPlexThai = IBM_Plex_Sans_Thai({
  subsets: ["thai"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-thai",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: `${PORTFOLIO_DATA.profile.fullNameEn} | Portfolio`,
  description: PORTFOLIO_DATA.profile.bioEn,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`dark ${inter.variable} ${ibmPlexThai.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
