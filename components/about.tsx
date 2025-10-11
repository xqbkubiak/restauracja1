"use client"

import { UtensilsCrossed, Heart, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: UtensilsCrossed,
      title: "Tradycyjne Receptury",
      description: "Przepisy przekazywane z pokolenia na pokolenie, zachowujące autentyczny smak polskiej kuchni",
    },
    {
      icon: Heart,
      title: "Świeże Składniki",
      description: "Codziennie wybieramy najlepsze lokalne produkty, aby zapewnić najwyższą jakość naszych dań",
    },
    {
      icon: Users,
      title: "Rodzinna Atmosfera",
      description: "Ciepła, gościnna atmosfera sprawia, że każdy gość czuje się jak w domu",
    },
  ]

  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Witamy w Naszej Restauracji
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Od ponad 20 lat serwujemy autentyczne polskie potrawy przygotowane według tradycyjnych receptur. Każde danie
            to hołd dla naszego dziedzictwa kulinarnego, przygotowane z pasją i najświeższych składników.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
