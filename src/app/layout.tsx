// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Pinnacle Aerospace — FAA & EASA Certified Aircraft Maintenance",
  description:
    "Pinnacle Aerospace is an FAA Part 145 and EASA Part 145 certified aircraft maintenance, repair, and overhaul organization. Offering A, B, C, D checks, avionics, inspections, and custom engineering solutions.",
  keywords: [
    "aircraft maintenance",
    "FAA certified",
    "EASA certified",
    "MRO",
    "aircraft repair",
    "avionics",
    "A check",
    "D check",
    "aircraft overhaul",
    "aerospace engineering",
    "Pinnacle Aerospace",
  ],
  openGraph: {
    title: "Pinnacle Aerospace",
    description: "FAA & EASA Certified Aircraft Maintenance, Repair & Overhaul",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
