"use client";

import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Services } from "@/sections/Services";
import { Solutions } from "@/sections/Solutions";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { Projects } from "@/sections/Projects";
import { Industries } from "@/sections/Industries";
import { Team } from "@/sections/Team";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Solutions />
      <WhyChooseUs />
      <Projects />
      <Industries />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
}
