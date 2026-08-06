import "./globals.css";
import React from "react";
import localFont from "next/font/local";

const abyanTitleFont = localFont({
  src: "../../public/fonts/thmanyah-serif-display-black.otf",
  variable: "--font-abyan-title",
  display: "swap",
});

const abyanBodyFont = localFont({
  src: "../../public/fonts/thmanyah-serif-display-regular.otf",
  variable: "--font-abyan-body",
  display: "swap",
});

export const metadata = {
  title: "أبين - مهد الحضارة والتراث والدلتا الخضراء",
  description: "بوابة إلكترونية وثقافية شاملة تستعرض تاريخ، تراث، جغرافيا، ومعالم محافظة أبين جنوبي اليمن.",
  keywords: ["أبين", "محافظة أبين", "زنجبار", "جعار", "خنفر", "حصن القارة", "سد باتيس", "تراث أبين", "اليمن"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`scroll-smooth ${abyanTitleFont.variable} ${abyanBodyFont.variable}`} suppressHydrationWarning>
      <body className="antialiased selection:bg-emerald-500 selection:text-white bg-white text-slate-900 min-h-screen flex flex-col font-cairo" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
