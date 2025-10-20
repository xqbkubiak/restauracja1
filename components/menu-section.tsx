"use client"

import { useState, useRef } from "react"
import { MenuItem } from "@/components/menu-item"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"

const menuCategories = [
  {
    id: "sniadania",
    name: "Śniadania",
    items: [
      {
        name: "Jajecznica",
        description: "Puszysta jajecznica na złocistym maśle, chrupiące pieczywo, sałatka z sosem vinegre",
        price: "20 zł",
      },
      {
        name: "Tosty (2szt)",
        description: "Chrupiące tosty z roztopionym serem, szynką i świeżą sałatką w sosie vinegre.",
        price: "20 zł",
      },
      {
        name: "Tosty z burratą",
        description: "Chrupiące tosty z burratą, pomidorem i pesto bazyliowym.",
        price: "24 zł",
      },
    ],
  },
  {
    id: "przystawki",
    name: "Przystawki",
    items: [
      {
        name: "Łosoś",
        description: "Placuszki z łososiem i sosem miodowo-musztardowym.",
        price: "18 zł",
      },
      {
        name: "Grzanki czosnkowe",
        description: "Złociste grzanki z czosnkiem i oliwą z ziołami.",
        price: "16 zł",
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
    id: "zupy",
    name: "Zupy",
    items: [
      {
        name: "Rosół wiejski",
        description: "Tradycyjny rosół z mięsem i warzywami.",
        price: "12 zł",
      },
      {
        name: "Krem z pomidorów",
        description: "Z mozzarellą, śmietaną i bazylią.",
        price: "18 zł",
      },
      {
        name: "Krem sezonowy",
        description: "Z sezonowych warzyw z grzanką czosnkową.",
        price: "20 zł",
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
  const [activeCategory, setActiveCategory] = useState("sniadania")
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
