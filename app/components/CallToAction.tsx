import ContactForm from "./ContactForm"

export default function CallToAction() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border bg-[hsl(222_47%_9%)] py-20 text-white md:py-28">
      <div className="pointer-events-none absolute inset-0 hero-glow opacity-70" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-25" aria-hidden />

      <div className="relative container mx-auto px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
          <h2 className="font-display mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Tell us what you want to ship next
          </h2>
          <p className="mt-4 text-pretty text-lg text-white/75 leading-relaxed">
            Drop a short brief—scope, timeline, and links help us respond with something concrete within two business days.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-xl rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl md:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
