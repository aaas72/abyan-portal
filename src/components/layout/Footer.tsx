"use client";

import React from "react";
import Link from "next/link";
import SmartContainer from "./SmartContainer";

export default function Footer() {
  const footerLinks = [
    { label: "التاريخ والحضارات", href: "/history" },
    { label: "الثقافة والتراث", href: "/culture" },
    { label: "دليل المديريات", href: "/districts" },
    { label: "المعالم والأطواد", href: "/landmarks" },
    { label: "الاقتصاد والثروات", href: "/economy" },
    { label: "الأعلام والرواد", href: "/pioneers" },
    { label: "الأرشيف والوثائق", href: "/gallery" },
    { label: "عن البوابة", href: "/about" },
  ];

  return (
    <footer className="w-full py-12 bg-white border-none shadow-none cursor-default">
      <SmartContainer className="flex flex-col gap-8">
        
        {/* Top Footer Row: Title & Subpage Directory Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right pb-8">
          {/* Right Side: Title */}
          <div className="space-y-1">
            <h3 className="font-abyan-title text-2xl text-slate-900 font-normal">
              بوابة <span className="text-sky-600">أبين</span> الثقافية
            </h3>
            <p className="text-xs text-slate-500 font-abyan-title font-normal">
              منصة توثيق التراث، الحضارة، والجغرافيا الأبينية العريقة
            </p>
          </div>

          {/* Left Side: Directory Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-2 max-w-xl">
            {footerLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="text-xs text-slate-700 hover:text-sky-600 font-abyan-title font-normal transition-colors no-underline"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Footer Row: Copyright */}
        <div className="text-center md:text-right">
          <p className="text-xs text-slate-400 font-abyan-title font-normal">
            جميع الحقوق محفوظة © {new Date().getFullYear()} بوابة أبين الثقافية
          </p>
        </div>

      </SmartContainer>
    </footer>
  );
}
