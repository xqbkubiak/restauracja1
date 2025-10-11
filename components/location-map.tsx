"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export function LocationMap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="location" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-semibold tracking-wider text-primary uppercase border border-primary/30 px-4 py-2 rounded-full bg-primary/5">
              Lokalizacja
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">Gdzie jesteśmy?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Poniżej znajdziesz mapę, która ułatwi ci znalezienie restauracji. Możesz również nacisnąć przycisk "Odwiedź
            nas!", który przekieruje Cię do Google Maps
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/50 bg-card/50 backdrop-blur-sm"
        >
          <div className="aspect-[16/9] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.8234567890123!2d15.5234567!3d52.8765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDUyJzM1LjYiTiAxNcKwMzEnMjQuNCJF!5e0!3m2!1spl!2spl!4v1234567890123!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%] contrast-110"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute top-6 right-6"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30"
              asChild
            >
              <a
                href="https://www.google.com/maps/dir//Ludowa+9,+66-500+Strzelce+Krajeńskie"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                Odwiedź nas!
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bottom-6 left-6 bg-card/95 backdrop-blur-md rounded-xl p-6 shadow-xl border border-border/50 max-w-sm"
          >
            <h3 className="font-bold text-xl mb-2 text-foreground">Na Ludowej</h3>
            <p className="text-muted-foreground mb-1">Ludowa 9, 66-500 Strzelce Krajeńskie</p>
            <div className="flex items-center gap-2 text-primary">
              <span className="text-2xl">★</span>
              <span className="font-semibold">4.5</span>
              <span className="text-muted-foreground text-sm">(438 opinii)</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
