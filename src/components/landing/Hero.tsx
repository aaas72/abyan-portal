"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { sectionFadeUpVariants, itemFadeInRight } from "@/lib/animations";

export default function Hero() {
  const [currentDateString, setCurrentDateString] = useState<string>("");

  useEffect(() => {
    // تنسيق التاريخ واليوم بالصيغة العربية
    const now = new Date();
    const formattedDate = now.toLocaleDateString("ar-YE", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    setCurrentDateString(formattedDate);
  }, []);

  return (
    <section className="w-full h-screen h-[100dvh] p-4 sm:p-6 lg:p-8 bg-white border-none shadow-none relative overflow-hidden flex flex-col box-border">
      {/* Framed Canvas - Pure White Margin Frame with Rounded Image */}
      <motion.div
        {...sectionFadeUpVariants}
        className="relative w-full h-full rounded-[24px] sm:rounded-[32px] overflow-hidden border-none shadow-none flex-1 group"
      >
        
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80"
          alt="طبيعة ومزارع دلتا أبين الخضراء"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
        />

        {/* Light Overlay for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/20 to-slate-950/20"></div>

        {/* Centered Slogan Text */}
        <div className="absolute inset-0 z-10 flex items-center justify-center text-center p-6 sm:p-10 lg:p-12 max-w-4xl mx-auto">
          <motion.h2
            {...itemFadeInRight(0.2)}
            className="font-abyan-title text-xl sm:text-3xl lg:text-4xl text-white drop-shadow-md leading-relaxed font-normal"
          >
            أَبْيَنُ .. الأَرْضُ المِعْطَاءُ وَأَصَالَةُ التَّارِيخِ وَالوَجْدَانِ
          </motion.h2>
        </div>

        {/* Bottom Left: Pure Plain Text Date */}
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 z-20">
          <motion.div
            {...itemFadeInRight(0.35)}
            className="font-abyan-title text-sky-400 text-xs sm:text-sm lg:text-base drop-shadow-md tracking-wide font-normal"
            style={{ color: "#38bdf8" }}
          >
            {currentDateString || "الخميس، 6 أغسطس 2026"}
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
