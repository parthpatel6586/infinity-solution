"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { InfinityLogo } from "../svg/InfinityLogo";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Solutions", href: "/#solutions" },
  { name: "Projects", href: "/#projects" },
  { name: "Industries", href: "/#industries" },
  { name: "Team", href: "/#team" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-[90] transition-all duration-700 ease-in-out",
        isScrolled 
          ? "py-4 px-4 md:px-8" 
          : "py-6 px-4 md:px-8"
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center transition-all duration-500 rounded-[2rem]",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,107,79,0.08)] border border-white/20 py-3"
          : "bg-white/10 backdrop-blur-md border border-white/10 py-4"
      )}>
        <Link href="/" className="flex items-center">
          <div className="relative w-32 h-10 md:w-40 md:h-12 flex items-center">
             <img src="/logo.png" alt="Infinity Data & Energy Solutions" className="object-contain w-full h-full" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <Link
                href={link.href}
                className="text-sm font-semibold text-body hover:text-brand-green transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              href="#contact"
              className="bg-brand-green text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-brand-teal transition-all shadow-lg shadow-brand-green/20"
            >
              Get Free Consultation
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-dark p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 py-8 px-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center justify-between text-lg font-bold text-dark p-4 rounded-xl hover:bg-surface-light-green transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
                <ChevronRight className="text-brand-green" />
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-4 bg-brand-green text-white text-center py-4 rounded-xl font-bold text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Free Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
