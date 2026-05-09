"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Residential", "Commercial", "Industrial", "Hospitality"];

const projects = [
  {
    slug: "smart-villa-integration",
    title: "Smart Villa Integration",
    category: "Residential",
    location: "Prahlad Nagar",
    year: "2023",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
  },
  {
    slug: "enterprise-network-setup",
    title: "Enterprise Network Setup",
    category: "Commercial",
    location: "S.G. Highway",
    year: "2023",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800"
  },
  {
    slug: "industrial-cctv-audit",
    title: "Industrial CCTV Audit",
    category: "Industrial",
    location: "Naroda GIDC",
    year: "2022",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800"
  },
  {
    slug: "hotel-security-solution",
    title: "Hotel Security Solution",
    category: "Hospitality",
    location: "Ashram Road",
    year: "2023",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800"
  },
  {
    slug: "rooftop-solar-plant",
    title: "Rooftop Solar Plant",
    category: "Industrial",
    location: "Vatva GIDC",
    year: "2022",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800"
  },
  {
    slug: "smart-office-av-setup",
    title: "Smart Office AV Setup",
    category: "Commercial",
    location: "Gift City",
    year: "2024",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800"
  },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 bg-surface-gray">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-brand-green/10 text-brand-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Our Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-dark mb-4">
              Real Impact, <span className="text-brand-blue">Proven Results</span>
            </h2>
            <p className="text-body text-lg">
              Explore our diverse range of successful technology implementations across Ahmedabad.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={cn(
                  "px-6 py-2 rounded-full font-bold text-sm transition-all",
                  activeTab === cat 
                    ? "bg-brand-green text-white shadow-lg shadow-brand-green/20" 
                    : "bg-white text-body border border-gray-100 hover:border-brand-green/50"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative h-[450px] rounded-[3rem] overflow-hidden shadow-xl border-4 border-white hover:shadow-[0_20px_60px_rgba(0,107,79,0.2)] transition-all duration-700"
              >
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="inline-block bg-brand-green text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4 w-fit shadow-lg shadow-brand-green/20">
                    {project.category}
                  </div>
                  
                  <h3 className="text-3xl font-heading font-extrabold text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-white/70 text-sm mb-8">
                    <div className="flex items-center gap-1.5 font-medium">
                      <MapPin size={16} className="text-brand-green" />
                      {project.location}
                    </div>
                    <span className="opacity-30">|</span>
                    <div className="font-medium uppercase tracking-widest">{project.year}</div>
                  </div>
                  
                  <div className="pt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-white hover:text-dark transition-all w-full justify-center"
                    >
                      Learn More About Project
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
