"use client"

import { Header } from "@/components/header"
import { MenuSection } from "@/components/menu-section"
import { About } from "@/components/about"
import { Gallery } from "@/components/gallery"

// --- Stałe lokalizacji ---
const PLACE_NAME = "Restauracja Na Ludowej"
const PLACE_ADDR = "Ludowa 9, 66-500 Strzelce Krajeńskie"

// Link do wizytówki / opinii
const MAPS_PLACE_URL =
  "https://www.google.com/maps/search/?api=1&query=Restauracja+Na+Ludowej+Ludowa+9+66-500+Strzelce+Kraje%C5%84skie"

// Link do nawigacji (ustaw destination na adres)
const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Ludowa+9,+66-500+Strzelce+Kraje%C5%84skie"

// ——— Mapa z kartą (przyciski: Odwiedź nas, Nawiguj) ———
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
        {/* Karta info w lewym dolnym rogu */}
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

            {/* Przyciski akcji */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <a
                href={MAPS_PLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-9 px-4 rounded-xl"
                style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
              >
                Oceń Nas!
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

      {/* ===== HERO — wideo tło, CTA ===== */}
      <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Tło wideo */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-70 blur-[1px] pointer-events-none"
          src="/2894881-hd_1920_1080_24fps.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Overlay dla czytelności */}
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />
        {/* Delikatny vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 45%, rgba(0,0,0,.08) 0%, rgba(0,0,0,.28) 100%)",
          }}
        />

        {/* Treść */}
        <div className="relative z-10 px-6 max-w-4xl mx-auto text-center">
          <h1
            className="font-serif text-white leading-tight text-5xl md:text-7xl mb-4"
            style={{ textShadow: "0 2px 18px rgba(0,0,0,.35)" }}
          >
            Restauracja <span className="text-primary">Na Ludowej</span>
          </h1>
          <p style={{ color: "var(--muted-foreground)" }} className="text-lg md:text-xl">
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
        <MenuSection />
        <MapWithOpinie />
      </main>

      {/* ===== STOPKA — bordowy gradient (bez „iskry”) ===== */}
      <footer className="relative mt-12">
        {/* miękki burgundowy glow nad stopką */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 left-1/2 h-40 w-[82%] -translate-x-1/2 blur-2xl"
          style={{
            background:
              "radial-gradient(60% 70% at 50% 0%, color-mix(in oklch, var(--primary, #a3133a) 32%, transparent) 0%, transparent 70%)",
          }}
        />

        {/* cienka linia separująca */}
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, color-mix(in oklch, var(--border) 85%, white 15%), transparent)",
          }}
        />

        {/* tło stopki z przejściem w dół (bordo) */}
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, color-mix(in oklch, var(--card, var(--background)) 88%, black 12%) 55%, color-mix(in oklch, var(--card, var(--background)) 80%, #a3133a 20%) 100%)",
          }}
        >
          <div className="relative mx-auto max-w-6xl px-4 py-7 text-center text-sm">
            {/* subtelny top-glint */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-4 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, color-mix(in oklch, var(--primary, #e04875) 60%, transparent) 40%, color-mix(in oklch, var(--primary, #e04875) 60%, transparent) 60%, transparent)",
                opacity: 0.7,
              }}
            />

            {/* USUNIĘTA „iskra” w stopce */}

            <div style={{ color: "var(--muted-foreground)" }}>
              © {new Date().getFullYear()} Restauracja Na Ludowej. Wszelkie prawa zastrzeżone.
            </div>

            <div className="mt-2">
              <span style={{ color: "var(--foreground)" }}>Stworzone przez </span>
              <a
                href="https://bkubiak.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold transition-[opacity,transform] hover:opacity-90 hover:translate-y-[-1px]"
                style={{
                  color: "color-mix(in oklch, var(--primary, #e04875) 92%, black 8%)",
                }}
              >
                bkubiak.dev
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
