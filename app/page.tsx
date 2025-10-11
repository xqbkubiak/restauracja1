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
                Odwiedź nas
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

        {/* -> Sekcja MENU (cel przewijania) */}
        <section id="menu" className="scroll-mt-24">
          <MenuSection />
        </section>

        <MapWithOpinie />
      </main>

      {/* ===== STOPKA — burgundowy styl „jak na screenie” ===== */}
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
        {/* cieniutka linia separująca */}
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, color-mix(in oklch, var(--border) 85%, white 15%), transparent)",
          }}
        />

        {/* tło stopki z delikatnym vertical fade do bordo */}
        <div
          className="relative"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, color-mix(in oklch, var(--card, var(--background)) 88%, black 12%) 55%, color-mix(in oklch, var(--card, var(--background)) 78%, #7f1030 22%) 100%)",
          }}
        >
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm">
            <div className="text-center">
              <div style={{ color: "var(--muted-foreground)" }}>
                © {new Date().getFullYear()} Restauracja Na Ludowej. Wszelkie prawa zastrzeżone.
              </div>

              <div className="mt-2 inline-flex items-center gap-1.5">
                <span style={{ color: "var(--foreground)" }}>Stworzone przez</span>

                {/* link z gradientem tekstu + subtelne podkreślenie */}
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
                  {/* underline gradient */}
                  <span
                    aria-hidden
                    className="absolute left-0 right-0 -bottom-0.5 h-[1.5px] opacity-80"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, color-mix(in oklch, var(--primary,#e04875) 70%, #000 30%) 15%, color-mix(in oklch, #e04875 70%, #a3133a 30%) 85%, transparent 100%)",
                    }}
                  />
                  {/* subtelny glow w hoverze */}
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded blur-md -z-10 opacity-0 hover:opacity-100 transition-opacity duration-200"
                    style={{
                      background:
                        "radial-gradient(60% 120% at 50% 100%, color-mix(in oklch, var(--primary,#e04875) 25%, transparent), transparent 70%)",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
