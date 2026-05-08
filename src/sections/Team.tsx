"use client";

import { motion } from "framer-motion";
import { User, ShieldCheck, Cpu, MessageSquare, Briefcase } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Nikunj Patel",
    role: "Founder & Network Engineer | 7+ Years",
    image: "/team/nikunj.jpeg",
    bio: "Nikunj is the driving force behind Infinity's technical vision. With 7+ years of hands-on expertise in ELV systems, network infrastructure, and electrical contracting, he has personally overseen 300+ installations across Ahmedabad. A certified network engineer with an EC qualification, Nikunj combines deep field knowledge with entrepreneurial leadership — ensuring every project is delivered with precision, on time, and built to last.",
    skills: ["IT Networking", "ELV Systems", "Electrical (EC)", "Project Lead", "CCTV"],
    icon: ShieldCheck
  },
  {
    name: "PradipKumar Patel",
    role: "Founder & Head Engineer | 10+ Years",
    bio: "PradipKumar brings over a decade of engineering mastery to Infinity's foundation. As Head Engineer and Co-Founder, he leads the design and execution of the company's most complex enterprise projects — from structured data cabling and server infrastructure to smart building integrations. His calm, methodical approach and deep technical knowledge across solar, UPS, and security systems have made him the backbone of Infinity's engineering excellence.",
    skills: ["Solar Energy", "UPS Systems", "Structured Cabling", "Enterprise Design", "Smart Buildings"],
    icon: Cpu
  },
  {
    name: "Axay Patel",
    role: "Founder & Head Engineer | 5+ Years",
    image: "/team/pradipkumar.jpeg",
    bio: "Axay is the client-facing heart of Infinity's operations. With 5+ years of engineering experience, he specialises in residential smart solutions — from home automation and multi-room audio to CCTV surveillance and video door phone systems. His approachable personality and attention to detail ensure every homeowner and business client receives a solution tailored to their exact needs. Axay's commitment to after-sales support has earned Infinity its reputation for unmatched service.",
    skills: ["Smart Home", "Home Automation", "AV Systems", "Client Relations", "After-Sales"],
    icon: MessageSquare
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-surface-gray">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block bg-brand-green/10 text-brand-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Meet Our Leadership
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-dark mb-6">
            The Experts Behind <span className="text-brand-green">Infinity</span>
          </h2>
          <p className="text-body text-lg">
            Our founding team combines decades of technical expertise with a commitment to engineering excellence and client satisfaction.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[2.5rem] p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand-green/20 transition-all duration-500 flex flex-col h-full text-center"
            >
              {/* Premium Circular Profile Image */}
              <div className="relative mx-auto mb-8">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-8 border-surface-gray group-hover:border-brand-green/20 transition-all duration-500 shadow-xl">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full w-full bg-surface-gray text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                      <member.icon size={72} />
                    </div>
                  )}
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-brand-green text-white px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                  Founder
                </div>
              </div>

              {/* Identity */}
              <div className="mb-6">
                <h3 className="text-2xl font-heading font-extrabold text-dark mb-2 group-hover:text-brand-green transition-colors">
                  {member.name}
                </h3>
                <div className="text-[11px] font-bold text-brand-blue uppercase tracking-widest">
                  {member.role}
                </div>
              </div>

              {/* Bio */}
              <p className="text-body text-xs leading-relaxed mb-8 flex-grow italic opacity-80">
                "{member.bio}"
              </p>

              {/* Skills Tags */}
              <div className="pt-8 border-t border-gray-50">
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-surface-gray text-body text-[9px] font-bold px-3 py-1.5 rounded-lg border border-gray-100 group-hover:border-brand-green/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
