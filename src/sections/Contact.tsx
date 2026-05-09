"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  MapPin, Phone, Mail, Clock, Send, MessageSquare 
} from "lucide-react";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be 10 digits"),
  service: z.string().min(1, "Please select a service"),
  location: z.string().optional(),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          subject: `New Enquiry for ${data.service}`
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Enquiry sent successfully! We will contact you shortly.");
        reset();
      } else {
        toast.error(result.error || "Submission failed. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="bg-surface-gray rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:row-span-2 lg:flex-row max-w-6xl mx-auto">
          
          {/* Left: Form */}
          <div className="lg:w-3/5 p-6 md:p-12 bg-white">
            <h2 className="text-3xl font-heading font-extrabold text-dark mb-3">
              Get In Touch With Us
            </h2>
            <p className="text-body text-base mb-8">
              Have a project in mind? Fill out the form below and our experts will get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-dark mb-2 uppercase tracking-tighter">Full Name*</label>
                  <input 
                    {...register("name")}
                    className="w-full bg-surface-gray border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 font-bold">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-dark mb-2 uppercase tracking-tighter">Email Address*</label>
                  <input 
                    {...register("email")}
                    className="w-full bg-surface-gray border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 font-bold">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-dark mb-2 uppercase tracking-tighter">Phone Number*</label>
                  <input 
                    {...register("phone")}
                    className="w-full bg-surface-gray border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all"
                    placeholder="83471 09868"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 font-bold">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-dark mb-2 uppercase tracking-tighter">Service Required*</label>
                  <select 
                    {...register("service")}
                    className="w-full bg-surface-gray border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option value="IT Networking">IT Networking</option>
                    <option value="CCTV Systems">CCTV Systems</option>
                    <option value="Smart Home">Smart Home Automation</option>
                    <option value="Solar Solutions">Solar Energy</option>
                    <option value="AV Systems">Audio Visual</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.service && <p className="text-red-500 text-xs mt-1 font-bold">{errors.service.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-dark mb-2 uppercase tracking-tighter">Message*</label>
                  <textarea 
                    {...register("message")}
                    rows={3}
                    className="w-full bg-surface-gray border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all"
                    placeholder="Describe your requirements..."
                  />
                {errors.message && <p className="text-red-500 text-xs mt-1 font-bold">{errors.message.message}</p>}
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-green text-white py-3.5 rounded-xl font-bold text-base hover:bg-brand-teal transition-all flex items-center justify-center gap-3 disabled:opacity-70 shadow-xl shadow-brand-green/20"
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Right: Info */}
          <div className="lg:w-2/5 p-6 md:p-12 bg-brand-green text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-heading font-extrabold text-white mb-6 uppercase tracking-wider">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 text-white shadow-inner">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-[10px] uppercase tracking-widest opacity-80 mb-1">Our Location</div>
                    <div className="text-base font-medium">
                      Gr Floor, 17, Platinium Plaza, <br />
                      Nikol, Ahmedabad - 382350
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 text-white shadow-inner">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-[10px] uppercase tracking-widest opacity-80 mb-1">Call Us</div>
                    <div className="text-base font-medium">+91 83471 09868 ( Nikunj Patel )</div>
                    <div className="text-base font-medium">+91 96620 05440 ( Axay Patel )</div>
                    <div className="text-base font-medium">+91 85111 01781 ( PradipKumar Patel )</div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 text-white shadow-inner">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-[10px] uppercase tracking-widest opacity-80 mb-1">Email Address</div>
                    <div className="text-base font-medium">infinitydtoesolution@gmail.com</div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 text-white shadow-inner">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-[10px] uppercase tracking-widest opacity-80 mb-1">Working Hours</div>
                    <div className="text-base font-medium">Mon–Sat: 9:00 AM – 7:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <a 
                href="https://wa.me/918347109868"
                target="_blank"
                className="flex items-center justify-center gap-3 bg-white text-black w-full py-3.5 rounded-xl font-bold text-base hover:bg-surface-gray transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
  </section>
  );
}
