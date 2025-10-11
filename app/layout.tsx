import type React from "react"
import type { Metadata } from "next"
import { Manrope, Cormorant_Garamond } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

/** Modern sans for UI/treść — podpinam pod --font-inter, żeby nic nie zmieniać w CSS */
const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
})

/** Elegancki serif dla nagłówków — podpinam pod --font-playfair */
const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Restauracja Na Ludowej - Autentyczna Polska Kuchnia",
  description:
    "Odkryj smaki tradycyjnej polskiej kuchni w Restauracji Na Ludowej. Serwujemy autentyczne dania przygotowane według tradycyjnych receptur.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body className={`font-sans antialiased ${manrope.variable} ${cormorant.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
