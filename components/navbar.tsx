"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { AnimatedLogo } from "./animated-logo"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-dark-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="h-10 w-20">
              <AnimatedLogo />
            </div>
            {/* Removed Revolution text */}
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-red-500 font-medium">
              Главная
            </Link>
            <Link href="/members" className="text-gray-300 hover:text-red-500 font-medium">
              Участники
            </Link>
            <Link href="/choreographers" className="text-gray-300 hover:text-red-500 font-medium">
              Хореографы
            </Link>
          </nav>

          <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-black transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full p-4">
          <div className="flex justify-end">
            <button onClick={toggleMenu} className="text-white" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-1 space-y-8 text-xl">
            <Link
              href="/"
              className="text-gray-300 hover:text-red-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link
              href="/members"
              className="text-gray-300 hover:text-red-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Участники
            </Link>
            <Link
              href="/choreographers"
              className="text-gray-300 hover:text-red-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Хореографы
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

