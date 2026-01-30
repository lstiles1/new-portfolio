"use client"

import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png"
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png"
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png"
import Image from 'next/image'
import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import { SectionHeader } from "@/components/SectionHeader"
import { Card } from "@/components/Card"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const portfolioProjects = [
  {
    company: "Teenie Geenie",
    title: "3D T-Shirt Customizer",
    role: "Full-Stack Developer",
    period: "2024",
    stack: "Three.js · OpenAI API · GSAP · React",
    results: [
      { title: "Built real-time 3D rendering with Three.js for interactive customization" },
      { title: "Integrated AI-powered design generation with prompt engineering" },
      { title: "Implemented file upload system with color manipulation capabilities" },
    ],
    link: "https://teenie-geenie.vercel.app",
    image: darkSaasLandingPage,
  },
  {
    company: "Stocked",
    title: "Inventory Management Dashboard",
    role: "Full-Stack Developer",
    period: "2023",
    stack: "PostgreSQL · Node.js · Recharts · AWS",
    results: [
      { title: "Designed and built comprehensive sales analytics dashboard" },
      { title: "Streamlined admin workflows reducing task time by 40%" },
      { title: "Created intuitive inventory tracking with real-time updates" },
    ],
    link: "https://stocked-inventory.vercel.app ",
    image: lightSaasLandingPage,
  },
  {
    company: "Imaginify",
    title: "AI SaaS Photo Editor",
    role: "Full-Stack Developer",
    period: "2025",
    stack: "TypeScript · Stripe · Next.js",
    results: [
      { title: "Architected full-stack AI photo editing platform from scratch" },
      { title: "Integrated Stripe payments processing for credit-based system" },
      { title: "Built scalable image processing pipeline capable of handling 1000+ requests/day" },
    ],
    link: "https://imaginify-photo.vercel.app",
    image: aiStartupLandingPage,
  },
];

const ProjectCard = ({ project, projectIndex }: { project: typeof portfolioProjects[0], projectIndex: number }) => {
  const cardRef = useRef(null)
  const cardInView = useInView(cardRef, { once: true, margin: "-50px" })
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: projectIndex * 0.2 }}
    >
      <Card 
      className="px-6 pt-6 pb-8 md:pt-10 md:px-8 md:pb-10 lg:pt-12 lg:px-16 lg:pb-12 transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-emerald-300/10"
      style={{
        top: `calc(64px + ${projectIndex * 40}px)`,
      }}
      >
                <div className="flex flex-col lg:flex-row lg:gap-12 lg:items-center">
                  <div className="flex-1 lg:pb-0">
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div className="flex-1">
                        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                          <span>{project.company}</span>
                        </div>
                        <h3 className="font-serif text-2xl mt-3 md:mt-5 md:text-4xl">{project.title}</h3>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.split(' · ').map((tech) => (
                        <span key={tech} className="px-3 py-1.5 text-xs rounded-full border border-emerald-300/20 bg-emerald-300/5 text-emerald-300/80 font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <hr className="border-t-2 border-white/5 mt-8 md:mt-10" />
                    <ul className="flex flex-col gap-4 mt-8 md:mt-10">
                      {project.results.map((result) => (
                        <li key={result.title} className="flex gap-3 text-sm md:text-base text-white/70">
                          <CheckCircleIcon className="size-5 md:size-6 text-emerald-300/70 flex-shrink-0 mt-0.5" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-10 group/button">
                      <button className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 h-12 w-full md:w-auto px-8 rounded-lg font-bold inline-flex items-center justify-center gap-2 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-emerald-300/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300">
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="size-4 group-hover/button:translate-x-1 group-hover/button:-translate-y-1 transition-transform" />
                      </button>
                    </a>
                  </div>
                  <div className="relative overflow-hidden rounded-xl mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:flex-shrink-0 lg:w-[520px] lg:max-w-full">
                    <div className="relative aspect-video bg-gradient-to-br from-emerald-300/5 to-sky-400/5 rounded-xl overflow-hidden shadow-lg">
                      <Image 
                      src={project.image} 
                      alt={project.title} 
                      className="object-cover w-full h-full rounded-xl transition-transform duration-500 hover:scale-105"
                      priority={projectIndex === 0} />
                    </div>
                  </div>
                </div>

      </Card>
    </motion.div>
  )
}

export const ProjectsSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  return (
    <section id="projects" className="py-16 md:py-20 lg:py-24 pb-32 md:pb-32 lg:pb-40" ref={sectionRef}>
    <div>
      <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="" />
      </motion.div>
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20 mt-4 md:mt-6 lg:mt-8">
          {portfolioProjects.map((project, projectIndex) => (
            <ProjectCard key={project.title} project={project} projectIndex={projectIndex} />
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};