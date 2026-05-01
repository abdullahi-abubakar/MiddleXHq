"use client"

import Image from "next/image"
import { Building2, ChevronRight, Shield, UtensilsCrossed } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const projectIcons = {
  safewatch: Shield,
  middlex: Building2,
  restaurant: UtensilsCrossed,
} as const

export type ProjectIconKey = keyof typeof projectIcons

export type ProjectSlide = {
  src: string
  alt: string
}

type ProjectSlideshowCardProps = {
  title: string
  detail: string
  slides: ProjectSlide[]
  iconKey: ProjectIconKey
  badge?: string
}

export default function ProjectSlideshowCard({
  title,
  detail,
  slides,
  iconKey,
  badge = "View slideshow",
}: ProjectSlideshowCardProps) {
  const Icon = projectIcons[iconKey]

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={`Open ${title} slideshow (${slides.length} images)`}
          className="group flex cursor-pointer flex-col rounded-2xl border border-border bg-card/80 p-7 text-left shadow-sm backdrop-blur-sm transition-all hover:border-primary/45 hover:bg-card hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.99]"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
            <Icon className="h-5 w-5" aria-hidden />
          </div>
          <h3 className="font-display mt-5 text-lg font-semibold tracking-tight group-hover:text-foreground">{title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{detail}</p>
          <div className="mt-6 flex flex-col gap-1">
            <span className="text-[11px] font-medium leading-snug text-muted-foreground">
              Opens gallery · use arrows inside to browse
            </span>
            <span className="inline-flex items-center gap-1 font-display text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="border-b border-primary/40 pb-px transition-colors group-hover:border-primary">
                {badge}
              </span>
              <ChevronRight
                className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden
              />
            </span>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-5xl gap-6 overflow-y-auto p-6 sm:p-8">
        <DialogHeader className="text-left">
          <DialogTitle className="font-display text-xl tracking-tight">{title}</DialogTitle>
        </DialogHeader>
        <Carousel className="w-full px-10 sm:px-14">
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={slide.src}>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-muted">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 90vw, 896px"
                    priority={index === 0}
                  />
                </div>
                <p className="mt-2 text-center text-xs text-muted-foreground">
                  Slide {index + 1} of {slides.length}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1 border-border sm:left-2" />
          <CarouselNext className="right-1 border-border sm:right-2" />
        </Carousel>
      </DialogContent>
    </Dialog>
  )
}
