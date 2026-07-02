import React from "react";
import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { JapaneseOrnaments } from "@/components/japanese-ornaments";

const notoSerifJP = Noto_Serif_JP({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raymondo Stiven Sugiarto | Frontend Developer",
  description:
    "Frontend Developer from Semarang",
  icons: {
    icon: "/favicon2.ico",
    apple: "/favicon2.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${notoSerifJP.className} antialiased bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <JapaneseOrnaments />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
