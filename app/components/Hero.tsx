import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[hsl(222_47%_9%)] text-white">
      <div className="pointer-events-none absolute inset-0 hero-glow opacity-90" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-[0.35]" aria-hidden />

      <div className="relative container mx-auto px-4 pb-20 pt-16 md:pb-28 md:pt-24 lg:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animation-delay-100 animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/80 opacity-0 [animation-fill-mode:forwards]">
            <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden />
            Product & web studio
          </div>

          <h1 className="font-display animation-delay-150 animate-fade-up text-balance text-4xl font-semibold leading-[1.1] tracking-tight opacity-0 [animation-fill-mode:forwards] md:text-5xl lg:text-6xl">
            Web design agency Lagos teams trust for launches that last—and scale nationwide.
          </h1>

          <p className="animation-delay-200 animate-fade-up mx-auto mt-6 max-w-2xl text-pretty text-lg text-white/72 opacity-0 [animation-fill-mode:forwards] md:text-xl">
            MiddleX is a web development company Nigeria organizations choose when marketing sites, backends, and
            analytics must ship together—fixed-price engagements, biweekly demos, and craft you can feel in the details.
          </p>

          <div className="animation-delay-300 animate-fade-up mt-10 flex flex-col items-center justify-center gap-3 opacity-0 [animation-fill-mode:forwards] sm:flex-row sm:gap-4">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90"
            >
              <Link href="#contact">
                Book a discovery call
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/25 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
            >
              <Link href="#projects">See how we work</Link>
            </Button>
          </div>
        </div>

        <dl className="animation-delay-500 animate-fade-up mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md opacity-0 [animation-fill-mode:forwards] md:grid-cols-4 md:gap-4 md:p-8">
          {[
            { label: "Delivery mindset", value: "Biweekly demos" },
            { label: "Core crafts", value: "Web · Data · AI" },
            { label: "Engagement", value: "Fixed & retained" },
            { label: "Focus", value: "Quality over volume" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <dt className="text-xs font-medium uppercase tracking-wider text-white/50">{stat.label}</dt>
              <dd className="mt-1 font-display text-lg font-semibold tracking-tight">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
