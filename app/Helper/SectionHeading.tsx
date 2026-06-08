'use client'
import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = {
  children: ReactNode
}

const SectionHeading = ({ children }: Props) => {
  return (
    <motion.h1
      initial={{ opacity: 0, rotate: -5, scale: 0.95 }}
      animate={{ opacity: 1, rotate: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: 'easeInOut',
        type: 'spring',
        stiffness: 80,
      }}
      className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mx-auto w-fit px-6 py-4 rounded-xl bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-yellow-300 to-sky-400 animate-gradient shadow-xl"
    >
      {children}
    </motion.h1>
  )
}

export default SectionHeading
