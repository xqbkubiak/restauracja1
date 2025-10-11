"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

interface MenuItemProps {
  name: string
  description: string
  price: string
  index: number
}

export function MenuItem({ name, description, price, index }: MenuItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
        <div className="flex justify-between items-start gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>
          <div className="text-2xl font-bold text-primary whitespace-nowrap">{price}</div>
        </div>
      </Card>
    </motion.div>
  )
}
