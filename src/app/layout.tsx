import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { BackToTop } from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Reset",
  description: "A 14-day anti-inflammatory reset — dairy-free, plant-forward, with full recipes and meal tracking.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
