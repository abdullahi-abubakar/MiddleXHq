import { Brain, Cloud, Code2, LineChart } from "lucide-react"

const services = [
  {
    title: "Advanced data solutions",
    description: "From ingestion to insight—pipelines, warehousing, and analytics tailored to how your business operates.",
    icon: Cloud,
    items: [
      "Cloud migration & optimization",
      "Storage, modeling & governance",
      "Real-time analytics",
      "SEO & growth instrumentation",
    ],
  },
  {
    title: "Engineering & infrastructure",
    description: "Reliable backends and integrations that keep pace with product ambition.",
    icon: LineChart,
    items: ["ETL & streaming patterns", "Big data integration", "Database architecture & ops"],
  },
  {
    title: "Data science & AI",
    description: "Applied ML where it earns its keep—measured, explainable, and production-aware.",
    icon: Brain,
    items: ["Forecasting & prediction", "ML systems & monitoring", "NLP & unstructured signals"],
  },
  {
    title: "Custom software & web",
    description: "Interfaces and APIs people enjoy using—performance, accessibility, and polish by default.",
    icon: Code2,
    items: ["Marketing sites & web apps", "Mobile companion experiences", "Automation & integrations"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">Capabilities</p>
            <h2 className="font-display mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Full-stack partnership for serious digital bets
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground leading-relaxed lg:text-right">
            Pick one lane or combine them—we assemble the right specialists for each engagement.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              </div>
              <ul className="mt-6 space-y-2 border-t border-border pt-6">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
