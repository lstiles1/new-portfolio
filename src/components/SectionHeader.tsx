"use client"

import React from "react"
import { motion } from "framer-motion"

export const SectionHeader = ({
    title,
    eyebrow,
    description,
}: {
    title: string
    eyebrow: string
    description: string
}) => {
  return (
    <>
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
          {eyebrow}
          </p>
        </motion.div>
        <motion.h2 
          className="font-serif text-3xl md:text-5xl text-center mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
        {title}
        </motion.h2>
        {description && (
          <motion.p 
            className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
          {description}
          </motion.p>
        )}
    </>    
  )
}