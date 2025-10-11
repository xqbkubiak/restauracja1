"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Anna Kowalska",
    role: "Stały Gość",
    content:
      "Najlepsza polska kuchnia w mieście! Pierogi ruskie przypominają mi smaki z dzieciństwa. Atmosfera jest ciepła i przytulna.",
    rating: 5,
    image: "/polish-woman-smiling.jpg",
  },
  {
    name: "Piotr Nowak",
    role: "Miłośnik Tradycji",
    content:
      "Autentyczne smaki, świeże składniki i profesjonalna obsługa. Żurek staropolski to prawdziwe arcydzieło kulinarnej sztuki!",
    rating: 5,
    image: "/polish-man-smiling.jpg",
  },
  {
    name: "Maria Wiśniewska",
    role: "Entuzjastka Kuchni",
    content:
      "Restauracja Na Ludowej to miejsce, do którego wracam regularnie. Każde danie jest przygotowane z pasją i dbałością o szczegóły.",
    rating: 5,
    image: "/elegant-woman-smiling.png",
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
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
              Co Mówią Nasi Goście
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">Opinie Klientów</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Poznaj doświadczenia naszych gości i przekonaj się, dlaczego wracają do nas regularnie
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="p-8 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 h-full group">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground/90 leading-relaxed mb-8 text-pretty">{testimonial.content}</p>

                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-primary/10 flex-shrink-0">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
