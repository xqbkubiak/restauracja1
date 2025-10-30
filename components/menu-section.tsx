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
        name: "Informacje",
        description: "Nie mamy stałej karty śniadań – nasi kelnerzy podadzą Wam dzisiejsze, świeże propozycje.",
      },
    ],
  },
  {
    id: "przystawki",
    name: "Przystawki",
    items: [
      {
        name: "Łosoś wędzony",
        description: "Placuszki z łososiem i sosem miodowo-musztardowym.",
        price: "18 zł",
      },
      {
        name: "Grzanki czosnkowe",
        description: "Złociste grzanki z czosnkiem i oliwą z ziołami.",
        price: "16 zł",
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
        price: "13 zł",
      },
      {
        name: "Krem z pomidorów",
        description: "Z mozzarellą, śmietaną i bazylią.",
        price: "20 zł",
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
        price: "22 zł",
      },
      {
        name: "Placki z sosem grzybowym",
        description: "Polane aromatycznym sosem grzybowym.",
        price: "26 zł",
      },
      {
        name: "Placki z kurkami",
        description: "Z kurkami i pietruszką.",
        price: "28 zł",
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
    name: "Dania z drobiu",
    items: [
      {
        name: "Filet z kurczaka",
        description: "Soczysty filet z kurczaka w złocistej panierce, podawany z domową surówką i ziemniakami.",
        price: "35 zł",
      },
      {
        name: "De Volaille",
        description: "Delikatny kotlet de volaille w złocistej panierce, skropiony aromatycznym maślem z pietruszką, podany z chrupiącymi frytkami i świeżą surówką",
        price: "38 zł",
      },
      {
        name: "Grillowana pierś",
        description: "Soczysta pierś z kurczaka z roztopioną mozzarellą i świeżym pomidorem, podana z chrupiącymi frytkami i kolorowym mixem sezonowych warzyw.",
        price: "39 zł",
      },
      {
        name: "Grillowana pierś",
        description: "Delikatna, grillowana pierś kurczaka w towarzystwie młodego szpinaku, kremowego sosu śmietanowego i aromatycznych, pieczonych cząstek ziemniaków.",
        price: "39 zł",
      },
      {
        name: "Kaczka z kluskami śląskimi",
        description: "Soczysta, pieczona kaczka o złocistej, chrupiącej skórce, doprawiona aromatycznymi ziołami i pieczona powoli, by zachować jej delikatność i głęboki smak.",
        price: "38 zł",
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
        price: "35 zł",
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
        name: "Polędwica wieprzowa",
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
        price: "30 zł",
      },
      {
        name: "Placek po węgiersku (duży)",
        description: "Lekko pikantny gulasz wołowy z papryką, pieczarkami i ogórkiem, podany w chrupiącym placku z dodatkiem kwaśnej śmietany.",
        price: "40 zł",
      },
    ],
  },
  {
    id: "ryby",
    name: "Ryby",
    items: [
      {
        name: "Sandacz z grilla",
        description: "Delikatny, grillowany filet z sandacza o złocistej skórce, podawany z chrupiącymi frytkami i świeżym mixem sałat. Lekka, a zarazem sycąca propozycja w klasycznym wydaniu.",
        price: "59 zł",
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
        price: "36 zł",
      },
      {
        name: "Grecka",
        description: "Tradycyjna sałatka grecka z serem typu feta, czerwoną cebulą, oliwkami, pomidorem, ogórkiem i mieszanką świeżych sałat, podawana z aromatycznym sosem winegret.",
        price: "34 zł",
      },
      {
        name: "Sałatka z tuńczykiem",
        description: "Lekka, a jednocześnie sycąca kompozycja świeżych warzyw, delikatnego tuńczyka i jajka na twardo.",
        price: "36 zł",
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
        price: "28 zł",
      },
      {
        name: "Pierogi mięsne",
        description: "Ręcznie lepione pierogi z nadzieniem z pieczonej łopatki wieprzowej i kurczaka, podane z okrasą z cebuli i świeżą pietruszką.",
        price: "30 zł",
      },
    ],
  },
  {
    id: "makarony",
    name: "Makarony",
    items: [
      {
        name: "Makaron penne",
        description: "Al dente penne z grillowanym kurczakiem, kremowym sosem grzybowym i świeżą pietruszką.",
        price: "38 zł",
      },
      {
        name: "Makaron Bolognese",
        description: "Tradycyjny włoski makaron z aromatycznym sosem z mielonego mięsa, pomidorów i ziół, posypany świeżym parmezanem.",
        price: "36 zł",
      },
    ],
  },
  {
    id: "dladzieci",
    name: "Dla Dzieci",
    items: [
      {
        name: "Stripsy z kurczaka (3szt)",
        description: "Chrupiące panierowane filety z kurczaka podane z frytkami i świeżą surówką.",
        price: "25 zł",
      },
      {
        name: "Paluszki rybne (3szt)",
        description: "Chrupiące paluszki rybne podane z frytkami i świeżą surówką.",
        price: "24 zł",
      },
      {
        name: "Pierogi truskawkowe (8szt)",
        description: "Letnie pierogi z sezonowymi truskawkami, podane z cukrem pudrem i śmietaną.",
        price: "24 zł",
      },
    ],
  },
  {
    id: "desery",
    name: "Desery",
    items: [
      {
        name: "Ciasto dnia",
        description: "Zapytaj kelnera o dzisiejszy sezonowy wypiek.",
        price: "18 zł",
      },
      {
        name: "Deser Lodowy",
        description: "3 gałki lodów (wybór smaków), bita śmietana, sos czekoladowy i sezonowe dodatki.",
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
    <section id="menu" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 lg:mb-6">
            Nasze Menu
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
            Odkryj bogactwo smaków polskiej kuchni. Każde danie przygotowane z pasją i dbałością o szczegóły.
          </p>
        </motion.div>

        {/* Category Tabs - Improved responsive design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 lg:mb-16"
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-6xl mx-auto">
            {menuCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0"
              >
                <Button
                  variant={activeCategory === category.id ? "default" : "outline"}
                  size="sm"
                  className={`
                    text-xs md:text-sm lg:text-base px-3 py-2 h-auto min-h-0
                    whitespace-nowrap transition-all duration-200
                    ${
                      activeCategory === category.id
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 font-semibold"
                        : "bg-card/50 backdrop-blur-sm text-foreground border-border hover:bg-card hover:border-primary/50 hover:text-primary font-medium"
                    }
                  `}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </Button>
              </motion.div>
            ))}
          </div>
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
              className="grid gap-4 md:gap-6 px-2 sm:px-0"
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