"use client";

import { motion } from "framer-motion";
import { Shield, Settings, Headphones, BadgeCheck, Tag, Clock } from "lucide-react";

const features = [
  {
    title: "Certified Experts",
    desc: "OEM certified and highly trained engineers for precise installations.",
    icon: BadgeCheck,
  },
  {
    title: "End-to-End Solutions",
    desc: "From initial design to final installation and ongoing technical support.",
    icon: Settings,
  },
  {
    title: "24/7 Support",
    desc: "Round-the-clock technical assistance for all your critical systems.",
    icon: Headphones,
  },
  {
    title: "Premium Brands",
    desc: "Authorized partner of world-leading technology and security brands.",
    icon: Shield,
  },
  {
    title: "Competitive Pricing",
    desc: "Best price guarantee in Ahmedabad with zero hidden costs.",
    icon: Tag,
  },
  {
    title: "On-Time Delivery",
    desc: "Strict adherence to project timelines and professional execution.",
    icon: Clock,
  },
];

const partners = [
  "Hikvision", "Cisco", "D-Link", "Legrand", "APC", "Honeywell", "Schneider", "Bosch"
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-gray -skew-x-12 translate-x-1/4 opacity-50" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block bg-brand-green/10 text-brand-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Our Advantage
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-dark mb-6 tracking-tight">
            Why Ahmedabad Businesses <span className="text-brand-green">Trust Infinity</span>
          </h2>
          <p className="text-body text-lg leading-relaxed">
            We combine world-class technical expertise with deep local presence to provide reliable, scalable infrastructure solutions that stand the test of time.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white p-7 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,107,79,0.1)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-surface-gray flex items-center justify-center rounded-xl text-brand-green mb-5 group-hover:bg-brand-green group-hover:text-white transition-all duration-500">
                <feature.icon size={24} />
              </div>
              <h3 className="text-lg font-heading font-extrabold text-dark mb-2 group-hover:text-brand-green transition-colors">
                {feature.title}
              </h3>
              <p className="text-body text-xs leading-relaxed opacity-70">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Partners Marquee */}
        <div className="pt-16 border-t border-gray-100 relative overflow-hidden">
          <p className="text-center text-dark/30 font-bold text-[10px] uppercase tracking-[0.4em] mb-12">
            Authorized Technical Solutions Partner
          </p>
          
          <div className="flex overflow-hidden group">
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ 
                duration: 25, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex items-center gap-16 whitespace-nowrap pr-16"
            >
              {[...partners, ...partners, ...partners].map((partner, i) => (
                <span
                  key={i}
                  className="text-brand-green text-3xl md:text-4xl font-heading font-extrabold tracking-tighter hover:scale-110 transition-transform cursor-default"
                >
                  {partner}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
