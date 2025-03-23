"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface MemberCardProps {
  name: string
  photoUrl: string
}

export function MemberCard({ name, photoUrl }: MemberCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-dark-800 rounded-xl shadow-md overflow-hidden cursor-pointer border border-dark-700 glow-on-hover"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-96">
        <Image
          src={photoUrl || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 w-full">
            <h3 className="text-2xl font-bold text-white neon-text">{name}</h3>
            <p className="text-red-400">Участник коллектива "Revolution"</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
      </div>
    </motion.div>
  )
}

