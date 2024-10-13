"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const achievements = [
  {
    title: "Full Stack Web Development Certification",
    description:
      "Mastered MERN stack and modern web technologies through an intensive bootcamp.",
    icon: "🏆",
  },
  {
    title: "AI Research Internship at Tech Giant",
    description:
      "Contributed to groundbreaking NLP projects, enhancing chatbot capabilities.",
    icon: "🤖",
  },
  {
    title: "National Hackathon Champion",
    description:
      "Led team to victory with an innovative AI-driven sustainability solution.",
    icon: "🥇",
  },
];

export default function About() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={fadeInUpVariants}
      className="min-h-screen mt-12 bg-gradient-to-br w-full from-background to-background/95 text-foreground py-16 px-4 relative overflow-x-hidden"
    >
      <div className="container mx-auto relative z-10">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          variants={fadeInUpVariants}
        >
          About Me
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div variants={fadeInUpVariants}>
            <Card className="bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-lime-400/10 dark:bg-gradient-to-t dark:from-gray-950 dark:to-red-950 dark:border-2 dark:border-t-red-700 dark:border-b-gray-700">
              <CardContent className="pt-6">
                <div className="aspect-square relative mb-6 overflow-hidden rounded-full w-32 h-32 sm:w-48 sm:h-48 mx-auto ring-4 ring-primary/20">
                  <Image
                    src="/profile.jpg"
                    alt="Zohaib"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="transition-transform duration-300 hover:scale-110 object-cover"
                  />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
                  Zohaib
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground text-center mb-4">
                  Full Stack Web Developer | UI/UX Design | AI Enthusiast
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl hover:text-primary transition-colors"
                  >
                    <FaGithub aria-label="GitHub" />
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl hover:text-primary transition-colors"
                  >
                    <FaLinkedin aria-label="LinkedIn" />
                  </a>
                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl hover:text-primary transition-colors"
                  >
                    <FaTwitter aria-label="Twitter" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUpVariants}>
            <Card className="bg-card/80 backdrop-blur-sm shadow-lg dark:bg-gradient-to-t dark:from-gray-950 dark:to-red-950 dark:border-2 dark:border-t-red-700 dark:border-b-gray-700 h-full">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold">
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Hi, I&apos;m <span className="font-bold text-lg text-lime-800 dark:text-lime-300">Zohaib</span>, a dedicated web developer and technology
                  enthusiast. My journey in the tech world began in February
                  2024, and since then, I have been committed to learning,
                  building, and evolving in this fast-paced field.
                </p>
                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  I bring a combination of <span className=" text-xl text-lime-800 dark:text-lime-300"><i>frontend</i></span> and <span className="font-bold text-lg text-lime-800 dark:text-lime-300"><i> backend development </i></span>
                  skills to my work, blending creativity with code to deliver
                  impactful web solutions. Additionally, I have a passion for
                  exploring AI tools and emerging technologies to stay ahead in
                  a rapidly evolving landscape. When I&apos;m not coding, I enjoy
                  participating in hackathons and brainstorming innovative ideas
                  that can shape the future of technology.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8 text-center"
          variants={fadeInUpVariants}
        >
          Key Achievements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                className="h-full"
              >
                <Card className="h-full bg-card/80 backdrop-blur-sm shadow-lg dark:hover:shadow-lime-400/10 dark:bg-gradient-to-t dark:from-gray-950 dark:to-red-950 dark:border-2 dark:border-t-red-700 dark:border-b-gray-700 hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg sm:text-xl font-bold">
                      <span className="text-2xl sm:text-3xl mr-2">
                        {achievement.icon}
                      </span>
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div className="mt-16 text-center" variants={fadeInUpVariants}>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-bl from-emerald-600 to-purple-600 text-white hover:scale-125 transition-all duration-300"
          >
            <a href="/contact">Let&apos;s Connect</a>
          </Button>
        </motion.div>
      </div>
    </motion.main>
  );
}
