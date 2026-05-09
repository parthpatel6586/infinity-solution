import { 
  Network, Server, Camera, Monitor, Shield, Database, Phone, Video, Zap, 
  Tv2, Home, Wifi, ShieldCheck, Music, Lock, Layers, PhoneCall 
} from "lucide-react";

export interface Service {
  id: number;
  title: string;
  category: "enterprise" | "residential";
  icon: any;
  desc: string;
  image: string;
  longDesc?: string;
  features?: string[];
}

export const services: Service[] = [
  // Enterprise Services
  {
    id: 1,
    title: "IT Networking",
    category: "enterprise",
    icon: Network,
    desc: "Structured cabling, LAN/WAN setup, network design for enterprises.",
    longDesc: "We provide comprehensive IT networking solutions designed to scale with your business. From the physical infrastructure of structured cabling to the logical design of robust LAN/WAN environments, we ensure your organization stays connected and productive.",
    features: ["Structured Data & Voice Cabling", "High-Performance LAN/WAN Setup", "Wireless Network Design", "Network Security & Monitoring"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000"
  },
  {
    id: 2,
    title: "IT Racks & Enclosures",
    category: "enterprise",
    icon: Server,
    desc: "Server racks with various technologies, cable management, patch panels.",
    longDesc: "Our server rack solutions focus on efficiency, accessibility, and thermal management. We provide a wide range of enclosures, from standard server racks to specialized wall-mount units, complete with advanced cable management and power distribution.",
    features: ["Standard & Custom Server Racks", "Advanced Thermal Management", "Intelligent Patch Panels", "Cable Organization Systems"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000"
  },
  {
    id: 3,
    title: "CCTV & Security Systems",
    category: "enterprise",
    icon: Camera,
    desc: "IP cameras, DVR/NVR setup, remote monitoring for commercial spaces.",
    longDesc: "Protect your assets with our state-of-the-art surveillance solutions. We specialize in high-definition IP cameras and robust NVR systems that provide crystal-clear imagery and secure remote access from anywhere in the world.",
    features: ["4K IP Camera Deployment", "Remote Monitoring Apps", "Motion Detection & Alerts", "Night Vision Surveillance"],
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2000"
  },
  {
    id: 4,
    title: "Audio Visual Solutions",
    category: "enterprise",
    icon: Monitor,
    desc: "Projectors, display systems, video walls, conference room integration.",
    longDesc: "Transform your workspace with high-impact AV solutions. We design and install everything from boardroom projectors and interactive displays to large-scale video walls that command attention and facilitate collaboration.",
    features: ["Digital Signage & Video Walls", "Interactive Boardroom Displays", "Professional Sound Systems", "Unified AV Control"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000"
  },
  {
    id: 5,
    title: "Firewall & UTM Solutions",
    category: "enterprise",
    icon: Shield,
    desc: "Enterprise firewall, UTM, content filtering, network security.",
    longDesc: "Secure your perimeter with our advanced Firewall and Unified Threat Management (UTM) solutions. We provide deep packet inspection, content filtering, and real-time threat detection to keep your data safe from cyber threats.",
    features: ["Next-Generation Firewalls", "Content & Web Filtering", "Intrusion Prevention Systems", "Secure Remote VPN Access"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000"
  },
  {
    id: 6,
    title: "Servers & Storage",
    category: "enterprise",
    icon: Database,
    desc: "Server installation, storage arrays, NAS/SAN configuration.",
    longDesc: "Power your applications with our server and storage solutions. We specialize in high-availability server clusters and enterprise-grade storage arrays (NAS/SAN) that ensure your data is always accessible and protected.",
    features: ["Enterprise Server Hardware", "NAS/SAN Storage Solutions", "Data Redundancy & RAID", "Cloud Storage Integration"],
    image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=2000"
  },
  {
    id: 7,
    title: "Voice (PBX) Solutions",
    category: "enterprise",
    icon: Phone,
    desc: "IP PBX, VoIP, intercom systems, unified communications.",
    longDesc: "Modernize your communications with our IP PBX and VoIP solutions. We provide unified communications that integrate voice, video, and messaging into a single, easy-to-manage platform for your entire organization.",
    features: ["Modern IP PBX Systems", "Cost-Effective VoIP Lines", "Unified Communications App", "Automated Attendant"],
    image: "https://images.unsplash.com/photo-1557425955-df376b5903c8?q=80&w=2000"
  },
  {
    id: 8,
    title: "Conference Room Solutions",
    category: "enterprise",
    icon: Video,
    desc: "Complete AV setup for boardrooms, VC systems, wireless presentation.",
    longDesc: "Create the perfect meeting environment with our boardroom solutions. We integrate high-definition video conferencing, professional audio, and wireless presentation systems into a seamless, user-friendly experience.",
    features: ["HD Video Conferencing", "Wireless Content Sharing", "Smart Room Control Panels", "Acoustic Enhancement"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000"
  },
  {
    id: 9,
    title: "Power Solutions - UPS",
    category: "enterprise",
    icon: Zap,
    desc: "Online/offline UPS, power conditioning, backup power systems.",
    longDesc: "Ensure zero downtime with our advanced UPS solutions. We provide high-efficiency online UPS systems and power conditioning equipment that protects your critical hardware from power surges and outages.",
    features: ["Online Double-Conversion UPS", "Battery Backup Expansion", "Power Monitoring Software", "Surge Protection Systems"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000"
  },
  
  // Residential Services
  {
    id: 10,
    title: "Home Theater & Acoustic",
    category: "residential",
    icon: Tv2,
    desc: "Dolby surround sound, 4K projectors, acoustic treatment, seating.",
    longDesc: "Bring the cinema home with our custom home theater solutions. We combine high-end 4K projection, immersive Dolby Atmos sound, and professional acoustic treatment to create a cinematic experience in your living room.",
    features: ["Custom Cinema Design", "Dolby Atmos Surround", "Acoustic Wall Paneling", "Automated Cinema Lighting"],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2000"
  },
  {
    id: 11,
    title: "Smart Home Automation",
    category: "residential",
    icon: Home,
    desc: "Lighting, curtains, security, climate control — all in one app.",
    longDesc: "Experience the ultimate in comfort and convenience with our smart home automation. Control your lighting, climate, security, and entertainment systems from a single, intuitive app on your smartphone or tablet.",
    features: ["Smart Lighting Control", "Climate & AC Automation", "Voice Assistant Integration", "Personalized Scene Settings"],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2000"
  },
  {
    id: 12,
    title: "Home Wireless System",
    category: "residential",
    icon: Wifi,
    desc: "Mesh Wi-Fi, seamless roaming, dead-zone elimination for large homes.",
    longDesc: "Say goodbye to dead zones with our whole-home Wi-Fi solutions. We deploy high-performance mesh systems that provide seamless roaming and high-speed connectivity in every corner of your property.",
    features: ["Gigabit Mesh Wi-Fi", "Seamless Room Roaming", "Parental Controls", "Secure Guest Networking"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000"
  },
  {
    id: 13,
    title: "Home CCTV Surveillance",
    category: "residential",
    icon: Camera,
    desc: "IP cameras, video doorbells, night vision, mobile alerts.",
    longDesc: "Keep an eye on your home from anywhere. Our residential CCTV systems provide high-definition monitoring, intelligent motion alerts, and two-way audio for complete peace of mind.",
    features: ["High-Def Smart Cameras", "Instant Mobile Alerts", "Cloud & Local Recording", "Intelligent Face Detection"],
    image: "/images/services/home-cctv.png"
  },
  {
    id: 14,
    title: "Home Security Solution",
    category: "residential",
    icon: ShieldCheck,
    desc: "Motion sensors, door/window alerts, panic buttons, 24/7 monitoring.",
    longDesc: "Our comprehensive home security solutions combine sensors, sirens, and monitoring to protect your family. From door sensors to glass-break detectors, we cover every vulnerability.",
    features: ["Intrusion Detection Sensors", "High-Decibel Alarm Sirens", "Emergency Panic Buttons", "24/7 App Monitoring"],
    image: "/images/services/home-security.png"
  },
  {
    id: 15,
    title: "Multi Room Audio",
    category: "residential",
    icon: Music,
    desc: "Distributed audio, in-ceiling speakers, zone-wise volume control.",
    longDesc: "Fill your home with music. Our multi-room audio systems allow you to stream different music in every room or synchronize your entire home for a party, all controlled from your phone.",
    features: ["In-Ceiling Hi-Fi Speakers", "Zone-Wise Volume Control", "Streaming Service Support", "Outdoor Audio Integration"],
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1200"
  },
  {
    id: 16,
    title: "Smart Door Lock",
    category: "residential",
    icon: Lock,
    desc: "Biometric, RFID, PIN, app-controlled door locks for homes.",
    longDesc: "Upgrade your entry security with smart door locks. Choose from fingerprint recognition, PIN codes, or app control to manage access to your home without ever needing a physical key.",
    features: ["Fingerprint Biometrics", "RFID & PIN Entry", "Remote Guest Access", "Auto-Lock Security"],
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1200"
  },
  {
    id: 17,
    title: "Curtain Automation",
    category: "residential",
    icon: Layers,
    desc: "Motorized curtain/blind systems, schedule & voice control.",
    longDesc: "Add a touch of luxury with automated curtains. Schedule them to open with the sunrise or close at sunset, and control them easily via voice commands or your smart home app.",
    features: ["Motorized Rail Systems", "Sunrise/Sunset Scheduling", "Quiet Operation Motors", "Voice & Remote Control"],
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2000"
  },
  {
    id: 18,
    title: "Video Door Phone",
    category: "residential",
    icon: PhoneCall,
    desc: "Video intercom, visitor recording, remote unlock via smartphone.",
    longDesc: "Never miss a visitor again. Our video door phones allow you to see and speak with anyone at your door from your indoor monitor or your smartphone, even when you're not at home.",
    features: ["Wide-Angle HD Camera", "Two-Way Audio Intercom", "Smartphone Notification", "Digital Door Unlock"],
    image: "/images/services/video-door-phone.png"
  }
];
