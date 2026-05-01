import type { Metadata } from "next"
import { DM_Sans, Outfit } from "next/font/google"

import "./globals.css"
import { ToastProvider } from "@/components/ui/toast"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.middlexhq.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: "MiddleX — Web Design & Data Engineering Agency in Lagos",
    template: "%s · MiddleX",
  },
  description:
    "MiddleX builds high-performance websites, data pipelines, and AI-powered platforms for ambitious teams in Lagos and across Nigeria. Fixed-price engagements. Biweekly demos.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${outfit.variable} font-sans`}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  )
}
