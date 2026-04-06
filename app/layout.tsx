import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FooterSection } from "./components/FooterSection/FooterSection";
import { HeaderSection } from "./components/HeaderSection/HeaderSection";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhimanyu Tuteja | Portfolio",
  description:
    "Portfolio of Abhimanyu Tuteja, educator and entrepreneur driving impact through education and enterprise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-page-bg text-text-primary">
        <div className="flex min-h-full flex-col">
          <HeaderSection />
          <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-16 pt-10 sm:px-8 lg:px-12">
            {children}
          </main>
          <FooterSection />
        </div>
      </body>
    </html>
  );
}
