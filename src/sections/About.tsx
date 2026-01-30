"use client"

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import NodeJSicon from "@/assets/icons/nodejs.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import ThreeJsIcon from "@/assets/icons/threejs.svg";
import StripeIcon from "@/assets/icons/stripe.svg";
import PostgresIcon from "@/assets/icons/postgres.svg";
import mapImage from "@/assets/images/map.png"
import smileMemoji from "@/assets/images/memoji-smile.png"
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: 'Node.js',
    iconType: NodeJSicon
  },
  {
    title: 'TypeScript',
    iconType: TypeScriptIcon
  },
  {
    title: 'React',
    iconType: ReactIcon
  },
  {
    title: 'JavaScript',
    iconType: JavascriptIcon
  },
  {
    title: 'Three.js',
    iconType: ThreeJsIcon
  },
  {
    title: 'Stripe',
    iconType: StripeIcon
  },
  {
    title: 'PostgreSQL',
    iconType: PostgresIcon
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon
  },
  {
    title: 'CSS3',
    iconType: CssIcon
  },
  {
    title: 'GitHub',
    iconType: GithubIcon
  },
];

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Photography',
    emoji: '🎞',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Hiking',
    emoji: '🥾',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Music',
    emoji: '🎷',
    left: '70%',
    top: '45%',
  },
  {
    title: 'Fitness',
    emoji: '👟',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: '45%',
    top: '70%',
  },
]


export const AboutSection = () => {
    const constrainRef = useRef(null)
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
    
    return (
      <section id="about" ref={sectionRef}>
      <div className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do, and what inspires me." />
          </motion.div>
          <motion.div 
            className="mt-8 md:mt-12 lg:mt-16 flex flex-col gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-5 lg:grid-cols-3">
              <Card className="h-[300px] md:h-[320px] md:col-span-2 lg:col-span-1 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-300/5">
                <CardHeader title="My Reads" description="Explore the books shaping my perspectives." />
                <div className="w-40 mx-auto mt-2 md:mt-0">
                  <Image src={bookImage} alt="Book cover" className="transition-transform duration-500 hover:scale-105" />
                </div>
              </Card>
              <Card className="h-[300px] md:h-[320px] md:col-span-3 lg:col-span-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-300/5">
                <CardHeader 
                title="My Toolbox" 
                description="Explore the technologies and tools I use to build web applications." 
                className="" />
                <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
                <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName=" animate-move-right [animation-duration:20s]" />
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-6 md:gap-8">
              <Card className="h-[300px] md:h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-300/5">
                <CardHeader title="Beyond the Code" description="Explore my interests and hobbies outside of work." className="px-6 py-6" />
                <div className="relative flex-1" ref=
                {constrainRef}>
                  {hobbies.map(hobby => (
                    <motion.div 
                    key={hobby.title} 
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-grab active:cursor-grabbing transition-transform hover:scale-110" 
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                    >
                      <span className="font-medium text-gray-950">{hobby.title}</span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
              <Card className="h-[300px] md:h-[320px] p-0 relative md:col-span-2 lg:col-span-1 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-300/5 overflow-hidden">
                <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top transition-transform duration-700 hover:scale-110" />
                <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                  <Image src={smileMemoji} alt="smiling memoji" className="size-20" />
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    )
  };