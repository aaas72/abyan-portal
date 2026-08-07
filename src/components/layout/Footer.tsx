"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { sectionFadeUpVariants, itemFadeInRight } from "@/lib/animations";

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
    <footer className="w-full bg-white p-4 sm:p-6 lg:p-8 border-none shadow-none flex flex-col gap-4">
      {/* اللوحة المُأطَّرة بخلفية خضراء — نفس أسلوب الهيرو */}
      <motion.div
        {...sectionFadeUpVariants}
        className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#10b981] px-6 sm:px-10 lg:px-16 py-10 sm:py-14 flex flex-col gap-8"
      >
        {/* طبقة تدرج خفيف لإضفاء العمق كما في الهيرو */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#059669]/80 via-[#10b981] to-[#047857]/90 pointer-events-none" />

        {/* المحتوى فوق التدرج */}
        <div className="relative z-10 flex flex-col gap-8">
          {/* الشعار والوصف */}
          <motion.div {...itemFadeInRight(0.1)} className="space-y-1">
            <h3 className="font-abyan-title text-2xl sm:text-3xl text-white font-normal leading-snug drop-shadow-md">
              بوابة أَبيَن الثقافية
            </h3>
            <p className="text-xs sm:text-sm text-white/90 font-abyan-title font-normal leading-relaxed">
              منصة توثيق التراث، الحضارة، والجغرافيا الأبينية العريقة
            </p>
          </motion.div>

          {/* الروابط في سطر واحد أفقي */}
          <motion.div
            {...itemFadeInRight(0.2)}
            className="flex flex-row flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/20 pt-6"
          >
            {footerLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="text-xs sm:text-sm text-white hover:text-sky-200 font-abyan-title font-normal transition-colors no-underline whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* حقوق النشر في أقصى أسفل المكون خارج اللوحة الخضراء */}
      <div className="px-2 sm:px-4 text-center md:text-right">
        <p className="text-xs text-slate-600 font-abyan-title font-normal">
          جميع الحقوق محفوظة © {new Date().getFullYear()} بوابة أبين الثقافية
        </p>
      </div>
    </footer>
  );
}
