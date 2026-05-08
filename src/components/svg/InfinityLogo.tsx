"use client";

import { motion } from "framer-motion";

export function InfinityLogo() {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="64"
        height="32"
        viewBox="0 0 64 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-8 overflow-visible"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#007BFF" />
            <stop offset="100%" stopColor="#006B4F" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
            <feOffset dx="0" dy="1" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.2" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d="M20 8C14 8 8 12 8 16C8 20 14 24 20 24C24 24 28 18 32 16C36 14 40 8 44 8C50 8 56 12 56 16C56 20 50 24 44 24C40 24 36 18 32 16C28 14 24 8 20 8Z"
          stroke="url(#logo-gradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#shadow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>
      <div>
        <div className="text-dark font-heading font-extrabold text-xl leading-none tracking-tight">
          INFINITY
        </div>
        <div className="text-brand-green font-heading font-bold text-[8px] tracking-[0.2em] leading-none mt-1">
          DATA AND ENERGY SOLUTIONS
        </div>
      </div>
    </div>
  );
}
