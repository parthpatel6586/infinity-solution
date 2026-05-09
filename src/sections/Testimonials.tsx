"use client";

import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Uttam Bhadiyadra",
    role: "CEO",
    company: "Creative Design & Multimedia Institute",
    image: "/team/uttam.png",
    text: "Infinity Data And Energy Solutions delivered an exceptional networking and lab infrastructure setup for our institute. From advanced lab connectivity to seamless network management.",
    service: "Lab Networking"
  },
  {
    name: "Parth Patel",
    role: "CEO",
    company: "CodeCrafter Technology",
    image: "/team/parth.png",
    text: "Their expertise in IT networking and smart lab sensor integration helped us build a highly efficient. The quality of execution.",
    service: "IT Networking & Sensors"
  },
  {
    name: "Ashok Ladumor",
    role: "CEO",
    company: "CDMI Nikol",
    image: "/team/ashok.jpeg",
    text: "Infinity Data And Energy Solutions provided outstanding networking and smart lab infrastructure for our institute. Their technical expertise, fast execution, and professional support helped us create a modern digital learning environment.",
    service: "Institute Networking"
  },
  {
    name: "Manav Patel",
    role: "Owner",
    company: "KICT",
    image: "/team/manav.jpeg",
    text: "The Infinity team delivered reliable IT networking and security solutions for our organization. Their commitment to quality and innovative approach made the entire setup smooth and highly efficient.",
    service: "IT & Security Solutions"
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
    <section id="testimonials" className="py-16 bg-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-brand-green rounded-full blur-[80px]" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-brand-blue rounded-full blur-[80px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Big Image Section */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-square lg:aspect-[4/5] group"
            >
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200"
                alt="Corporate Excellence"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Premium Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent p-10 flex flex-col justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-3xl mb-4"
                >
                  <div className="text-brand-green text-3xl font-extrabold mb-1">500+</div>
                  <div className="text-white/80 text-xs font-bold uppercase tracking-widest">Global Trusted Clients</div>
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white leading-tight">
                  Driving <br /><span className="text-brand-green">Innovation</span>
                </h2>
              </div>
            </motion.div>
            {/* Floating Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-green/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl -z-10" />
          </div>

          {/* Right Column: Small Slider */}
          <div className="relative">
            <div className="mb-8">
              <div className="inline-block bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                Testimonials
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-dark tracking-tight">
                What Our <span className="text-brand-green">Clients Say</span>
              </h3>
            </div>

            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Slider Card */}
              <div className="relative overflow-hidden py-8 px-2 md:px-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TestimonialCard testimonial={testimonials[index]} />
                  </motion.div>
                </AnimatePresence>

                {/* Floating Navigation Arrows */}
                <div className="absolute top-1/2 -left-2 md:-left-4 -translate-y-1/2 z-30">
                  <button
                    onClick={prev}
                    className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-dark hover:bg-brand-green hover:text-white transition-all duration-300 border border-gray-50"
                  >
                    <ChevronLeft size={18} />
                  </button>
                </div>
                <div className="absolute top-1/2 -right-2 md:-right-4 -translate-y-1/2 z-30">
                  <button
                    onClick={next}
                    className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-dark hover:bg-brand-green hover:text-white transition-all duration-300 border border-gray-50"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Pagination - Dash Style at Bottom Left */}
              <div className="flex justify-start items-center gap-1.5 px-6 -mt-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-1 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-brand-green" : "w-1.5 bg-gray-200"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <div className="bg-[#fcfdfe] rounded-[3rem] p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-gray-50 text-center relative">
      {/* Profile Image */}
      <div className="relative mx-auto mb-6">
        <div className="relative w-24 h-24 md:w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0 mx-auto">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute -bottom-1 -right-1 md:right-[calc(50%-60px)] bg-brand-green text-white p-1.5 rounded-full shadow-lg z-10">
          <Quote size={12} fill="currentColor" />
        </div>
      </div>

      {/* Header Info */}
      <div className="mb-6">
        <h4 className="text-xl font-heading font-extrabold text-[#1a2b3b] leading-tight mb-1">
          {testimonial.name}
        </h4>
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
          {testimonial.role} — {testimonial.company}
        </p>
      </div>

      {/* Quote Text */}
      <div className="relative mb-8">
        <p className="text-[#4a5568] text-sm md:text-base leading-relaxed italic px-2">
          "{testimonial.text}"
        </p>
      </div>

      {/* Bottom Section: Stars & Badge */}
      <div className="pt-6 border-t border-gray-100/50 flex flex-col items-center gap-4 mt-auto">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="fill-[#ffc107] text-[#ffc107]" />
          ))}
        </div>
        <div className="bg-[#e6f4f1] text-brand-green px-5 py-1.5 text-[9px] rounded-full font-bold uppercase tracking-[0.12em] border border-brand-green/5">
          {testimonial.service}
        </div>
      </div>
    </div>
  );
}
