import { Lightbulb, PenTool, Rocket, RefreshCw } from "lucide-react"

const processes = [
  {
    step: "01",
    title: "Understand & align",
    description:
      "We unpack goals, constraints, and success metrics with your stakeholders—so engineering choices map to outcomes.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "Tailored planning",
    description:
      "Roadmaps, IA, and technical spikes where they matter. You get clarity on scope, risks, and milestones before build.",
    icon: PenTool,
  },
  {
    step: "03",
    title: "Ship with discipline",
    description:
      "Iterative delivery with demos, instrumentation, and QA baked in—modern stacks, accessible UI, and docs that last.",
    icon: Rocket,
  },
  {
    step: "04",
    title: "Evolve continuously",
    description:
      "Handoffs that stick: monitoring, runbooks, and a sane backlog—so your team can operate and extend with confidence.",
    icon: RefreshCw,
  },
]

export default function OurProcess() {
  return (
    <section className="border-y border-border bg-muted/40 py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">Process</p>
          <h2 className="font-display mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            A calm, predictable path from idea to launch
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Transparent rituals and tight feedback loops—so you always know where things stand.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processes.map((process) => (
            <div
              key={process.step}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md md:p-7"
            >
              <span className="font-display text-xs font-bold uppercase tracking-widest text-primary/80">{process.step}</span>
              <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <process.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="font-display mt-5 text-lg font-semibold tracking-tight">{process.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
