import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Yottabyte - Business Process Consulting",
  description: "Expert business process consulting to optimize workflows, reduce inefficiencies, and drive sustainable growth for your organization.",
  keywords: ["business process consulting", "workflow optimization", "process automation", "change management"],
  authors: [{ name: "Yottabyte" }],
  openGraph: {
    title: "Yottabyte - Business Process Consulting",
    description: "Expert business process consulting to optimize workflows, reduce inefficiencies, and drive sustainable growth.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
