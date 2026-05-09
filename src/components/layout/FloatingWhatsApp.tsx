"use client";

import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const phoneNumber = "919662005440"; // Removing + and spaces
  const message = "Hello, I'm interested in your services.";
  
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 px-6 py-3 bg-brand-whatsapp text-white rounded-full shadow-lg hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 shadow-brand-whatsapp/20 font-bold"
      aria-label="Chat on WhatsApp"
    >
      Chat on WhatsApp
    </button>
  );
}
