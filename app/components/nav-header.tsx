"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Home, Mail, Cloud, Code, Flame, BookOpen } from "lucide-react"
import { useState } from "react"
import ContactDialog from "./contact-dialog"

interface NavHeaderProps {
  currentSection: string
  onSectionChange: (section: string) => void
}

export default function NavHeader({ currentSection, onSectionChange }: NavHeaderProps) {
  const [showContact, setShowContact] = useState(false)

  return (
    <motion.header
      className="fixed left-0 top-20 -translate-y-1/2 z-50 w-32 flex items-center justify-center"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="flex flex-col gap-4 p-3 rounded-full backdrop-blur-xl bg-white/10 border border-white/20">
        <Button
          variant="ghost"
          className={`rounded-full p-3 ${
            currentSection === "intro" ? "bg-white/20 text-white" : "text-white/60 hover:text-white hover:bg-white/10"
          }`}
          onClick={() => onSectionChange("intro")}
        >
          <Home className="w-6 h-6" />
          <span className="sr-only">Home</span>
        </Button>

        <div className="h-px w-6 mx-auto bg-white/20" />

        <Button
          variant="ghost"
          className={`rounded-full p-3 ${
            currentSection === "cloud" ? "bg-white/20 text-white" : "text-white/60 hover:text-white hover:bg-white/10"
          }`}
          onClick={() => onSectionChange("cloud")}
        >
          <Cloud className="w-6 h-6" />
          <span className="sr-only">Cloud Architecture</span>
        </Button>

        <Button
          variant="ghost"
          className={`rounded-full p-3 ${
            currentSection === "politics"
              ? "bg-white/20 text-white"
              : "text-white/60 hover:text-white hover:bg-white/10"
          }`}
          onClick={() => onSectionChange("politics")}
        >
          <Code className="w-6 h-6" />
          <span className="sr-only">Political Science</span>
        </Button>

        <Button
          variant="ghost"
          className={`rounded-full p-3 ${
            currentSection === "firefighter"
              ? "bg-white/20 text-white"
              : "text-white/60 hover:text-white hover:bg-white/10"
          }`}
          onClick={() => onSectionChange("firefighter")}
        >
          <Flame className="w-6 h-6" />
          <span className="sr-only">Firefighter</span>
        </Button>

        <div className="h-px w-6 mx-auto bg-white/20" />

        <Button
          variant="ghost"
          className={`rounded-full p-3 ${
            currentSection === "blog" ? "bg-white/20 text-white" : "text-white/60 hover:text-white hover:bg-white/10"
          }`}
          onClick={() => onSectionChange("blog")}
        >
          <BookOpen className="w-6 h-6" />
          <span className="sr-only">Blog</span>
        </Button>

        <div className="h-px w-6 mx-auto bg-white/20" />

        <Button
          variant="ghost"
          className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-3"
          onClick={() => setShowContact(true)}
        >
          <Mail className="w-6 h-6" />
          <span className="sr-only">Contact</span>
        </Button>
      </nav>

      <ContactDialog open={showContact} onOpenChange={setShowContact} />
    </motion.header>
  )
}

