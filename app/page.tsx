"use client"

import { Header } from "@/components/header"
import { MenuSection } from "@/components/menu-section"
import { About } from "@/components/about"
import { Gallery } from "@/components/gallery"

const PLACE_NAME = "Restauracja Na Ludowej"
const PLACE_ADDR = "Ludowa 9, 66-500 Strzelce Krajeńskie"
const MAPS_PLACE_URL =
  "https://www.google.com/maps/search/?api=1&query=Restauracja+Na+Ludowej+Ludowa+9+66-500+Strzelce+Kraje%C5%84skie"
const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Ludowa+9,+66-500+Strzelce+Kraje%C5%84skie"

function MapWithOpinie() {
  return (
    <section id="contact" className="relative max-w-6xl mx-auto px-4 md:px-6 py-12">
      <div className="relative overflow-hidden rounded-2xl" style={{ border: "1px solid var(--border)" }}>
        <iframe
          src="https://www.google.com/maps?q=Ludowa+9,+66-500+Strzelce+Kraje%C5%84skie&output=embed"
          width="100%"
          height="420"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="bg-white"
          title="Mapa – Restauracja Na Ludowej"
        />
        <div className="absolute left-4 bottom-4">
          <div
            className="rounded-2xl px-5 py-4 shadow-lg"
            style={{
              backgroundColor: "var(--card)",
              color: "var(--foreground)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="font-serif text-lg mb-1">{PLACE_NAME}</div>
            <div style={{ color: "var(--muted-foreground)" }} className="text-sm">
              {PLACE_ADDR}
            </div>

            <div className="mt-3 flex items-center gap-2 text-sm">
              <span aria-hidden>★</span>
              <span className="font-semibold">4.5</span>
              <span style={{ color: "var(--muted-foreground)" }}>(438 opinii)</span>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <a
                href={MAPS_PLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-9 px-4 rounded-xl"
                style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
              >
                Oceń nas
              </a>
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-9 px-4 rounded-xl border transition hover:bg-white/10"
                style={{ color: "var(--foreground)", borderColor: "var(--border)" }}
              >
                Nawiguj
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* ===== HERO ===== */}
      <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-70 blur-[1px] pointer-events-none"
          src="/2894881-hd_1920_1080_24fps.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 45%, rgba(0,0,0,.08) 0%, rgba(0,0,0,.28) 100%)",
          }}
        />

        <div className="relative z-10 px-6 max-w-4xl mx-auto text-center">
          <h1
            className="font-serif text-white leading-tight text-5xl md:text-7xl mb-4"
            style={{ textShadow: "0 2px 18px rgba(0,0,0,.35)" }}
          >
            Restauracja <span className="text-primary">Na Ludowej</span>
          </h1>
          <p style={{ color: "#e0e0e0" }} className="text-lg md:text-xl">
            Zapewniamy wyjątkowe doznania kulinarne, które na długo pozostaną w Twojej pamięci.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <div className="mx-auto max-w-fit">
              <div className="flex items-center justify-center gap-4">
                <a
                  href="#reservation"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-xl"
                  style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
                >
                  Rezerwuj Stolik
                </a>
                <a
                  href="#menu"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-xl border hover:bg-white/10 transition"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,.3)" }}
                >
                  Zobacz Menu
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEKCJE ===== */}
      <main>
        <About />
        <Gallery />

        <section id="menu" className="scroll-mt-24">
          <MenuSection />
        </section>

        <MapWithOpinie />
      </main>

      {/* ===== STOPKA ===== */}
      <footer className="relative mt-14">
        {/* miękki glow nad stopką */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 left-1/2 h-48 w-[84%] -translate-x-1/2 blur-3xl"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 0%, color-mix(in oklch, var(--primary, #a3133a) 28%, transparent) 0%, transparent 70%)",
          }}
        />
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, color-mix(in oklch, var(--border) 85%, white 15%), transparent)",
          }}
        />

        {/* === TŁO STOPKI === */}
        <div
          className="relative"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, color-mix(in oklch, var(--card, var(--background)) 88%, black 12%) 55%, color-mix(in oklch, var(--card, var(--background)) 78%, #7f1030 22%) 100%)",
          }}
        >
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-center">
            <div style={{ color: "var(--muted-foreground)" }}>
              © {new Date().getFullYear()} Restauracja Na Ludowej. Wszelkie prawa zastrzeżone.
            </div>

            {/* === Ikony społecznościowe === */}
            <div className="mt-5 flex justify-center gap-6">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-transform hover:-translate-y-0.5 hover:scale-110 duration-300"
                style={{
                  color: "color-mix(in oklch, var(--primary) 70%, white 30%)",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.6c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4H15c-1.2 0-1.6.8-1.6 1.5v1.9H17l-.4 2.9h-2.2v7A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-transform hover:-translate-y-0.5 hover:scale-110 duration-300"
                style={{
                  color: "color-mix(in oklch, var(--primary) 70%, white 30%)",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2.2A2.8 2.8 0 1 1 12 16a2.8 2.8 0 0 1 0-5.8zM17.8 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </a>
            </div>

            {/* === PODPIS NA SAMYM DOLE === */}
            <div className="mt-8 inline-flex items-center justify-center gap-1.5 text-xs">
              <span style={{ color: "var(--foreground)" }}>Stworzone przez</span>
              <a
                href="https://bkubiak.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold leading-none relative transition-transform hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(90deg, color-mix(in oklch, var(--primary,#e04875) 92%, black 8%), color-mix(in oklch, #e04875 88%, #a3133a 12%))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  textDecoration: "none",
                }}
              >
                bkubiak.dev
                <span
                  aria-hidden
                  className="absolute left-0 right-0 -bottom-0.5 h-[1.5px] opacity-80"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, color-mix(in oklch, var(--primary,#e04875) 70%, #000 30%) 15%, color-mix(in oklch, #e04875 70%, #a3133a 30%) 85%, transparent 100%)",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
