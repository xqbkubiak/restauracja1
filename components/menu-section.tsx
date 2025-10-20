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
    id: "placki",
    name: "Placki ziemniaczane",
    items: [
      {
        name: "Placki klasyczne",
        description: "Z kwaśną śmietaną.",
        price: "18 zł",
      },
      {
        name: "Placki z sosem grzybowym",
        description: "Polane aromatycznym sosem grzybowym.",
        price: "24 zł",
      },
      {
        name: "Placki z kurkami",
        description: "Z kurkami i pietruszką.",
        price: "26 zł",
      },
      {
        name: "Schab w plackach",
        description: "Schabowy w plackach z sosem grzybowym.",
        price: "42 zł",
      },
    ],
  },
  {
    id: "kurczak",
    name: "Kurczk",
    items: [
      {
        name: "Filet z kurczaka",
        description: "Grillowany filet z frytkami i surówką.",
        price: "34 zł",
      },
      {
        name: "De Volaille",
        description: "Delikatny kotlet de volaille w złocistej panierce, skropiony aromatycznym maślem z pietruszką, podany z chrupiącymi frytkami i świeżą surówką",
        price: "38 zł",
      },
      {
        name: "Pierś grillowana",
        description: "Soczysta pierś z kurczaka z roztopioną mozzarellą i świeżym pomidorem, podana z chrupiącymi frytkami i kolorowym mixem sezonowych warzyw.",
        price: "38 zł",
      },
      {
        name: "Pierś grillowana",
        description: "Delikatna, grillowana pierś kurczaka w towarzystwie młodego szpinaku, kremowego sosu śmietanowego i aromatycznych, pieczonych cząstek ziemniaków.",
        price: "38 zł",
      },
      {
        name: "Pierś grillowana",
        description: "Soczysta pierś kurczaka z chrupiącymi frytkami z batatów, świeżym mixem warzyw i orzeźwiającym sosem tzatziki.",
        price: "38 zł",
      },
      {
        name: "Kurczak w panco",
        description: "Chrupiący filet w panierce panco, ryż, świeże warzywa (marchew, ogórek, szpinak), sałatka wakame, sos sriracha-majo.",
        price: "40 zł",
},
    ],
  },
  {
    id: "wieprzowina",
    name: "Wieprzowina",
    items: [
      {
        name: "Tradycyjny kotlet schabowy",
        description: "Klasyka polskiej kuchni w najlepszym wydaniu – soczysty schabowy w złocistej panierce, podany z gotowanymi ziemniakami i świeżą surówką.",
        price: "36 zł",
      },
      {
        name: "Kotlet schabowy po strzelecku",
        description: "Złocisty schabowy w towarzystwie jajka sadzonego, świeżego szczypiorku, gotowanych ziemniaków i chrupiącej surówki.",
        price: "38 zł",
      },
      {
        name: "Polędwica wieprzowa",
        description: "Delikatna polędwica wieprzowa w towarzystwie aromatycznego sosu grzybowego, chrupiących placków rostee, świeżej pietruszki i lekkiej mieszanki warzyw z vinegree.",
        price: "39 zł",
      },
      {
        name: "Pierś wieprzowa",
        description: "Delikatna polędwica podana na młodych liściach szpinaku, z kremowym sosem śmietanowym, pieczonymi cząstkami ziemniaków i świeżymi warzywami z sosem vinegree.",
        price: "39 zł",
      },
    ],
  },
  {
    id: "wolowina",
    name: "Wołowina",
    items: [
      {
        name: "Placek po węgiersku (mały)",
        description: "Lekko pikantny gulasz wołowy z papryką, pieczarkami i ogórkiem, podany w chrupiącym placku z dodatkiem kwaśnej śmietany.",
        price: "26 zł",
      },
      {
        name: "Placek po węgiersku (duży)",
        description: "Lekko pikantny gulasz wołowy z papryką, pieczarkami i ogórkiem, podany w chrupiącym placku z dodatkiem kwaśnej śmietany.",
        price: "38 zł",
      },
      {
        name: "Burger Wołowy Szefa",
        description: "200g soczystej wołowiny, chrupiący boczek, jajko sadzone, świeży pomidor, ogórek konserwowy i słodka konfitowana cebula w bułce maślanej.",
        price: "40 zł",
       },
    ],
  },
  {
    id: "salatki",
    name: "Sałatki",
    items: [
      {
        name: "Cezar",
        description: "Klasyczna kompozycja świeżych sałat, pomidora, ogórka, grillowanego kurczaka, parmezanu i chrupiących grzanek, polana sosem czosnkowym.",
        price: "34 zł",
      },
      {
        name: "Grecka",
        description: "Tradycyjna kompozycja świeżych warzyw: mix sałat, pomidor, ogórek, oliwki Kalamata, ser sałatkowy (feta) i czerwona cebula, skropiona lekkim sosem vinegret, podana z chrupiącą grzanką.",
        price: "32 zł",
      },
    ],
  },
  {
    id: "pierogi",
    name: "Pierogi",
    items: [
      {
        name: "Pierogi ruskie",
        description: "Klasyczne pierogi z nadzieniem z ziemniaków i twarogu, podane z chrupiącą smażoną cebulką i świeżym szczypiorkiem.",
        price: "24 zł",
      },
      {
        name: "Pierogi mięsne",
        description: "Ręcznie lepione pierogi z nadzieniem z pieczonej łopatki wieprzowej i kurczaka, podane z okrasą z cebuli i świeżą pietruszką.",
        price: "24 zł",
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
