"use client";

import { motion } from "framer-motion";
import { 
  Home, Building2, Factory, Hotel, GraduationCap, Hospital, Landmark, ArrowUpRight 
} from "lucide-react";

const industries = [
  { name: "Residential", icon: Home, desc: "Smart villas & apartments" },
  { name: "Commercial", icon: Building2, desc: "Corporate offices & shops" },
  { name: "Industrial", icon: Factory, desc: "GIDC factories & plants" },
  { name: "Hospitality", icon: Hotel, desc: "Hotels & banquet halls" },
  { name: "Education", icon: GraduationCap, desc: "Schools & universities" },
  { name: "Healthcare", icon: Hospital, desc: "Hospitals & clinics" },
  { name: "Government", icon: Landmark, desc: "Civic & public buildings" },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-brand-blue/10 text-brand-blue px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Industries We Serve
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-dark">
            Solutions for Every <span className="text-brand-green">Sector</span>
          </h2>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group relative flex flex-col items-center text-center p-6 rounded-[2.5rem] border border-gray-100 hover:bg-brand-green hover:shadow-[0_20px_40px_rgba(0,107,79,0.2)] transition-all duration-500 cursor-pointer"
            >
              {/* Floating Arrow */}
              <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={16} />
              </div>

              <div className="w-16 h-16 rounded-2xl bg-surface-gray group-hover:bg-white/20 flex items-center justify-center text-brand-green group-hover:text-white mb-4 transition-all duration-300 group-hover:rotate-[360deg]">
                <industry.icon size={32} />
              </div>
              
              <h3 className="font-heading font-extrabold text-dark group-hover:text-white text-sm mb-1 transition-colors">
                {industry.name}
              </h3>
              
              <p className="text-[10px] text-body group-hover:text-white/70 uppercase tracking-tighter font-bold transition-colors">
                {industry.desc}
              </p>

              {/* Bottom Decoration */}
              <div className="absolute bottom-4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
