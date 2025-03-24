"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

interface BackgroundPatternProps {
  colors: {
    from: string
    via: string
    to: string
  }
}

export default function BackgroundPattern({ colors }: BackgroundPatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Draw patterns
    const drawPatterns = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Convert hex to rgba for transparency
      const hexToRgba = (hex: string, alpha: number) => {
        const r = Number.parseInt(hex.slice(1, 3), 16)
        const g = Number.parseInt(hex.slice(3, 5), 16)
        const b = Number.parseInt(hex.slice(5, 7), 16)
        return `rgba(${r}, ${g}, ${b}, ${alpha})`
      }

      // Draw circles
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const radius = Math.random() * 100 + 50

        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fillStyle = hexToRgba([colors.from, colors.via, colors.to][Math.floor(Math.random() * 3)], 0.05)
        ctx.fill()
      }

      // Draw triangles
      for (let i = 0; i < 30; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 60 + 30

        ctx.beginPath()
        ctx.moveTo(x, y - size / 2)
        ctx.lineTo(x - size / 2, y + size / 2)
        ctx.lineTo(x + size / 2, y + size / 2)
        ctx.closePath()
        ctx.fillStyle = hexToRgba([colors.from, colors.via, colors.to][Math.floor(Math.random() * 3)], 0.05)
        ctx.fill()
      }

      // Draw rectangles
      for (let i = 0; i < 40; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const width = Math.random() * 80 + 40
        const height = Math.random() * 80 + 40

        ctx.beginPath()
        ctx.rect(x - width / 2, y - height / 2, width, height)
        ctx.fillStyle = hexToRgba([colors.from, colors.via, colors.to][Math.floor(Math.random() * 3)], 0.05)
        ctx.fill()
      }
    }

    // Initial draw
    drawPatterns()

    // Redraw on color changes
    const intervalId = setInterval(drawPatterns, 5000)

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      clearInterval(intervalId)
    }
  }, [colors])

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}

