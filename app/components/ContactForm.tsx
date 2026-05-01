"use client"

import { useFormState, useFormStatus } from "react-dom"

import { submitContactForm, type ContactFormState } from "@/app/actions/submit-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const initialState: ContactFormState = { success: false }

function FieldError({ messages }: { messages?: string[] }) {
  if (!messages?.length) return null
  return <p className="mt-1.5 text-sm text-red-300">{messages[0]}</p>
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className="w-full rounded-full bg-primary font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90"
    >
      {pending ? "Sending…" : "Send message"}
    </Button>
  )
}

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState)

  return (
    <form action={formAction} className="space-y-6">
      {state.message ? (
        <div
          role="alert"
          className="rounded-xl border border-red-400/40 bg-red-950/40 px-4 py-3 text-sm text-red-100"
        >
          {state.message}
        </div>
      ) : null}

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/90">
          Name
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required
          autoComplete="name"
          aria-invalid={Boolean(state.errors?.name)}
          className="h-11 border-white/15 bg-white/[0.07] text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
        />
        <FieldError messages={state.errors?.name} />
      </div>

      <div>
        <label htmlFor="phoneNumber" className="mb-2 block text-sm font-medium text-white/90">
          Phone
        </label>
        <Input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="+234 …"
          required
          autoComplete="tel"
          aria-invalid={Boolean(state.errors?.phoneNumber)}
          className="h-11 border-white/15 bg-white/[0.07] text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
        />
        <FieldError messages={state.errors?.phoneNumber} />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/90">
          Email
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="you@company.com"
          required
          autoComplete="email"
          aria-invalid={Boolean(state.errors?.email)}
          className="h-11 border-white/15 bg-white/[0.07] text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
        />
        <FieldError messages={state.errors?.email} />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/90">
          Project details
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Goals, budget band, timeline, links to references…"
          required
          rows={6}
          aria-invalid={Boolean(state.errors?.message)}
          className="resize-none border-white/15 bg-white/[0.07] text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
        />
        <FieldError messages={state.errors?.message} />
      </div>

      <SubmitButton />
    </form>
  )
}
