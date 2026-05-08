"use client";

import { use } from "react";
import { services } from "@/data/services";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Zap, Shield, Clock, Users, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: Promise<{ id: string }>;
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const resolvedParams = use(params);
  const serviceId = parseInt(resolvedParams.id);
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    notFound();
  }

  const titleWords = service.title.split(" ");

  return (
    <div className="bg-white min-h-screen">
      {/* Back Button & Progress Indicator */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-28 md:pt-36">
        <div className="flex items-center gap-4 mb-8">
          <Link 
            href="/#services" 
            className="inline-flex items-center gap-2 text-dark/60 hover:text-brand-green transition-all font-bold group bg-surface-gray px-5 py-2.5 rounded-full border border-gray-100 hover:border-brand-green/20"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">All Services</span>
          </Link>
          <div className="h-px w-12 bg-gray-200 hidden md:block" />
          <span className="text-xs font-bold text-brand-green uppercase tracking-[0.2em] hidden md:block">
            {service.title}
          </span>
        </div>
      </div>

      {/* Flagship Hero Section */}
      <section className="pb-20 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 bg-brand-green/5 text-brand-green px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-8 border border-brand-green/10">
                <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
                {service.category} Excellence
              </div>
              
              <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-dark mb-10 leading-[1.1] tracking-tight">
                {titleWords.map((word, i) => (
                  <span key={i} className={i === titleWords.length - 1 ? "text-brand-green block" : "block"}>
                    {word}
                  </span>
                ))}
              </h1>
              
              <div className="relative pl-8 border-l-4 border-brand-green/20 mb-12">
                <p className="text-body text-xl md:text-2xl leading-relaxed font-medium">
                  {service.longDesc || service.desc}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link 
                  href="/#contact" 
                  className="w-full sm:w-auto bg-dark text-white px-10 py-5 rounded-2xl font-bold hover:bg-brand-green hover:shadow-[0_20px_40px_rgba(0,107,79,0.3)] transition-all duration-500 text-center text-lg"
                >
                  Consult an Expert
                </Link>
                <div className="flex items-center gap-4 bg-surface-gray px-6 py-4 rounded-2xl border border-gray-100 group transition-all hover:border-brand-green/20">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-green shadow-sm group-hover:scale-110 transition-transform">
                    <Zap size={20} fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-body uppercase tracking-widest leading-none mb-1">Response Time</div>
                    <div className="text-sm font-extrabold text-dark">&lt; 2 Hours</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="relative group"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-green/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl" />
              
              <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border-8 border-white group-hover:border-brand-green/10 transition-colors duration-500">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-60" />
                
                <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 mb-2 text-brand-green">Engineering Standard</div>
                      <div className="text-2xl font-heading font-extrabold">ISO Certified 9001</div>
                    </div>
                    <div className="w-12 h-12 bg-brand-green rounded-2xl flex items-center justify-center shadow-lg">
                      <ShieldCheck size={28} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Features Matrix */}
      <section className="py-32 bg-surface-gray relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-dark mb-6 tracking-tight">
              Technical <span className="text-brand-green">Ecosystem</span>
            </h2>
            <p className="text-body max-w-2xl mx-auto text-xl opacity-80 leading-relaxed">
              We leverage an advanced technical matrix to ensure every {service.title} installation meets our uncompromising standards for reliability and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.features?.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand-green/20 transition-all duration-500 group flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-surface-gray rounded-[2rem] flex items-center justify-center text-brand-green mb-8 group-hover:bg-brand-green group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-heading font-extrabold text-dark leading-tight mb-4 group-hover:text-brand-green transition-colors">
                  {feature}
                </h3>
                <div className="w-8 h-1 bg-gray-100 rounded-full group-hover:bg-brand-green/30 group-hover:w-16 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
