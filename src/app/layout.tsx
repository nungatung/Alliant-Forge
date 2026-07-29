import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Alliant Forge | Empowering Communities Through Innovation",
  description: "Alliant Forge is a global NGO dedicated to empowering tomorrow's innovators, building sustainable infrastructure, and driving social impact through strategic partnerships and education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ" className={cn("scroll-behavior-smooth", "font-sans", geist.variable)}>
      <body className="font-polysans antialiased bg-forge-bg">
        {children}
      </body>
    </html>
  );
}