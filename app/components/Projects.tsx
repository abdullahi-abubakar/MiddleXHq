import Link from "next/link"

import { Button } from "@/components/ui/button"

import ProjectSlideshowCard from "./ProjectSlideshowCard"

const safewatchSlides = [
  { src: "/projects/safewatch/slide-1.png", alt: "Safewatch product screenshot 1" },
  { src: "/projects/safewatch/slide-2.png", alt: "Safewatch product screenshot 2" },
  { src: "/projects/safewatch/slide-3.png", alt: "Safewatch product screenshot 3" },
  { src: "/projects/safewatch/slide-4.png", alt: "Safewatch product screenshot 4" },
] as const

const middlexSlides = [
  { src: "/projects/middlex/slide-1.png", alt: "MiddleX website screenshot 1" },
  { src: "/projects/middlex/slide-2.png", alt: "MiddleX website screenshot 2" },
  { src: "/projects/middlex/slide-3.png", alt: "MiddleX website screenshot 3" },
  { src: "/projects/middlex/slide-4.png", alt: "MiddleX website screenshot 4" },
] as const

const restaurantSlides = [
  { src: "/projects/restaurant/slide-1.png", alt: "Restaurant project screenshot 1" },
  { src: "/projects/restaurant/slide-2.png", alt: "Restaurant project screenshot 2" },
  { src: "/projects/restaurant/slide-3.png", alt: "Restaurant project screenshot 3" },
  { src: "/projects/restaurant/slide-4.png", alt: "Restaurant project screenshot 4" },
] as const

export default function Projects() {
  return (
    <section id="projects" className="border-y border-border bg-muted/40 py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">Work</p>
          <h2 className="font-display mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Flagship website and product engagements
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A sample of recent builds—open any card for a four-slide walkthrough. Want MiddleX on your next brief? Send
            context and we will reply with approach, timelines, and a clear estimate range.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
          <ProjectSlideshowCard
            iconKey="safewatch"
            title="Safewatch"
            detail="Safety and monitoring experience—dashboard flows, alerts, and operational clarity for teams on call."
            slides={[...safewatchSlides]}
          />
          <ProjectSlideshowCard
            iconKey="middlex"
            title="MiddleX"
            detail="Brand-forward web presence and messaging aligned with how you show up to partners and customers."
            slides={[...middlexSlides]}
          />
          <ProjectSlideshowCard
            iconKey="restaurant"
            title="Restaurant"
            detail="Hospitality-focused digital experience—menus, reservations vibe, and visuals that match the room."
            slides={[...restaurantSlides]}
          />
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
