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

export const metadata: Metadata = {
  title: "MiddleX — Websites, platforms & data that ship",
  description:
    "We partner with teams to design and build standout websites, products, and AI-ready data foundations—from discovery to launch.",
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
