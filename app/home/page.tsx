"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { gsap } from "gsap";

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentSkills, setCurrentSkills] = useState([0, 1]);
  const [currentHirePoints, setCurrentHirePoints] = useState([0, 1]);
  const hirePointsRef = useRef<(HTMLDivElement | null)[]>([]);
  const skillsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const skillsInterval = setInterval(() => {
      setCurrentSkills((prevSkills) => {
        const newSkills = [...prevSkills];
        newSkills[0] = (newSkills[0] + 2) % 8;
        newSkills[1] = (newSkills[1] + 2) % 8;
        return newSkills;
      });
    }, 5000);

    const hirePointsInterval = setInterval(() => {
      setCurrentHirePoints((prevPoints) => {
        const newPoints = [...prevPoints];
        newPoints[0] = (newPoints[0] + 2) % 10;
        newPoints[1] = (newPoints[1] + 2) % 10;
        return newPoints;
      });
    }, 5000);

    return () => {
      clearInterval(skillsInterval);
      clearInterval(hirePointsInterval);
    };
  }, []);

  useEffect(() => {
    hirePointsRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5, delay: index * 0.2 }
        );
      }
    });
  }, [currentHirePoints]);

  useEffect(() => {
    skillsRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, delay: index * 0.2 }
        );
      }
    });
  }, [currentSkills]);

  if (!mounted) return null;

  const cardStyles = theme === "dark" 
    ? "bg-gradient-to-t from-gray-950 to-red-950 border-t-red-700 border-b-gray-700"
    : "bg-gradient-to-t from-white to-gray-100 border-t-gray-300 border-b-gray-400";

  const skills = [
    {
      title: "Web Development",
      description: "Build responsive, fast, and user-friendly web applications using HTML, CSS, JavaScript, and React/Next.js."
    },
    {
      title: "Backend Integration",
      description: "Develop scalable backends with Node.js and manage data using MongoDB and RESTful APIs."
    },
    {
      title: "AI-Powered Solutions",
      description: "Explore and integrate AI tools into projects to enhance automation and user experience."
    },
    {
      title: "Web3 & Blockchain Concepts",
      description: "Familiar with Web3 technologies, blockchain fundamentals, and decentralized applications."
    },
    {
      title: "UI/UX Design Principles",
      description: "Create intuitive wireframes and prototypes that balance functionality with aesthetics."
    },
    {
      title: "Metaverse Development",
      description: "Contribute to projects focused on metaverse ecosystems, bridging physical and virtual realities."
    },
    {
      title: "Collaborative Problem-Solving",
      description: "Work effectively in team environments and participate in hackathons to solve real-world problems."
    },
    {
      title: "Continuous Learning & Innovation",
      description: "Stay updated with emerging technologies and actively seek opportunities for growth."
    }
  ];

  const hirePoints = [
    {
      title: "Full-Stack Web Development",
      description: "Expertise in both frontend (React, Next.js) and backend (Node.js, MongoDB)."
    },
    {
      title: "AI-Integrated Solutions",
      description: "Use AI tools to automate workflows and enhance user experience."
    },
    {
      title: "Web3 & Blockchain Projects",
      description: "Familiar with decentralized applications (dApps) and blockchain technology."
    },
    {
      title: "Metaverse Enthusiast",
      description: "Experience contributing to virtual reality and metaverse projects."
    },
    {
      title: "UI/UX Focused",
      description: "Design user-friendly, intuitive interfaces with a focus on functionality."
    },
    {
      title: "Proactive & Fast Learner",
      description: "Stay updated with the latest trends and adapt quickly to new technologies."
    },
    {
      title: "Collaborative Problem Solver",
      description: "Work well in team environments with clear communication."
    },
    {
      title: "Hackathon Experience",
      description: "Build real-world solutions under pressure and tight deadlines."
    },
    {
      title: "Current Role",
      description: "Serving at the Governor's IT Initiative for AI, Web3, and Metaverse projects."
    },
    {
      title: "Result-Driven & Professional",
      description: "Focus on delivering high-impact solutions aligned with project goals."
    }
  ];

  return (
    <div className="mt-12">
      <main
        className={`min-h-screen transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-background text-foreground"
        }`}
      >
        {/* Hero Section */}
        <section className="pt-24 pb-10 px-4">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Zohaib</h1>
              <h2
                className={`text-2xl md:text-3xl mb-6 ${
                  theme === "dark" ? "text-gray-400" : "text-muted-foreground"
                }`}
              >
                Web Developer | UI/UX Designer | AI Enthusiast
              </h2>
              <p
                className={`text-lg mb-8 max-w-2xl mx-auto ${
                  theme === "dark" ? "text-gray-300" : "text-muted-foreground"
                }`}
              >
                Passionate about creating innovative web solutions, designing intuitive user interfaces,
                and exploring the frontiers of artificial intelligence.
              </p>
              <Button
                asChild
                size="lg"
                className="font-mono text-lg text-white bg-gradient-to-bl from-purple-600 to-blue-600 hover:from-amber-500 hover:to-lime-700 duration-700 transition-all hover:scale-105"
              >
                <a href="#projects">Explore My Work</a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container mx-auto text-center mt-12"
        >
          <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Zohaib's profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* What I Do Section */}
          <section className="py-16 px-2">
            <h2 className="text-4xl font-bold mb-8 text-center">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentSkills.map((skillIndex, index) => (
                <div
                  key={skillIndex}
                  ref={(el) => {
                    skillsRef.current[index] = el;
                  }}
                  className={`p-6 ${cardStyles} border-2 overflow-hidden rounded-lg hover:shadow-lg shadow-stone-800/50 dark:shadow-lime-400/10 transition-all duration-300`}
                >
                  <h3 className="text-2xl text-sky-700 dark:text-sky-300 font-semibold mb-4">{skills[skillIndex].title}</h3>
                  <p>{skills[skillIndex].description}</p>
                </div>
              ))}
            </div>
          </section>

          {/*  Hire Me Section */}
          <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="relative mb-12 text-center">
                <h2 className="text-4xl font-extrabold tracking-tight mb-4">
                 Hire Me
                </h2>
                <span className="block mx-auto w-40 h-1 bg-blue-600"></span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {currentHirePoints.map((pointIndex, index) => (
                  <div
                    key={pointIndex}
                    ref={(el) => {
                      hirePointsRef.current[index] = el;
                    }}
                    className={`flex items-start p-6 border-2 rounded-lg shadow-md hover:shadow-lime-400/10 ${cardStyles}`}
                  >
                    <div>
                      <h3 className="text-2xl text-green-800 dark:text-green-300 font-semibold mb-2">
                        {hirePoints[pointIndex].title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed dark:text-orange-300">
                        {hirePoints[pointIndex].description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      </main>
    </div>
  );
}
