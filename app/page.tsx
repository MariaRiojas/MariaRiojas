"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Introduction from "./components/introduction"
import CloudSection from "./components/cloud-section"
import PoliticsSection from "./components/politics-section"
import FirefighterSection from "./components/firefighter-section"
import NavHeader from "./components/nav-header"
import Footer from "./components/footer"
import LoadingSpinner from "./components/loading-spinner"
import BlogSection from "./components/blog-section"

// Gradient combinations from the provided image
const colors = {
  intro: {
    from: "#007CBE",
    via: "#7CDFAE",
    to: "#FFF7AE",
  },
  cloud: {
    from: "#02C3BD",
    via: "#2E6CC4",
    to: "#4E148C",
  },
  politics: {
    from: "#E57A44",
    via: "#8B344D",
    to: "#251351",
  },
  firefighter: {
    from: "#FFC145",
    via: "#F58A8A",
    to: "#EC368D",
  },
  blog: {
    from: "#F1FEC6",
    via: "#A882DD",
    to: "#1FEC6",
  },
}

export default function Page() {
  const [activeSection, setActiveSection] = useState<string>("intro")
  const [gradientColors, setGradientColors] = useState(colors.intro)
  const [isLoading, setIsLoading] = useState(true)
  const [isChangingSection, setIsChangingSection] = useState(false)

  useEffect(() => {
    setGradientColors(colors[activeSection as keyof typeof colors])
  }, [activeSection])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleSectionChange = (section: string) => {
    setIsChangingSection(true)
    setActiveSection(section)
    setTimeout(() => {
      setIsChangingSection(false)
    }, 800)
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden antialiased bg-[#1C1B33]">
      <AnimatePresence>{(isLoading || isChangingSection) && <LoadingSpinner />}</AnimatePresence>

      {/* Animated gradient background */}
      <motion.div
        className="fixed inset-0 z-0 animated-gradient"
        animate={{
          background: `
            radial-gradient(circle at 0% 0%, ${gradientColors.from} 0%, transparent 50%),
            radial-gradient(circle at 100% 0%, ${gradientColors.via} 0%, transparent 50%),
            radial-gradient(circle at 50% 100%, ${gradientColors.to} 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, ${gradientColors.from} 0%, transparent 50%)
          `,
        }}
        transition={{ duration: 1.5 }}
      >
        {/* Wave overlay */}
        <div
          className="wave-overlay"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, 
                ${gradientColors.from}20 0%, 
                ${gradientColors.via}20 25%, 
                ${gradientColors.to}20 50%, 
                transparent 75%
              )
            `,
          }}
        />
      </motion.div>

      {/* Navigation */}
      <NavHeader currentSection={activeSection} onSectionChange={handleSectionChange} />

      {/* Content */}
      <main className="relative z-10 min-h-screen pl-32">
        <AnimatePresence mode="wait">
          {activeSection === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Introduction onStart={() => handleSectionChange("cloud")} />
            </motion.div>
          )}
          {activeSection === "cloud" && (
            <motion.div
              key="cloud"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CloudSection />
            </motion.div>
          )}
          {activeSection === "politics" && (
            <motion.div
              key="politics"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <PoliticsSection />
            </motion.div>
          )}
          {activeSection === "firefighter" && (
            <motion.div
              key="firefighter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FirefighterSection />
            </motion.div>
          )}
          {activeSection === "blog" && (
            <motion.div
              key="blog"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BlogSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

