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
        
        <div className="bg-surface-gray rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row">
          
          {/* Left: Form */}
          <div className="lg:w-3/5 p-8 md:p-16 bg-white">
            <h2 className="text-4xl font-heading font-extrabold text-dark mb-4">
              Get In Touch With Us
            </h2>
            <p className="text-body text-lg mb-12">
              Have a project in mind? Fill out the form below and our experts will get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-dark mb-2 uppercase tracking-tighter">Full Name*</label>
                  <input 
                    {...register("name")}
                    className="w-full bg-surface-gray border border-gray-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 font-bold">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-dark mb-2 uppercase tracking-tighter">Email Address*</label>
                  <input 
                    {...register("email")}
                    className="w-full bg-surface-gray border border-gray-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 font-bold">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-dark mb-2 uppercase tracking-tighter">Phone Number*</label>
                  <input 
                    {...register("phone")}
                    className="w-full bg-surface-gray border border-gray-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all"
                    placeholder="83471 09868"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 font-bold">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-dark mb-2 uppercase tracking-tighter">Service Required*</label>
                  <select 
                    {...register("service")}
                    className="w-full bg-surface-gray border border-gray-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all appearance-none"
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
                  rows={4}
                  className="w-full bg-surface-gray border border-gray-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all"
                  placeholder="Describe your requirements..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1 font-bold">{errors.message.message}</p>}
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-green text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-teal transition-all flex items-center justify-center gap-3 disabled:opacity-70 shadow-xl shadow-brand-green/20"
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Right: Info */}
          <div className="lg:w-2/5 p-8 md:p-16 bg-brand-green text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-heading font-extrabold mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-sm uppercase tracking-widest opacity-60 mb-1">Our Location</div>
                    <div className="text-lg font-medium">
                      Gr Floor, 17, Platinium Plaza, <br />
                      Nikol, Ahmedabad - 382350
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-sm uppercase tracking-widest opacity-60 mb-1">Call Us</div>
                    <div className="text-lg font-medium">+91 83471 09868</div>
                    <div className="text-lg font-medium">+91 96620 05440</div>
                    <div className="text-lg font-medium">+91 85111 01781</div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-sm uppercase tracking-widest opacity-60 mb-1">Email Address</div>
                    <div className="text-lg font-medium">infinitydtoesolution@gmail.com</div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white">
                    <Clock size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-sm uppercase tracking-widest opacity-60 mb-1">Working Hours</div>
                    <div className="text-lg font-medium">Mon–Sat: 9:00 AM – 7:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <a 
                href="https://wa.me/918347109868"
                target="_blank"
                className="flex items-center justify-center gap-3 bg-white text-brand-green w-full py-4 rounded-xl font-bold text-lg hover:bg-surface-gray transition-all shadow-2xl"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.821 7.454c-1.679 0-3.325-.453-4.764-1.31L4.89 21.43l.913-3.003c-1.002-1.442-1.531-3.144-1.531-4.898 0-4.887 3.978-8.864 8.865-8.864 2.368 0 4.596.924 6.271 2.601 1.676 1.677 2.6 3.905 2.6 6.263 0 4.89-3.978 8.865-8.865 8.865m0-17.73c-4.88 0-8.854 3.974-8.854 8.854 0 1.56.408 3.084 1.183 4.422L2.65 23l5.882-1.543c1.288.702 2.738 1.072 4.22 1.072 4.88 0 8.854-3.974 8.854-8.854 0-4.88-3.974-8.854-8.854-8.854" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
