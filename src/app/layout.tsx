import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Itech Design | Advanced Digital Studio — Web, Video & 3D Animation",
  description:
    "Itech Design is a digital marketing & multimedia production agency specializing in web design, HD/SD video production, 3D animation, digital signage, SEO, and social media. Call 806.282.4671 for a free demo.",
  keywords: [
    "Itech Design",
    "web design",
    "video production",
    "3D animation",
    "digital signage",
    "SEO",
    "multimedia production",
  ],
  openGraph: {
    title: "Itech Design | Advanced Digital Studio",
    description:
      "Marketing & Websites • HD/SD Video • 3D Animation • Digital Signage.",
    type: "website",
    locale: "en_US",
    siteName: "Itech Design",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} font-sans antialiased bg-white text-navy`}>
        {children}
      </body>
    </html>
  );
}
