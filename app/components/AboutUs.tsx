import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function AboutUs() {
  return (
    <section id="about" className="border-y border-border bg-muted/40 py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="lg:col-span-5">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">About</p>
            <h2 className="font-display mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Technology translated into outcomes—not jargon
            </h2>
            <blockquote className="mt-8 border-l-2 border-primary pl-6 font-display text-lg font-medium leading-snug tracking-tight text-foreground">
              We simplify complexity so your roadmap stays legible to both builders and executives.
            </blockquote>
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                MiddleX aims to be a steady partner in digital transformation—shipping tailored work across data
                engineering, applied AI, software development, and growth foundations for B2B, B2C, and public-sector
                teams.
              </p>
              <p>
                Our bias is toward clarity: crisp specs, honest estimates, and interfaces your customers actually feel.
                Whether you need a flagship marketing site or a platform your engineers will thank you for, we meet you
                where you are and raise the bar from there.
              </p>
            </div>
            <Button asChild variant="outline" className="mt-8 rounded-full">
              <Link href="#contact">Talk with our team</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
