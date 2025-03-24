"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface IntroductionProps {
  onStart: () => void
}

export default function Introduction({ onStart }: IntroductionProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-8 pl-32">
      {" "}
      {/* Added pl-32 for left padding */}
      <motion.div
        className="text-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.h1 className="text-6xl font-bold text-white mb-6" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
          ¡Hola! Soy María Riojas
        </motion.h1>

        <motion.p
          className="text-2xl text-white/90 max-w-2xl mx-auto"
          style={{ textShadow: "0 2px 5px rgba(0,0,0,0.5)" }}
        >
          Una profesional multifacética con experiencia en Cloud Architecture, Ciencias Políticas y Servicios de
          Emergencia
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <Button
            onClick={onStart}
            className="bg-white/20 hover:bg-white/30 text-white text-lg px-8 py-6 rounded-full backdrop-blur-sm"
          >
            Descubre mi trayectoria
            <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

