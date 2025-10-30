import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://restauracjanaludowej.pl"),
  title: {
    default: "Restauracja Na Ludowej - Autentyczna Polska Kuchnia"
  },
  description: "Restauracja Na Ludowej w Strzelcach Krajeńskich - autentyczna polska kuchnia, domowe obiady, tradycyjne pierogi. Odwiedź nas lub zadzwoń ☎ 123 456 789",
  keywords: [
    "restauracja Strzelce Krajeńskie",
    "polska kuchnia Strzelce",
    "obiady domowe",
    "pierogi Strzelce Krajeńskie",
    "restauracja Na Ludowej",
    "jedzenie na wynos Strzelce",
    "tradycyjne dania",
    "lubuskie restauracje",
    "schabowy Strzelce",
    "barszcz"
  ],
  authors: [{ name: "Restauracja Na Ludowej" }],
  creator: "Restauracja Na Ludowej",
  publisher: "Restauracja Na Ludowej",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://restauracjanaludowej.pl",
    siteName: "Restauracja Na Ludowej",
    title: "Restauracja Na Ludowej - Tradycyjna Polska Kuchnia",
    description: "Odkryj smaki tradycyjnej polskiej kuchni w Restauracji Na Ludowej. Serwujemy autentyczne dania przygotowane według tradycyjnych receptur.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Restauracja Na Ludowej w Strzelcach Krajeńskich",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restauracja Na Ludowej - Tradycyjna Polska Kuchnia",
    description: "Autentyczna polska kuchnia w Strzelcach Krajeńskich. Restauracja Na Ludowej zaprasza!",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: "https://restauracjanaludowej.pl",
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true
  },
  category: "restaurant",
}

function RestaurantStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Restauracja Na Ludowej",
    "description": "Restauracja serwująca tradycyjną polską kuchnię w Strzelcach Krajeńskich",
    "url": "https://restauracjanaludowej.pl",
    "telephone": "+48-500-611-633",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Ludowa 9",
      "addressLocality": "Strzelce Krajeńskie",
      "postalCode": "66-500",
      "addressRegion": "lubuskie",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.8779893",
      "longitude": "15.5339626"
    },
    "servesCuisine": "Polish",
    "priceRange": "$$",
    "openingHours": [
      "Th 10:00-19:00",
      "Fr 10:00-20:00", 
      "Sa 17:00-23:00",
      "Tu 09:00-19:00",
      "We 10:00-19:00"
    ],
    "hasMenu": "https://restauracjanaludowej.pl/#menu",
    "acceptsReservations": true,
    "image": "https://restauracjanaludowej.pl/og-image.png",
    "sameAs": [
      "https://www.facebook.com/restauracjanaludowej/", // 🚨 ZMIEŃ na prawdziwy FB!
      "https://www.facebook.com/restauracjanaludowej" // 🚨 ZMIEŃ na prawdziwy IG!
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <head>
        <RestaurantStructuredData />
      </head>
      <body className={`font-sans antialiased ${poppins.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}