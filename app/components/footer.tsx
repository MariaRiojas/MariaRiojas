"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <motion.footer
      className="fixed bottom-0 left-0 right-0 z-50 p-4 backdrop-blur-md bg-black/20"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <p className="text-white/60 text-sm">© 2025 María Riojas. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10">
            <Github className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10">
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10">
            <Twitter className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </motion.footer>
  )
}

