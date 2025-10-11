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
        {/* nieco mniejszy pasek vs poprzednio */}
        <div className="flex items-center justify-between h-[84px] md:h-[112px]">
          {/* === LOGO (zmniejszone) === */}
          <Link href="#hero" aria-label="Na Ludowej — strona główna" className="flex items-center">
            <div
              className="
                overflow-hidden grid place-items-center rounded-md
                w-[160px] h-[74px]          /* mobile */
                md:w-[220px] md:h-[100px]    /* desktop ~220x100 */
              "
              style={{ border: "1px solid var(--border)" }}
            >
              {hasLogo ? (
                <img
                  src="/logo.png"                 // wrzuć swój plik do /public/logo.svg
                  alt="Restauracja Na Ludowej — logo"
                  className="w-full h-full object-contain"
                  width={220}
                  height={100}
                  onError={() => setHasLogo(false)}
                />
              ) : (
                <span className="font-serif" style={{ color: "var(--primary)", fontSize: "1.05rem" }}>
                  Na&nbsp;Ludowej
                </span>
              )}
            </div>
          </Link>

          {/* === NAV (desktop) === */}
          <nav className="hidden md:flex items-center gap-10">
            <button
              onClick={() => scrollTo("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              O Nas
            </button>
            <button
              onClick={() => scrollTo("menu")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Menu
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Kontakt
            </button>

            {/* CTA -> telefon */}
            <a
              href="tel:+48123456789" /* ← PODMIEŃ NA WŁAŚCIWY NUMER */
              className="inline-flex items-center justify-center h-11 px-5 rounded-xl font-medium transition-all"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)",
              }}
              aria-label="Zadzwoń do nas"
            >
              Zadzwoń do nas
            </a>
          </nav>

          {/* === MENU (mobile) === */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* NAV mobile list */}
        {isMenuOpen && (
          <nav
            className="md:hidden overflow-hidden"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <div className="flex flex-col gap-4 py-5">
              <button
                onClick={() => scrollTo("about")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-1.5"
              >
                O Nas
              </button>
              <button
                onClick={() => scrollTo("menu")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-1.5"
              >
                Menu
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-1.5"
              >
                Kontakt
              </button>
              <a
                href="tel:+48123456789" /* ← PODMIEŃ NA WŁAŚCIWY NUMER */
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl font-medium"
                style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
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
