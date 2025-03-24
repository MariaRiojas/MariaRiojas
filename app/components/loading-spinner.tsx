"use client"

import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="flex flex-col items-center gap-4"
      >
        <Loader2 className="h-12 w-12 animate-spin text-white" />
        <p className="text-white/80 text-lg">Cargando...</p>
      </motion.div>
    </div>
  )
}

