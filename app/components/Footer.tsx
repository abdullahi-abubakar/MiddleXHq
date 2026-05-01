import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[hsl(222_47%_7%)] text-white">
      <div className="container mx-auto px-4 py-14 lg:px-6">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-baseline gap-1">
              <span className="font-display text-xl font-semibold tracking-tight">MiddleX</span>
              <span className="rounded-md bg-primary/20 px-1.5 py-0.5 font-display text-[11px] font-semibold uppercase tracking-wider text-primary">
                hq
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              Boutique engineering for websites, platforms, and data foundations—with the polish clients expect from a
              world-class studio.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-widest text-white/45">Navigate</p>
              <ul className="mt-4 space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/75 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-widest text-white/45">Social</p>
              <div className="mt-4 flex gap-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 p-2 text-white/70 transition-colors hover:border-primary/40 hover:text-primary"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 p-2 text-white/70 transition-colors hover:border-primary/40 hover:text-primary"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 p-2 text-white/70 transition-colors hover:border-primary/40 hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 p-2 text-white/70 transition-colors hover:border-primary/40 hover:text-primary"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-center text-xs text-white/45 md:flex-row md:items-center md:justify-between md:text-left">
          <p>&copy; {new Date().getFullYear()} MiddleXhq. All rights reserved.</p>
          <p>Crafted for teams who care how the internet feels.</p>
        </div>
      </div>
    </footer>
  )
}
