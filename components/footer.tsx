"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const footerSections = [
    {
      title: "Kontakt",
      content: (
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
            <div>
              <p>ul. Ludowa 15</p>
              <p>00-123 Warszawa</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
            <p>+48 22 123 45 67</p>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 flex-shrink-0 text-primary" />
            <p>kontakt@naludowej.pl</p>
          </div>
        </div>
      ),
    },
    {
      title: "Godziny Otwarcia",
      content: (
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
            <div>
              <p className="font-semibold">Poniedziałek - Piątek</p>
              <p className="text-muted-foreground">12:00 - 22:00</p>
            </div>
          </div>
          <div className="ml-8">
            <p className="font-semibold">Sobota - Niedziela</p>
            <p className="text-muted-foreground">11:00 - 23:00</p>
          </div>
        </div>
      ),
    },
    {
      title: "Menu",
      content: (
        <ul className="space-y-2">
          {["Przystawki", "Zupy", "Dania Główne", "Desery", "Napoje"].map((item) => (
            <li key={item}>
              <button className="hover:text-primary transition-colors text-left">{item}</button>
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "O Restauracji",
      content: (
        <p className="leading-relaxed text-muted-foreground">
          Restauracja Na Ludowej to miejsce, gdzie tradycja spotyka się z nowoczesnością. Zapraszamy na niezapomnianą
          kulinarną podróż po smakach Polski.
        </p>
      ),
    },
  ]

  return (
    <footer id="contact" className="bg-gradient-to-b from-background to-secondary/30 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-serif font-bold mb-6 text-foreground">{section.title}</h3>
              {section.content}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-border/50 pt-8 text-center space-y-3"
        >
          <p className="text-muted-foreground">© 2025 Restauracja Na Ludowej. Wszystkie prawa zastrzeżone.</p>
          <p className="text-lg font-semibold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Stworzone przez bkubiak.dev
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
