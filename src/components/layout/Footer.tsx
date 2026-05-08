"use client";

import Link from "next/link";
import { InfinityLogo } from "../svg/InfinityLogo";
import { 
  Facebook, Instagram, Linkedin, MessageCircle, ArrowUp, Mail, Phone, MapPin 
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-white pt-24 pb-12 overflow-hidden relative">

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-8 bg-white p-2 rounded-xl">
              <div className="w-40 h-16 relative">
                <img src="/logo.png" alt="Infinity Data & Energy Solutions" className="object-contain w-full h-full" />
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Ahmedabad's leading technology integrator. We provide state-of-the-art ELV, electrical, and solar solutions for a smarter, more secure future.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { 
                  icon: () => (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.821 7.454c-1.679 0-3.325-.453-4.764-1.31L4.89 21.43l.913-3.003c-1.002-1.442-1.531-3.144-1.531-4.898 0-4.887 3.978-8.864 8.865-8.864 2.368 0 4.596.924 6.271 2.601 1.676 1.677 2.6 3.905 2.6 6.263 0 4.89-3.978 8.865-8.865 8.865m0-17.73c-4.88 0-8.854 3.974-8.854 8.854 0 1.56.408 3.084 1.183 4.422L2.65 23l5.882-1.543c1.288.702 2.738 1.072 4.22 1.072 4.88 0 8.854-3.974 8.854-8.854 0-4.88-3.974-8.854-8.854-8.854" />
                    </svg>
                  ), 
                  href: "https://wa.me/918347109868" 
                },
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-green hover:text-white transition-all text-white/40"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-8 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Solutions", "Projects", "Team", "Contact"].map((link) => (
                <li key={link}>
                  <Link href={`/#${link.toLowerCase()}`} className="text-white/60 hover:text-brand-green transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-8 text-white">Our Services</h4>
            <ul className="space-y-4">
              {["IT Networking", "CCTV Surveillance", "Smart Home", "Solar Solutions", "AV Systems", "Security Solutions"].map((service) => (
                <li key={service}>
                  <Link href="#services" className="text-white/60 hover:text-brand-green transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-8 text-white">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin size={20} className="text-brand-green flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  Gr Floor, 17, Platinium Plaza, Nikol, Ahmedabad - 382350
                </span>
              </li>
              <li className="flex gap-4">
                <Phone size={20} className="text-brand-green flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-white/60 text-sm">+91 83471 09868</span>
                  <span className="text-white/60 text-sm">+91 96620 05440</span>
                  <span className="text-white/60 text-sm">+91 85111 01781</span>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail size={20} className="text-brand-green flex-shrink-0" />
                <span className="text-white/60 text-sm">infinitydtoesolution@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Infinity Data And Energy Solutions. All Rights Reserved. <br className="md:hidden" />
            Designed by Parth Patel
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-white/5 text-white/40 px-6 py-2 rounded-full hover:bg-brand-green hover:text-white transition-all text-xs font-bold uppercase tracking-widest"
          >
            Back to Top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
