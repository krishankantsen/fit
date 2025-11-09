import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Design Consultant | Architecture, Engineering & Project Management",
  description:
    "Design Consultant led by Ar. Sanjay Kumar — offering Architecture, Industrial Plant Design, BIM, Interior Design, Landscape, Valuation, Vastu, and Project Management Services in Delhi and Indore.",
  keywords:
    "Design Consultant, Architect, Sanjay Kumar, Industrial Plant Designer, BIM, Architecture, Engineering, Interior Designer, Valuer, Landscape Designer, Vastu Consultant, Project Management, Delhi, Indore",
  openGraph: {
    title: "Design Consultant | Innovative Architecture & Engineering Services",
    description:
      "Professional architecture and design firm led by Ar. Sanjay Kumar, providing BIM, Industrial Plant, Landscape, and Project Management Services.",
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    locale: "en_IN",
    siteName: "Design Consultant",
  },
  authors: [
    { name: "Ar. Sanjay Kumar", url: "mailto:designconsultant325@gmail.com" },
  ],
  creator: "Ar. Sanjay Kumar",
  publisher: "Design Consultant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
