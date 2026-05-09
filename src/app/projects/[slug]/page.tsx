"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  ArrowLeft, MapPin, Calendar, Tag, CheckCircle2, 
  ArrowRight, Shield, Zap, Globe 
} from "lucide-react";

const projectData = {
  "smart-villa-integration": {
    title: "Smart Villa Integration",
    category: "Residential",
    location: "Prahlad Nagar, Ahmedabad",
    year: "2023",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200",
    description: "A comprehensive home automation project for a 5-bedroom luxury villa, integrating lighting, climate, security, and entertainment systems into a unified interface.",
    challenges: [
      "Integrating legacy electrical systems with modern smart controls",
      "Ensuring zero dead zones for Wi-Fi across 8,000 sq. ft.",
      "Customized scene management for different times of day"
    ],
    solutions: [
      "Deployed Control4 automation hub for unified control",
      "Installed high-end multi-room audio system",
      "Integrated AI-based security cameras with perimeter protection"
    ],
    results: [
      "30% reduction in energy consumption through smart climate control",
      "Enhanced security with real-time mobile notifications",
      "Simplified home management for the entire family"
    ]
  },
  "enterprise-network-setup": {
    title: "Enterprise Network Setup",
    category: "Commercial",
    location: "S.G. Highway, Ahmedabad",
    year: "2023",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200",
    description: "Full-scale networking infrastructure setup for a leading financial services firm, focusing on high-speed data transfer, security, and redundancy.",
    challenges: [
      "Complex multi-floor cabling and connectivity",
      "Strict data security requirements",
      "Need for 99.9% network uptime"
    ],
    solutions: [
      "Cat6a cabling infrastructure with fiber backbone",
      "Enterprise-grade firewall and secure VPN setup",
      "Redundant server architecture and load balancing"
    ],
    results: [
      "Zero network downtime reported since implementation",
      "50% faster data access for internal teams",
      "Scalable infrastructure for future expansion"
    ]
  },
  "industrial-cctv-audit": {
    title: "Industrial CCTV Audit",
    category: "Industrial",
    location: "Naroda GIDC, Ahmedabad",
    year: "2022",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=1200",
    description: "A security audit and surveillance system overhaul for a large manufacturing plant, ensuring complete coverage and AI-driven threat detection.",
    challenges: [
      "Extremely harsh industrial environment",
      "Over 150 cameras required for total coverage",
      "Need for centralized monitoring across multiple buildings"
    ],
    solutions: [
      "Installation of explosion-proof and high-temperature cameras",
      "AI-driven intrusion detection system",
      "Centralized Video Management System (VMS)"
    ],
    results: [
      "80% reduction in unauthorized site entries",
      "Improved operational efficiency through visual monitoring",
      "Compliance with international safety standards"
    ]
  },
  "hotel-security-solution": {
    title: "Hotel Security Solution",
    category: "Hospitality",
    location: "Ashram Road, Ahmedabad",
    year: "2023",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200",
    description: "A multi-layered security and guest management system for a 120-room boutique hotel, focusing on guest safety and operational ease.",
    challenges: [
      "Balancing high security with guest privacy",
      "Integrating guest room locks with central management",
      "Ensuring 24/7 reliability of fire alarm and public address systems"
    ],
    solutions: [
      "Smart card access control system for all rooms",
      "IP-based surveillance in public areas",
      "Integrated emergency response and PA system"
    ],
    results: [
      "Enhanced guest confidence and satisfaction ratings",
      "Streamlined check-in/out processes",
      "Reduced staff workload for security monitoring"
    ]
  },
  "rooftop-solar-plant": {
    title: "Rooftop Solar Plant",
    category: "Industrial",
    location: "Vatva GIDC, Ahmedabad",
    year: "2022",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200",
    description: "Design and installation of a 150kW rooftop solar plant for an industrial manufacturing facility, significantly reducing carbon footprint and energy costs.",
    challenges: [
      "Structural reinforcement needed for older rooftop",
      "Optimizing panel placement for maximum efficiency",
      "Integration with existing industrial power grid"
    ],
    solutions: [
      "High-efficiency monocrystalline solar panels",
      "Custom-designed aluminum mounting structures",
      "Advanced net-metering and monitoring system"
    ],
    results: [
      "Annual energy cost savings of over ₹15 lakhs",
      "Reduction of over 200 tonnes of carbon emissions annually",
      "Project payback estimated within 4 years"
    ]
  },
  "smart-office-av-setup": {
    title: "Smart Office AV Setup",
    category: "Commercial",
    location: "Gift City, Gandhinagar",
    year: "2024",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200",
    description: "State-of-the-art Audio-Visual and video conferencing setup for a corporate headquarters, enabling seamless global collaboration.",
    challenges: [
      "Creating user-friendly AV controls for all staff",
      "Acoustic management in open-plan meeting areas",
      "Seamless integration with multiple conferencing platforms"
    ],
    solutions: [
      "Integrated Crestron AV control system",
      "Professional ceiling microphones and speakers",
      "Automated lighting and blind controls for presentation modes"
    ],
    results: [
      "Increased efficiency in cross-border team collaboration",
      "Premium guest experience in presentation rooms",
      "Simplified management of company-wide events"
    ]
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectData[slug as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen bg-surface-white flex flex-col items-center justify-center p-8">
        <h1 className="text-2xl font-bold text-dark mb-4">Project Not Found</h1>
        <Link href="/#projects" className="text-brand-green font-bold flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end">
        <Image 
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 pb-16 w-full">
          <Link 
            href="/#projects"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 group"
          >
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-all">
              <ArrowLeft size={16} />
            </div>
            Back to Projects
          </Link>
          
          <div className="max-w-3xl">
            <div className="inline-block bg-brand-green text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              {project.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-brand-green" />
                <span className="font-medium">{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-brand-green" />
                <span className="font-medium">{project.year}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Left Column: Description & Details */}
            <div className="lg:col-span-2 space-y-16">
              <div>
                <h2 className="text-3xl font-heading font-extrabold text-dark mb-6">Project Overview</h2>
                <p className="text-body text-xl leading-relaxed text-gray-600 italic">
                  "{project.description}"
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-surface-gray p-8 rounded-3xl border border-gray-100">
                  <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-3">
                    <Shield className="text-brand-blue" />
                    Key Challenges
                  </h3>
                  <ul className="space-y-4">
                    {project.challenges.map((item, i) => (
                      <li key={i} className="flex gap-3 text-body text-base">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-brand-green/5 p-8 rounded-3xl border border-brand-green/10">
                  <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-3">
                    <Zap className="text-brand-green" />
                    Our Solutions
                  </h3>
                  <ul className="space-y-4">
                    {project.solutions.map((item, i) => (
                      <li key={i} className="flex gap-3 text-body text-base">
                        <CheckCircle2 size={18} className="text-brand-green mt-1 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-dark text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <Globe className="text-brand-green" />
                    The Final Outcome
                  </h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    {project.results.map((item, i) => (
                      <div key={i} className="space-y-3">
                        <div className="text-brand-green font-extrabold text-4xl italic">0{i+1}</div>
                        <p className="text-white/80 text-sm leading-relaxed font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Right Column: CTA & Info */}
            <div className="space-y-8">
              <div className="bg-surface-gray rounded-3xl p-8 sticky top-24">
                <h3 className="text-xl font-bold text-dark mb-6">Need Similar Solution?</h3>
                <p className="text-body text-sm mb-8">
                  Contact our experts today to discuss your project requirements and get a customized quote.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                      <Zap size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase">Consultation</div>
                      <div className="text-sm font-bold text-dark">Free Technical Audit</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                      <Shield size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase">Reliability</div>
                      <div className="text-sm font-bold text-dark">5-Year Support</div>
                    </div>
                  </div>
                </div>

                <Link 
                  href="/#contact"
                  className="w-full bg-brand-green text-white py-4 rounded-xl font-bold text-base hover:bg-brand-teal transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-green/20"
                >
                  Request A Quote
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
