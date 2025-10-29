"use client"

import { Header } from "@/components/header"
import { MenuSection } from "@/components/menu-section"
import { About } from "@/components/about"
import { Gallery } from "@/components/gallery"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const PLACE_NAME = "Restauracja Na Ludowej"
const PLACE_ADDR = "Ludowa 9, 66-500 Strzelce Krajeńskie"
const MAPS_PLACE_URL =
  "https://www.google.com/maps/search/?api=1&query=Restauracja+Na+Ludowej+Ludowa+9+66-500+Strzelce+Kraje%C5%84skie"
const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Ludowa+9,+66-500+Strzelce+Kraje%C5%84skie"

function MapWithOpinie() {
  return (
    <motion.section 
      id="contact" 
      className="relative max-w-6xl mx-auto px-4 md:px-6 py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <motion.div 
        className="relative overflow-hidden rounded-2xl"
        style={{ border: "1px solid var(--border)" }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
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
        <motion.div 
          className="absolute left-4 bottom-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="rounded-2xl px-5 py-4 shadow-lg"
            style={{
              backgroundColor: "var(--card)",
              color: "var(--foreground)",
              border: "1px solid var(--border)",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="font-serif text-lg mb-1">{PLACE_NAME}</div>
            <div style={{ color: "var(--muted-foreground)" }} className="text-sm">
              {PLACE_ADDR}
            </div>

            <div className="mt-3 flex items-center gap-2 text-sm">
              <motion.span 
                aria-hidden
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >★</motion.span>
              <span className="font-semibold">4.5</span>
              <span style={{ color: "var(--muted-foreground)" }}>(438 opinii)</span>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <motion.a
                href={MAPS_PLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-9 px-4 rounded-xl"
                style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Oceń nas
              </motion.a>
              <motion.a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-9 px-4 rounded-xl border transition hover:bg-white/10"
                style={{ color: "var(--foreground)", borderColor: "var(--border)" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Nawiguj
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  // Animacje
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* ===== HERO ===== */}
      <motion.section 
        ref={heroRef}
        id="hero" 
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{ opacity, scale }}
      >
        <motion.video
          className="absolute inset-0 w-full h-full object-cover opacity-70 blur-[1px] pointer-events-none"
          src="/2894881-hd_1920_1080_24fps.mp4"
          autoPlay
          muted
          loop
          playsInline
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 45%, rgba(0,0,0,.08) 0%, rgba(0,0,0,.28) 100%)",
          }}
        />

        <motion.div 
          className="relative z-10 px-6 max-w-4xl mx-auto text-center"
          style={{ y }}
        >
          <motion.h1
            className="font-serif text-white leading-tight text-5xl md:text-7xl mb-4"
            style={{ textShadow: "0 2px 18px rgba(0,0,0,.35)" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Restauracja <motion.span 
              className="text-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >Na Ludowej</motion.span>
          </motion.h1>
          
          <motion.p 
            style={{ color: "#e0e0e0" }} 
            className="text-lg md:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Zapewniamy wyjątkowe doznania kulinarne, które na długo pozostaną w Twojej pamięci.
          </motion.p>

{/* CTA */}
<motion.div 
  className="mt-8"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.9 }}
>
  <div className="mx-auto max-w-fit">
    <div className="flex items-center justify-center gap-4">
      <motion.a
        href="#menu"
        className="inline-flex items-center justify-center h-12 px-6 rounded-xl border hover:bg-white/10 transition"
        style={{ color: "#fff", borderColor: "rgba(255,255,255,.3)" }}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        Zobacz Menu
      </motion.a>
    </div>
  </div>
</motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ===== SEKCJE ===== */}
      <main>
        <About />
        <Gallery />

        <motion.section 
          id="menu" 
          className="scroll-mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <MenuSection />
        </motion.section>

        <MapWithOpinie />
      </main>

      {/* ===== STOPKA ===== */}
      <motion.footer 
        className="relative mt-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* miękki glow nad stopką */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-20 left-1/2 h-48 w-[84%] -translate-x-1/2 blur-3xl"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 0%, color-mix(in oklch, var(--primary, #a3133a) 28%, transparent) 0%, transparent 70%)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        
        <motion.div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, color-mix(in oklch, var(--border) 85%, white 15%), transparent)",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* === TŁO STOPKI === */}
        <div
          className="relative"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, color-mix(in oklch, var(--card, var(--background)) 88%, black 12%) 55%, color-mix(in oklch, var(--card, var(--background)) 78%, #7f1030 22%) 100%)",
          }}
        >
          <motion.div 
            className="mx-auto max-w-6xl px-4 py-10 text-sm text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              style={{ color: "var(--muted-foreground)" }}
              variants={itemVariants}
            >
              © {new Date().getFullYear()} Restauracja Na Ludowej. Wszelkie prawa zastrzeżone.
            </motion.div>

            {/* === Ikony społecznościowe === */}
            <motion.div 
              className="mt-5 flex justify-center gap-6"
              variants={itemVariants}
            >
              <motion.a
                href="https://www.facebook.com/restauracjanaludowej/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-colors duration-300"
                style={{
                  color: "color-mix(in oklch, var(--primary) 70%, white 30%)",
                }}
                whileHover={{ 
                  scale: 1.2,
                  y: -2,
                  color: "var(--primary)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.6c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4H15c-1.2 0-1.6.8-1.6 1.5v1.9H17l-.4 2.9h-2.2v7A10 10 0 0 0 22 12z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.facebook.com/restauracjanaludowej"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-colors duration-300"
                style={{
                  color: "color-mix(in oklch, var(--primary) 70%, white 30%)",
                }}
                whileHover={{ 
                  scale: 1.2,
                  y: -2,
                  color: "var(--primary)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2.2A2.8 2.8 0 1 1 12 16a2.8 2.8 0 0 1 0-5.8zM17.8 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </motion.a>
            </motion.div>

            {/* === PODPIS NA SAMYM DOLE === */}
            <motion.div 
              className="mt-8 inline-flex items-center justify-center gap-1.5 text-xs"
              variants={itemVariants}
            >
              <span style={{ color: "var(--foreground)" }}>Stworzone przez</span>
              <motion.a
                href="https://bkubiak.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold leading-none relative"
                style={{
                  background:
                    "linear-gradient(90deg, color-mix(in oklch, var(--primary,#e04875) 92%, black 8%), color-mix(in oklch, #e04875 88%, #a3133a 12%))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  textDecoration: "none",
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -1
                }}
                whileTap={{ scale: 0.95 }}
              >
                bkubiak.dev
                <motion.span
                  aria-hidden
                  className="absolute left-0 right-0 -bottom-0.5 h-[1.5px] opacity-80"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, color-mix(in oklch, var(--primary,#e04875) 70%, #000 30%) 15%, color-mix(in oklch, #e04875 70%, #a3133a 30%) 85%, transparent 100%)",
                  }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}