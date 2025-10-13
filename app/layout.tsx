import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

/** Globalna czcionka — Poppins */
const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Restauracja Na Ludowej - Autentyczna Polska Kuchnia",
  description:
    "Odkryj smaki tradycyjnej polskiej kuchni w Restauracji Na Ludowej. Serwujemy autentyczne dania przygotowane według tradycyjnych receptur."
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body
        className={`font-sans antialiased ${poppins.variable}`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
