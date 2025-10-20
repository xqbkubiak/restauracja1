"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const dishes = [
  {
    name: "Schabowy Po Strzelecku",
    description: "w towarzystwie jajka sadzonego, świeżego szczypiorku, gotowanych ziemniaków i chrupiącej surówki",
    image: "/schabowypostrzelecku.jpg",
  },
  {
    name: "Pierś grillowana",
    description: "z roztopioną mozzarellą i świeżym pomidorem, podana z chrupiącymi frytkami i kolorowym mixem sezonowych warzyw.",
    image: "/piersgrillowana.jpg",
  },
  {
    name: "Krem z pomidorów",
    description: "Z mozzarellą, śmietaną i bazylią.",
    image: "/kremzpomidorow.jpg",
  },
  {
    name: "Placki Ziemniaczane",
    description: "Z kwaśną śmietaną.",
    image: "/plackiziemniaczane.jpg",
  },
  {
    name: "Sernik",
    description: "Klasyczny sernik",
    image: "/traditional-polish-cheesecake-sernik-with-raisins.jpg",
  },
  {
    name: "Gołąbki",
    description: "W sosie pomidorowym",
    image: "/polish-golabki-cabbage-rolls-in-tomato-sauce.jpg",
  },
]

export function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="gallery" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-40 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="text-primary text-sm font-bold tracking-wider uppercase border border-primary/30 px-4 py-2 rounded-full bg-primary/5">
              Nasze Specjalności
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">Galeria Dań</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Każde danie to dzieło sztuki kulinarnej, przygotowane z najlepszych składników
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                  {dish.name}
                </h3>
                <p className="text-sm text-muted-foreground">{dish.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
