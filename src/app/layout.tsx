import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en-NZ" className="scroll-behavior-smooth">
      <body className="font-polysans antialiased bg-forge-bg">
        {children}
      </body>
    </html>
  );
}