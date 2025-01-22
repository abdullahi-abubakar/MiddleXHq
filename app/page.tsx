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

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
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

