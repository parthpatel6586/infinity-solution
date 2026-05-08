"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TechTree } from "@/components/svg/TechTree";
import { ChevronRight, ArrowRight, ShieldCheck, Users, Calendar } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-surface-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.03] z-0" />
      
      {/* Decorative Circles */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-brand-blue/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-surface-light-green border border-brand-green/20 px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
              <span className="text-brand-green font-bold text-xs uppercase tracking-wider">
                Ahmedabad's #1 ELV Solutions Provider
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-dark leading-[1.1] mb-6"
            >
              Smart <span className="text-brand-green">Infrastructure</span> & Energy Solutions
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-body mb-8 max-w-xl leading-relaxed"
            >
              Complete ELV, Electrical & Solar solutions for homes, businesses & enterprises in Ahmedabad. We bring intelligence to your infrastructure.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link 
                href="#contact"
                className="bg-brand-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-teal transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-green/20 group"
              >
                Get Free Consultation
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#services"
                className="bg-white text-brand-green border-2 border-brand-green px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-light-green transition-all flex items-center justify-center gap-2"
              >
                View Our Services
              </Link>
            </motion.div>

            {/* Trust Bar */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100"
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-brand-green font-extrabold text-2xl">
                  <ShieldCheck size={24} />
                  500+
                </div>
                <div className="text-xs font-bold text-body uppercase tracking-tighter">Projects Done</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-brand-blue font-extrabold text-2xl">
                  <Users size={24} />
                  300+
                </div>
                <div className="text-xs font-bold text-body uppercase tracking-tighter">Happy Clients</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-brand-teal font-extrabold text-2xl">
                  <Calendar size={24} />
                  8+
                </div>
                <div className="text-xs font-bold text-body uppercase tracking-tighter">Years Exp.</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Tech Tree */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <TechTree />
            
            {/* Real Image Placeholder Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface-white via-transparent to-transparent opacity-40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
