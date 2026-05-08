"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const solutions = [
  {
    id: "home",
    title: "Smart Home Automation",
    tag: "Residential",
    desc: "Experience the pinnacle of luxury and convenience with our intelligent home solutions.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800",
    stats: "40% Energy Savings",
    benefits: ["Voice control integration", "App-based management", "Energy efficient lighting", "Integrated security"]
  },
  {
    id: "network",
    title: "Enterprise Networking",
    tag: "Commercial",
    desc: "Robust, high-speed data infrastructure designed for modern business operations.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800",
    stats: "99.9% Uptime",
    benefits: ["High availability design", "Managed network switches", "Secure VPN setup", "24/7 network monitoring"]
  },
  {
    id: "cctv",
    title: "Security Infrastructure",
    tag: "Security",
    desc: "Comprehensive surveillance systems with advanced AI-powered analytics.",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800",
    stats: "24/7 Protection",
    benefits: ["HD IP camera setup", "Remote live monitoring", "AI motion analytics", "Secure cloud backup"]
  },
  {
    id: "solar",
    title: "Solar & Energy Solutions",
    tag: "Renewable",
    desc: "Clean, sustainable energy solutions that reduce costs and carbon footprint.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
    stats: "4-Year ROI",
    benefits: ["Rooftop solar installation", "Net metering support", "Battery backup options", "Ongoing maintenance"]
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-surface-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block bg-brand-teal/10 text-brand-teal px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Solutions Showcase
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-dark mb-6">
            Technology that Drives <span className="text-brand-green">Progress</span>
          </h2>
          <p className="text-body text-lg">
            We don't just install systems; we build integrated solutions that solve real-world challenges for our clients.
          </p>
        </div>

        {/* Alternating Panels */}
        <div className="space-y-32">
          {solutions.map((solution, i) => (
            <div 
              key={solution.id}
              className={cn(
                "flex flex-col lg:items-center gap-12 md:gap-20",
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              )}
            >
              {/* Image Side */}
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative group">
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                    <Image 
                      src={solution.image} 
                      alt={solution.title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-brand-green/10 mix-blend-overlay" />
                  </div>
                  
                  {/* Floating Stat Card */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className={cn(
                      "absolute -bottom-10 bg-white p-6 md:p-8 rounded-3xl shadow-2xl border border-gray-100 flex flex-col items-center",
                      i % 2 === 0 ? "-right-6 md:-right-10" : "-left-6 md:-left-10"
                    )}
                  >
                    <div className="text-brand-green font-heading font-extrabold text-3xl md:text-4xl mb-1">
                      {solution.stats.split(' ')[0]}
                    </div>
                    <div className="text-body text-xs font-bold uppercase tracking-widest text-center">
                      {solution.stats.split(' ').slice(1).join(' ')}
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Text Side */}
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-brand-blue font-bold text-sm uppercase tracking-[0.2em] mb-4">
                  {solution.tag}
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-dark mb-6">
                  {solution.title}
                </h3>
                <p className="text-body text-lg mb-8 leading-relaxed">
                  {solution.desc}
                </p>

                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                  {solution.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="bg-brand-green text-white p-0.5 rounded-full">
                        <Check size={14} />
                      </div>
                      <span className="font-semibold text-dark text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <button className="bg-brand-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-teal transition-all flex items-center gap-2 group shadow-xl shadow-brand-green/20">
                  Get a Quote
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
