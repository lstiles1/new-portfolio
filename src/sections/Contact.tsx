"use client"

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export const ContactSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  return (
    <section id="contact" ref={sectionRef}>
    <div className="py-16 md:py-20 lg:py-24">
      <div className="container">
        <motion.div 
          className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 md:py-10 px-6 md:px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 opacity-5 -z-10" 
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}></div>
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="flex-1">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl">Let&apos;s create something amazing together</h2>
              <p className="text-sm md:text-base mt-3 md:mt-4">
                Ready to bring your next project to life? Let&apos;s connect and discuss how I can help you achieve your goals.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-3 w-full md:w-auto">
              <a href="mailto:lstiles00@gmail.com" className="w-full md:w-auto">
                <button className="text-white bg-gray-900 inline-flex items-center justify-center px-6 h-12 rounded-xl gap-2 w-full md:w-auto border border-gray-900 transition duration-300 ease-in-out hover:bg-gray-800 hover:border-gray-800 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                  <span className="font-semibold">Email</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a>
              <a href="https://www.linkedin.com/in/liam-stiles" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                <button className="text-white bg-gray-900 inline-flex items-center justify-center px-6 h-12 rounded-xl gap-2 w-full md:w-auto border border-gray-900 transition duration-300 ease-in-out hover:bg-gray-800 hover:border-gray-800 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                  <span className="font-semibold">LinkedIn</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a>
              <a href="https://github.com/lstiles1" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                <button className="text-white bg-gray-900 inline-flex items-center justify-center px-6 h-12 rounded-xl gap-2 w-full md:w-auto border border-gray-900 transition duration-300 ease-in-out hover:bg-gray-800 hover:border-gray-800 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                  <span className="font-semibold">Github</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </section>
  )
}