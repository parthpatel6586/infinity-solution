"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Zap, History } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { label: "Projects Completed", value: "500+", icon: Award, color: "text-brand-green" },
  { label: "Happy Clients", value: "300+", icon: CheckCircle2, color: "text-brand-blue" },
  { label: "Installations Done", value: "1000+", icon: Zap, color: "text-brand-teal" },
  { label: "Years Experience", value: "8+", icon: History, color: "text-dark" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-surface-gray">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Text */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-brand-green/10 text-brand-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-dark mb-8 leading-tight">
              Your Trusted Technology Partner <br /> in Ahmedabad
            </h2>
            
            <div className="space-y-6 text-body text-lg leading-relaxed mb-10">
              <p>
                Infinity Data And Energy Solutions is a leading technology integration firm based in Ahmedabad. Since 2016, we have been delivering high-performance infrastructure solutions for residential, commercial, and industrial clients.
              </p>
              <p>
                We specialize in end-to-end implementation of ELV (Extra Low Voltage) systems, security surveillance, networking infrastructure, and renewable energy solutions. Our team of certified engineers ensures that every project is built with precision and future-proof technology.
              </p>
              <p>
                From site survey and design to installation and long-term maintenance, we provide a seamless experience, allowing our clients to focus on their core business while we handle the technology backbone.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "Certified & Experienced Technicians",
                "End-to-End Project Management",
                "Post-Installation Support (AMC)",
                "Premium Brand Partnerships"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-brand-green/20 p-1 rounded-full text-brand-green">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="font-semibold text-dark">{item}</span>
                </div>
              ))}
            </div>

            <Link 
              href="/#services"
              className="inline-block border-2 border-brand-green text-brand-green px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-brand-green hover:text-white transition-all text-center"
            >
              Learn More About Us
            </Link>
          </motion.div>

          {/* Right Column: Image & Stats */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600" 
                alt="Technology Integration"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-brand-green/10 mix-blend-overlay" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-brand-green text-white p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-extrabold">Since</div>
              <div className="text-2xl font-bold opacity-80 uppercase tracking-widest">2016</div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center group hover:border-brand-green/30 transition-all"
            >
              <div className={`mx-auto w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 mb-4 group-hover:scale-110 transition-transform ${stat.color}`}>
                <stat.icon size={28} />
              </div>
              <div className="text-3xl font-heading font-extrabold text-dark mb-1">{stat.value}</div>
              <div className="text-sm font-bold text-body uppercase tracking-tighter">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
