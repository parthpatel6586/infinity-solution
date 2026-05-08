"use client";

import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Parth Patel",
    role: "Director",
    company: "Platinum Plaza, Nikol",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
    text: "Infinity Data And Energy Solutions has been our trusted partner for years. Their expertise in ELV and networking is unmatched in Ahmedabad. Every installation is handled with precision.",
    service: "IT Infrastructure"
  },
  {
    name: "Man Patel",
    role: "Founder",
    company: "Capital IT Solutions",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
    text: "Working with Nikunj and his team was a seamless experience. They automated our entire startup hub with smart controls that have significantly boosted our operational efficiency.",
    service: "Smart Automation"
  },
  {
    name: "Rajesh Shah",
    role: "Managing Director",
    company: "Shah Industries Ltd",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800",
    text: "The security systems installed by Infinity are top-notch. Their attention to detail and 24/7 support gives us true peace of mind for our industrial operations.",
    service: "CCTV & Security"
  },
  {
    name: "Priya Mehta",
    role: "Homeowner",
    company: "Shantigram, Ahmedabad",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
    text: "Our home theater and smart lighting systems are the highlight of our new home. The team's passion for excellence is visible in every corner of the installation.",
    service: "Home Theater"
  }
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-green rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block bg-brand-green/10 text-brand-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Client Success
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-dark tracking-tight">
            Voices of <span className="text-brand-green">Trust</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Controls */}
          <div className="absolute top-1/2 -left-4 md:-left-20 -translate-y-1/2 z-20">
            <button 
              onClick={prev}
              className="w-14 h-14 bg-white shadow-xl rounded-full flex items-center justify-center text-dark hover:bg-brand-green hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-20 -translate-y-1/2 z-20">
            <button 
              onClick={next}
              className="w-14 h-14 bg-white shadow-xl rounded-full flex items-center justify-center text-dark hover:bg-brand-green hover:text-white transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="relative min-h-[450px] md:min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -50 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="bg-surface-gray rounded-[3.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-16 border border-gray-100"
              >
                {/* Image Section */}
                <div className="relative w-40 h-40 md:w-64 md:h-64 flex-shrink-0">
                  <div className="absolute inset-0 bg-brand-green rounded-[3rem] rotate-6" />
                  <div className="absolute inset-0 bg-dark rounded-[3rem] -rotate-3" />
                  <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl">
                    <Image 
                      src={testimonials[index].image} 
                      alt={testimonials[index].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 text-center md:text-left">
                  <div className="text-brand-green mb-6 opacity-40">
                    <Quote size={64} fill="currentColor" />
                  </div>
                  
                  <div className="flex justify-center md:justify-start gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-dark text-xl md:text-2xl font-medium leading-relaxed mb-8 italic">
                    "{testimonials[index].text}"
                  </p>

                  <div>
                    <h4 className="text-2xl font-heading font-extrabold text-dark leading-tight">
                      {testimonials[index].name}
                    </h4>
                    <p className="text-body text-sm font-bold uppercase tracking-widest opacity-60 mt-1">
                      {testimonials[index].role} — {testimonials[index].company}
                    </p>
                    <div className="mt-4 inline-block bg-brand-green text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {testimonials[index].service} Expertise
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-10 bg-brand-green" : "w-2.5 bg-gray-200 hover:bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
