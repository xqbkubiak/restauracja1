"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hasLogo, setHasLogo] = useState(true)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? "rgba(0,0,0,0.5)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled ? "1px solid var(--border)" : "transparent",
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-[84px] md:h-[112px]">
          {/* === LOGO === */}
          <Link href="#hero" aria-label="Na Ludowej — strona główna" className="flex items-center">
<div
  className="
    grid place-items-center
    w-[160px] h-[74px]
    md:w-[220px] md:h-[100px]
  "
>
              {hasLogo ? (
                <img
                  src="/logo.png"
                  alt="Restauracja Na Ludowej — logo"
                  className="w-full h-full object-contain"
                  width={220}
                  height={100}
                  onError={() => setHasLogo(false)}
                />
              ) : (
                <span
                  className="font-serif"
                  style={{ color: "var(--primary)", fontSize: "1.05rem" }}
                >
                  Na&nbsp;Ludowej
                </span>
              )}
            </div>
          </Link>

          {/* === NAV (desktop) === */}
          <nav className="hidden md:flex items-center gap-10">
            {[
              { id: "about", label: "O Nas" },
              { id: "menu", label: "Menu" },
              { id: "contact", label: "Kontakt" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="relative text-foreground font-medium transition-colors duration-300 cursor-pointer
                           hover:text-primary
                           after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
                           after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </button>
            ))}

            {/* CTA -> telefon */}
            <a
              href="tel:+48123456789" // ← podmień na właściwy numer
              className="inline-flex items-center justify-center h-11 px-5 rounded-xl font-medium transition-all hover:scale-[1.03]"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)",
              }}
              aria-label="Zadzwoń do nas"
            >
              Zadzwoń do nas
            </a>
          </nav>

          {/* === MENU (mobile toggle) === */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* === NAV (mobile list) === */}
        {isMenuOpen && (
          <nav
            className="md:hidden overflow-hidden"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <div className="flex flex-col gap-4 py-5">
              {[
                { id: "about", label: "O Nas" },
                { id: "menu", label: "Menu" },
                { id: "contact", label: "Kontakt" },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium py-1.5"
                >
                  {label}
                </button>
              ))}

              <a
                href="tel:+48123456789"
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl font-medium"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
                aria-label="Zadzwoń do nas"
              >
                Zadzwoń do nas
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
