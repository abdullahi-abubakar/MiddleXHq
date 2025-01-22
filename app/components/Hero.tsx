import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Empowering Digital Success with Top-Tier Technology Expertise
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          X is a global provider of comprehensive technology services, delivering innovative solutions that drive
          excellence across industries.
        </p>
        <Link
          href="#contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}

