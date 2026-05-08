# Infinity Data And Energy Solutions

A complete, production-ready corporate website for Infinity Data And Energy Solutions. Built with Next.js App Router, Tailwind CSS, Framer Motion, GSAP, Three.js, and MongoDB.

## Features
- **Dark-First Design**: Immersive dark mode with glassmorphism panels.
- **3D Integrations**: React Three Fiber components for interactive network backgrounds, energy orbs, and smart grids.
- **Animations**: Scroll-triggered reveals via GSAP and smooth component transitions via Framer Motion.
- **Full-Stack Backend**: Next.js API routes with MongoDB integration for contact forms, inquiries, projects, and testimonials.
- **Security**: Basic rate limiting, input validation, and security headers via middleware.
- **Responsive**: Fully optimized for mobile, tablet, and desktop views.

## Prerequisites
- Node.js (v18+)
- MongoDB connection string

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Create a `.env.local` file based on the provided template:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=infinitydtoesolution@gmail.com
   EMAIL_PASS=your_app_password
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

3. **Seed Database**
   ```bash
   npx ts-node src/scripts/seed.ts
   ```
   *(Note: You might need to compile `ts-node` or run it with `--compilerOptions` for ES modules)*

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Tech Stack
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP
- Three.js (@react-three/fiber, @react-three/drei)
- Mongoose
- Nodemailer
- Lucide React (Icons)
