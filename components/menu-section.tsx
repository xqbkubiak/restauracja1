"use client"

import { useState, useRef } from "react"
import { MenuItem } from "@/components/menu-item"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"

const menuCategories = [
  {
    id: "appetizers",
    name: "Przystawki",
    items: [
      {
        name: "Śledź w Oleju",
        description: "Marynowany śledź z cebulą, podany z chlebem żytnim",
        price: "18 zł",
      },
      {
        name: "Tatar Wołowy",
        description: "Świeży tatar z wołowiny z kaparami, cebulą i żółtkiem",
        price: "32 zł",
      },
      {
        name: "Smalec Domowy",
        description: "Tradycyjny smalec ze skwarkami, ogórkiem kiszonym i chlebem",
        price: "16 zł",
      },
      {
        name: "Kaszanka z Cebulką",
        description: "Grillowana kaszanka z karmelizowaną cebulą",
        price: "22 zł",
      },
    ],
  },
  {
    id: "soups",
    name: "Zupy",
    items: [
      {
        name: "Żurek Staropolski",
        description: "Tradycyjny żurek na zakwasie z kiełbasą, jajkiem i chrzanem",
        price: "16 zł",
      },
      {
        name: "Barszcz Czerwony",
        description: "Klarowny barszcz z uszkami z grzybami",
        price: "14 zł",
      },
      {
        name: "Rosół z Kury",
        description: "Domowy rosół z makaronem i warzywami",
        price: "12 zł",
      },
      {
        name: "Flaki Wołowe",
        description: "Flaki wołowe w aromatycznym bulionie z warzywami",
        price: "18 zł",
      },
    ],
  },
  {
    id: "mains",
    name: "Dania Główne",
    items: [
      {
        name: "Pierogi Ruskie",
        description: "Pierogi z serem, ziemniakami i cebulką, podane ze śmietaną",
        price: "28 zł",
      },
      {
        name: "Schabowy z Kapustą",
        description: "Panierowany kotlet schabowy z kapustą zasmażaną i ziemniakami",
        price: "38 zł",
      },
      {
        name: "Gołąbki w Sosie Pomidorowym",
        description: "Gołąbki z mięsem i ryżem w sosie pomidorowym",
        price: "32 zł",
      },
      {
        name: "Bigos Staropolski",
        description: "Tradycyjny bigos z kapusty kiszonej i różnych rodzajów mięsa",
        price: "34 zł",
      },
      {
        name: "Kaczka Pieczona",
        description: "Kaczka pieczona z jabłkami, podana z kluskami śląskimi",
        price: "52 zł",
      },
      {
        name: "Zrazy Wołowe",
        description: "Zrazy zawijane z ogórkiem kiszonym, boczkiem i kaszą gryczaną",
        price: "42 zł",
      },
    ],
  },
  {
    id: "desserts",
    name: "Desery",
    items: [
      {
        name: "Sernik Tradycyjny",
        description: "Klasyczny sernik na kruchym spodzie z rodzynkami",
        price: "16 zł",
      },
      {
        name: "Szarlotka z Lodami",
        description: "Ciepła szarlotka z lodami waniliowymi i bitą śmietaną",
        price: "18 zł",
      },
      {
        name: "Makowiec",
        description: "Domowy makowiec z bakaliami",
        price: "14 zł",
      },
      {
        name: "Pączki",
        description: "Świeże pączki z nadzieniem różanym lub adwokatowym",
        price: "8 zł",
      },
    ],
  },
  {
    id: "drinks",
    name: "Napoje",
    items: [
      {
        name: "Kompot Domowy",
        description: "Kompot z owoców sezonowych",
        price: "8 zł",
      },
      {
        name: "Piwo Kraftowe",
        description: "Wybór polskich piw kraftowych",
        price: "14 zł",
      },
      {
        name: "Wódka Żytnia",
        description: "Tradycyjna polska wódka (50ml)",
        price: "12 zł",
      },
      {
        name: "Herbata / Kawa",
        description: "Herbata czarna lub kawa parzona",
        price: "10 zł",
      },
    ],
  },
]

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("appetizers")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const currentCategory = menuCategories.find((cat) => cat.id === activeCategory)

  return (
    <section id="menu" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">Nasze Menu</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Odkryj bogactwo smaków polskiej kuchni. Każde danie przygotowane z pasją i dbałością o szczegóły.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={activeCategory === category.id ? "default" : "outline"}
                size="lg"
                onClick={() => setActiveCategory(category.id)}
                className={
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                    : "bg-card/50 backdrop-blur-sm text-foreground border-border hover:bg-card hover:border-primary/50"
                }
              >
                {category.name}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Menu Items */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid gap-6"
            >
              {currentCategory?.items.map((item, index) => (
                <MenuItem
                  key={index}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
