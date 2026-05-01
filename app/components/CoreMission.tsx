import { Shield, Database } from "lucide-react"

export default function CoreMission() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-dot-soft opacity-40" aria-hidden />
      <div className="relative container mx-auto px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">Mission</p>
          <h2 className="font-display mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Built for teams who treat data and digital presence as strategic assets
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md md:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-100" aria-hidden />
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Database className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="font-display mt-6 text-xl font-semibold tracking-tight">A dependable data foundation</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We design repositories and pipelines with sovereignty, security, and compliance in mind—so AI initiatives and
              analytics stay trustworthy as you scale.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md md:p-10">
            <div className="absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-accent blur-3xl transition-opacity group-hover:opacity-90" aria-hidden />
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Shield className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="font-display mt-6 text-xl font-semibold tracking-tight">Security without slowing delivery</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Practical controls, clear ownership, and automation-first workflows—so governance supports velocity instead of
              blocking it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
