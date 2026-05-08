"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { services } from "@/data/services";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Services() {
  const [activeTab, setActiveTab] = useState<"all" | "enterprise" | "residential">("all");

  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-brand-blue/10 text-brand-blue px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            What We Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-dark mb-6">
            Complete ELV & Technology Solutions
          </h2>
          <p className="text-body text-lg">
            We provide specialized technology solutions tailored for enterprises and modern homes, ensuring security, connectivity, and efficiency.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-surface-gray p-1.5 rounded-2xl flex gap-1 border border-gray-200">
            {(["all", "enterprise", "residential"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-8 py-3 rounded-xl font-bold text-sm transition-all capitalize",
                  activeTab === tab 
                    ? "bg-white text-brand-green shadow-sm ring-1 ring-black/5" 
                    : "text-body hover:text-dark"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <motion.div 
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-[0_20px_50px_rgba(0,107,79,0.15)] hover:border-brand-green/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col h-full"
              >
                {/* Image Section with Shine Effect */}
                <div className="relative h-60 overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-60" />
                  
                  {/* Icon Overlay */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                      <service.icon size={24} />
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-1.5 h-1.5 bg-brand-green rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-[10px] font-bold text-body uppercase tracking-[0.2em]">
                      {service.category} Solution
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-heading font-extrabold text-dark mb-4 group-hover:text-brand-green transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-body text-sm leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <Link 
                      href={`/services/${service.id}`}
                      className="inline-flex items-center gap-2 bg-surface-gray text-dark font-bold text-sm px-6 py-3 rounded-xl group-hover:bg-brand-green group-hover:text-white transition-all duration-300 w-full justify-center shadow-sm"
                    >
                      Learn More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
