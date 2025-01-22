import Link from "next/link"

export default function CallToAction() {
  return (
    <section id="contact" className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          We understand that every business is unique. Our solutions are crafted to address specific challenges and meet
          individual client needs.
        </p>
        <Link
          href="#"
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </section>
  )
}

