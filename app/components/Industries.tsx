const industries = [
  "Banking & financial services",
  "Retail & eCommerce",
  "Manufacturing & logistics",
  "Healthcare & pharma",
  "Telecommunications",
  "Media & entertainment",
  "Mining & energy",
  "Hospitality & tourism",
  "Transportation & automotive",
  "Real estate",
  "Government & public sector",
  "Agriculture",
]

export default function Industries() {
  return (
    <section id="industries" className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">Industries</p>
          <h2 className="font-display mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Domain depth across regulated and fast-moving markets
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Patterns transfer; context matters—we adapt playbooks to your compliance and customer realities.
          </p>
        </div>

        <div className="mx-auto mt-14 flex max-w-5xl flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
