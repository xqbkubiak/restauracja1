// components/video-hero.tsx
"use client"

import { useRef, useEffect } from "react"

export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Auto-play video
    if (videoRef.current) {
      videoRef.current.play().catch(console.error)
    }
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="/api/placeholder/1920/1080" // placeholder jeśli video się nie ładuje
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
        <source src="/videos/hero-background.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="mb-6 font-serif text-5xl font-bold md:text-7xl lg:text-8xl">
          Restauracja
          <span className="block text-4xl md:text-6xl lg:text-7xl">Na Ludowej</span>
        </h1>
        <p className="mb-8 max-w-2xl text-xl md:text-2xl font-light">
          Autentyczne smaki polskiej kuchni w sercu miasta
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-[var(--primary)] px-8 py-4 font-semibold text-white transition-all hover:bg-[var(--primary)]/90 hover:scale-105">
            Rezerwuj Stół
          </button>
          <button className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all hover:bg-white hover:text-black hover:scale-105">
            Zobacz Menu
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="h-6 w-px bg-white"></div>
      </div>
    </div>
  )
}