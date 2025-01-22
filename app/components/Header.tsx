"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white shadow-sm relative z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          middleXhq
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="#services" className="text-gray-600 hover:text-blue-600">
            Services
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-blue-600">
            About
          </Link>
          <Link href="#industries" className="text-gray-600 hover:text-blue-600">
            Industries
          </Link>
          <Link href="#projects" className="text-gray-600 hover:text-blue-600">
            Projects
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-600">
            Contact
          </Link>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
        </button>
      </nav>
      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white absolute top-full left-0 right-0 transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link href="#services" className="text-gray-600 hover:text-blue-600" onClick={toggleMenu}>
            Services
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-blue-600" onClick={toggleMenu}>
            About
          </Link>
          <Link href="#industries" className="text-gray-600 hover:text-blue-600" onClick={toggleMenu}>
            Industries
          </Link>
          <Link href="#projects" className="text-gray-600 hover:text-blue-600" onClick={toggleMenu}>
            Projects
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-600" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}

