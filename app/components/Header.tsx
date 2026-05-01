"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#industries", label: "Industries" },
  { href: "#projects", label: "Projects" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/75 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-6">
        <Link href="/" className="group flex items-baseline gap-1">
          <span className="font-display text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
            MiddleX
          </span>
          <span className="rounded-md bg-primary/10 px-1.5 py-0.5 font-display text-[11px] font-semibold uppercase tracking-wider text-primary">
            hq
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="rounded-full px-5 shadow-sm">
            <Link href="#contact">Start a project</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex rounded-lg border border-border bg-card p-2 md:hidden"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((o) => !o)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "border-t border-border bg-background/95 backdrop-blur-xl md:hidden",
          "transition-[max-height,opacity] duration-300 ease-out",
          isMenuOpen ? "max-h-[480px] opacity-100" : "max-h-0 overflow-hidden opacity-0"
        )}
      >
        <div className="container flex flex-col gap-1 px-4 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="mt-2 w-full rounded-full">
            <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
              Start a project
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
