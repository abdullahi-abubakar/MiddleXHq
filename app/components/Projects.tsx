import Link from "next/link"
import { Layers, Palette, Rocket } from "lucide-react"

import { Button } from "@/components/ui/button"

const placeholders = [
  {
    title: "Brand & storytelling site",
    detail: "Launch narratives, CMS flexibility, and performance budgets that hold under traffic spikes.",
    icon: Palette,
  },
  {
    title: "Product experience",
    detail: "Design systems, dashboards, and flows built for real usage—not just mockups.",
    icon: Layers,
  },
  {
    title: "Go-to-market builds",
    detail: "Landing architecture, experiments, and instrumentation wired for learning quickly.",
    icon: Rocket,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="border-y border-border bg-muted/40 py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">Work</p>
          <h2 className="font-display mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            We are actively taking on flagship website and product engagements
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Case studies will live here as launches wrap. If you want MiddleX on your next brief, send context—we reply
            with approach, timeline options, and a sane estimate range.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
          {placeholders.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-2xl border border-dashed border-border bg-card/80 p-7 text-left shadow-sm backdrop-blur-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-foreground">
                <card.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-display mt-5 text-lg font-semibold tracking-tight">{card.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{card.detail}</p>
              <p className="mt-6 font-display text-xs font-semibold uppercase tracking-widest text-primary">Slot open</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-card to-card p-8 text-center shadow-sm md:p-10">
          <p className="font-display text-xl font-semibold tracking-tight md:text-2xl">Pitch your next website or product build</p>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground leading-relaxed">
            Share goals, references, and deadlines. We will propose a focused squad and delivery plan—no boilerplate RFP
            theater.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full px-8">
            <Link href="#contact">Submit a project brief</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
