import type { Metadata } from "next"

import Header from "./components/Header"
import Hero from "./components/Hero"
import CoreMission from "./components/CoreMission"
import OurProcess from "./components/OurProcess"
import Services from "./components/Services"
import AboutUs from "./components/AboutUs"
import Industries from "./components/Industries"
import Projects from "./components/Projects"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.middlexhq.com"

export const metadata: Metadata = {
  title: "MiddleX — Web Design & Data Engineering Agency in Lagos",
  description:
    "MiddleX builds high-performance websites, data pipelines, and AI-powered platforms for ambitious teams in Lagos and across Nigeria. Fixed-price engagements. Biweekly demos.",
  keywords: [
    "web design agency Lagos",
    "web development company Nigeria",
    "data engineering Nigeria",
    "digital agency Lagos Island",
    "AI development company Nigeria",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "MiddleX",
    title: "MiddleX — Web Design & Data Engineering Agency in Lagos",
    description:
      "MiddleX builds high-performance websites, data pipelines, and AI-powered platforms for ambitious teams in Lagos and across Nigeria. Fixed-price engagements. Biweekly demos.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MiddleX — Web Design & Data Engineering Agency in Lagos",
    description:
      "High-performance websites, data pipelines, and AI-powered platforms for teams in Lagos and Nigeria. Fixed-price engagements. Biweekly demos.",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="relative">
        <Hero />
        <CoreMission />
        <OurProcess />
        <Services />
        <AboutUs />
        <Industries />
        <Projects />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
