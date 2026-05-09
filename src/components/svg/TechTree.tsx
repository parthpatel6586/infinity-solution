"use client";

import { motion } from "framer-motion";

export function TechTree() {
  const icons = [
    { x: 150, y: 50, name: "CCTV" },
    { x: 100, y: 100, name: "WiFi" },
    { x: 200, y: 100, name: "Solar" },
    { x: 80, y: 180, name: "Server" },
    { x: 220, y: 180, name: "Audio" },
    { x: 150, y: 220, name: "Security" },
  ];

  return (
    <div className="relative w-full aspect-square max-w-[400px] mx-auto">
      <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Trunk */}
        <motion.path
          d="M150 300V150"
          stroke="#006B4F"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        {/* Branches */}
        {icons.map((icon, i) => (
          <motion.path
            key={i}
            d={`M150 150Q${icon.x} 150 ${icon.x} ${icon.y}`}
            stroke="#007BFF"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
          />
        ))}

        {/* Nodes */}
        {icons.map((icon, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={icon.x}
            cy={icon.y}
            r="8"
            fill="white"
            stroke="#006B4F"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", delay: 1.5 + i * 0.1 }}
          />
        ))}
      </svg>
      
      {/* Floating Badges */}
      {icons.map((icon, i) => (
        <motion.div
          key={`badge-${i}`}
          className="absolute bg-white shadow-lg rounded-full px-3 py-1 text-[10px] font-bold border border-brand-green/20 text-dark"
          style={{ 
            left: `${(icon.x / 300) * 100}%`, 
            top: `${(icon.y / 300) * 100}%`,
            transform: 'translate(-50%, -150%)'
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
        >
          {icon.name}
        </motion.div>
      ))}
    </div>
  );
}
