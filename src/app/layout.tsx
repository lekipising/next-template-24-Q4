import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const avenir = localFont({
  src: [
    {
      path: "./fonts/avenir/AvenirLTProMedium.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/avenir/AvenirLTProRoman.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/avenir/AvenirLTProBlack.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/avenir/AvenirLTProHeavy.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-avenir",
});

export const metadata: Metadata = {
  title: "Next JS Template",
  description: "A Next.js template with Tailwind CSS and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${avenir.className} antialiased`}>{children}</body>
    </html>
  );
}
