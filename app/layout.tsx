import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
    default: "Restauracja Na Ludowej - Tradycyjna Polska Kuchnia Strzelce Krajeńskie",
    template: "%s | Restauracja Na Ludowej"
  },
  description: "Restauracja Na Ludowej w Strzelcach Krajeńskich - autentyczna polska kuchnia, domowe obiady, tradycyjne pierogi, schabowy, barszcz. Obiady na wynos. Zadzwoń ☎ 500 611 633",
  keywords: [
    // LOKALNE - NAJWAŻNIEJSZE
    "restauracja Strzelce Krajeńskie",
    "obiady Strzelce Krajeńskie",
    "pierogi Strzelce Krajeńskie",
    "schabowy Strzelce",
    "barszcz Strzelce",
    "jedzenie na wynos Strzelce",
    
    // SPECJALNOŚCI
    "tradycyjna polska kuchnia",
    "domowe obiady",
    "pierogi ruskie",
    "żurek staropolski", 
    "kotlet schabowy",
    "barszcz czerwony",
    "placki ziemniaczane",
    
    // LOKALIZACJA
    "restauracja Na Ludowej",
    "ludowa 9 Strzelce",
    "jedzenie Strzelce Krajeńskie",
    "obiady domowe lubuskie",
    
    // OKAZJE
    "obiady na wynos",
    "catering Strzelce",
    "jedzenie na imprezę",
    "obiady firmowe Strzelce"
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
    title: "Restauracja Na Ludowej - Tradycyjna Polska Kuchnia Strzelce Krajeńskie",
    description: "Odkryj smaki tradycyjnej polskiej kuchni w Restauracji Na Ludowej. Domowe obiady, pierogi, schabowy, barszcz. Obiady na wynos w Strzelcach Krajeńskich.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Restauracja Na Ludowej w Strzelcach Krajeńskich - Tradycyjna Polska Kuchnia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restauracja Na Ludowej - Tradycyjna Polska Kuchnia Strzelce",
    description: "Autentyczna polska kuchnia w Strzelcach Krajeńskich. Domowe obiady, pierogi, schabowy. Restauracja Na Ludowej zaprasza!",
    images: ["/og-image.jpg"],
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
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": "https://restauracjanaludowej.pl/#restaurant",
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
        "servesCuisine": ["Polish", "Traditional"],
        "priceRange": "$$",
        "openingHours": [
          "Mo 10:00-19:00",
          "Tu 09:00-19:00", 
          "We 10:00-19:00",
          "Th 10:00-19:00",
          "Fr 10:00-20:00",
          "Sa 17:00-23:00"
        ],
        "hasMenu": "https://restauracjanaludowej.pl/#menu",
        "acceptsReservations": true,
        "image": "https://restauracjanaludowej.pl/og-image.jpg",
        "sameAs": [
          "https://www.facebook.com/restauracjanaludowej/",
          "https://www.facebook.com/restauracjanaludowej"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://restauracjanaludowej.pl/#website",
        "url": "https://restauracjanaludowej.pl",
        "name": "Restauracja Na Ludowej Strzelce Krajeńskie",
        "description": "Tradycyjna polska kuchnia w Strzelcach Krajeńskich - domowe obiady, pierogi, schabowy, barszcz",
        "publisher": {
          "@id": "https://restauracjanaludowej.pl/#restaurant"
        }
      }
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
        
        {/* LOKALNE SEO - MUST HAVE! */}
        <meta name="geo.region" content="PL-LB" />
        <meta name="geo.placename" content="Strzelce Krajeńskie" />
        <meta name="geo.position" content="52.8779893;15.5339626" />
        <meta name="ICBM" content="52.8779893, 15.5339626" />
        
        {/* GOOGLE BUSINESS PROFILE - jeśli masz kod */}
        {/* <meta name="google-site-verification" content="TWÓJ_KOD" /> */}
      </head>
      <body className={`font-sans antialiased ${poppins.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}