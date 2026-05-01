"use server"

import { z } from "zod"

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  phoneNumber: z.string().trim().min(5, "Enter a valid phone number").max(40),
  email: z.string().trim().email("Invalid email address"),
  message: z.string().trim().min(10, "Please add a bit more detail (at least 10 characters)").max(10000),
})

export type ContactFormState =
  | { success: true; redirectUrl: string }
  | {
      success: false
      errors?: Partial<Record<"name" | "phoneNumber" | "email" | "message", string[]>>
      message?: string
    }

const DEFAULT_SUCCESS_URL = "https://www.middlexhq.com"

function successRedirectUrl(): string {
  const raw = process.env.CONTACT_SUCCESS_REDIRECT?.trim()
  return raw && /^https?:\/\//i.test(raw) ? raw : DEFAULT_SUCCESS_URL
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

/** Strip wrapping quotes (dotenv / Vercel often keeps `"..."` inside the value — Resend rejects that). */
function normalizeEnvValue(raw: string | undefined): string | undefined {
  if (raw == null) return undefined
  let v = raw.trim()
  while (
    (v.startsWith('"') && v.endsWith('"')) ||
    (v.startsWith("'") && v.endsWith("'"))
  ) {
    v = v.slice(1, -1).trim()
  }
  v = v.replace(/\u201c|\u201d/g, '"').replace(/\u2018|\u2019/g, "'").trim()
  return v === "" ? undefined : v
}

/** Resend expects `addr@domain` or `Name <addr@domain>`. */
function isValidResendFrom(from: string): boolean {
  const plain = /^[^\s<>]+@[^\s<>]+\.[^\s<>]+$/.test(from)
  const withName = /^[^<>]+\s<[^\s<>]+@[^\s<>]+\.[^\s<>]+>$/.test(from)
  return plain || withName
}

function missingEnvMessage(): string {
  const onVercel = process.env.VERCEL === "1"

  if (onVercel) {
    return (
      "The server still cannot see your email settings. In Vercel: Project → Settings → Environment Variables — add " +
      "RESEND_API_KEY, RESEND_FROM_EMAIL, and CONTACT_INBOX_EMAIL (exact names, non-empty values). " +
      "Enable them for the environment you use (Production and/or Preview), click Save, then Redeploy the latest deployment. " +
      "Check Deployment → Logs and search for \"[contact]\" if it persists."
    )
  }

  return (
    "Add RESEND_API_KEY, RESEND_FROM_EMAIL, and CONTACT_INBOX_EMAIL to a file named `.env.local` in the MiddleXHq folder " +
    "(copy from `.env.example`), then restart `npm run dev`. " +
    "Variables you set only on Vercel are not available on localhost — run `vercel env pull .env.local` in MiddleXHq to download them."
  )
}

export async function submitContactForm(
  _prevState: ContactFormState | undefined,
  formData: FormData
): Promise<ContactFormState> {
  const parsed = schema.safeParse({
    name: formData.get("name"),
    phoneNumber: formData.get("phoneNumber"),
    email: formData.get("email"),
    message: formData.get("message"),
  })

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors as Extract<
        ContactFormState,
        { success: false }
      >["errors"],
    }
  }

  const { name, phoneNumber, email, message } = parsed.data

  const apiKey = normalizeEnvValue(process.env.RESEND_API_KEY)
  const from = normalizeEnvValue(process.env.RESEND_FROM_EMAIL)
  const to = normalizeEnvValue(process.env.CONTACT_INBOX_EMAIL)

  const devMock =
    process.env.NODE_ENV === "development" &&
    process.env.CONTACT_FORM_DEV_MOCK === "true"

  if (!apiKey || !from || !to) {
    if (devMock) {
      console.warn(
        "[contact] CONTACT_FORM_DEV_MOCK: skipping email (no Resend). Submission:",
        { name, phoneNumber, email, messagePreview: message.slice(0, 200) }
      )
      return { success: true, redirectUrl: successRedirectUrl() }
    }

    console.error("[contact] Missing Resend env (true = set):", {
      RESEND_API_KEY: Boolean(apiKey),
      RESEND_FROM_EMAIL: Boolean(from),
      CONTACT_INBOX_EMAIL: Boolean(to),
      vercel: process.env.VERCEL === "1",
      nodeEnv: process.env.NODE_ENV,
    })

    return {
      success: false,
      message: missingEnvMessage(),
    }
  }

  if (!isValidResendFrom(from)) {
    return {
      success: false,
      message:
        'RESEND_FROM_EMAIL must be a plain address (you@domain.com) or exactly: Name <you@domain.com>. If it contains spaces, wrap the whole value in quotes in .env.local / Vercel — e.g. RESEND_FROM_EMAIL="MiddleX <onboarding@resend.dev>". Until middlexhq.com is verified in Resend, use an address Resend gives you for testing.',
    }
  }

  const html = `
    <h2>New MiddleX project inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phoneNumber)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Message:</strong></p>
    <pre style="white-space:pre-wrap;font-family:sans-serif">${escapeHtml(message)}</pre>
  `.trim()

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `MiddleX inquiry — ${name}`,
      html,
    }),
  })

  const body = (await res.json().catch(() => ({}))) as { message?: string }

  if (!res.ok) {
    return {
      success: false,
      message:
        typeof body.message === "string"
          ? body.message
          : "Could not send your message. Please try again in a few minutes.",
    }
  }

  return { success: true, redirectUrl: successRedirectUrl() }
}
