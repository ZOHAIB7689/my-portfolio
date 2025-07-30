"use client"

import { useRef } from "react";
import AboutPage from "@/components/about/page"
import SkillsPage from "@/components/skills/page"
import ProjectsPage from "@/components/projects/page"
import ContactPage from "@/components/contact/page"
import HomePage from "@/components/home/page"
// about/page.tsx
export const metadata = {
  title: "About Zohaib | Full Stack Developer",
  description: "Learn more about Zohaib, a full stack developer with a passion for web & AI.",
};


export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    co0ntact: contactRef,
  };

  return (
    <div className="">
      {/* <Navbar sectionRefs={sectionRefs} /> */}
      <section id="home" ref={homeRef}><HomePage /></section>
      <section id="about" ref={aboutRef}><AboutPage /></section>
      <section id="skills" ref={skillsRef}><SkillsPage /></section>
      <section id="projects" ref={projectsRef}><ProjectsPage /></section>
      <section id="contact" ref={contactRef}><ContactPage /></section>
    </div >
  );
}