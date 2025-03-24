"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, GraduationCap, LineChart, Users, Globe2, Library } from "lucide-react"
import Image from "next/image"

export default function PoliticsSection() {
  return (
    <div className="min-h-screen w-full p-10 pb-20 pl-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
        >
          Ciencias Políticas
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Featured Research Image */}
          <Card className="md:col-span-3 backdrop-blur-xl bg-white/10 border-white/20 p-6 overflow-hidden">
            <h3 className="text-2xl font-semibold text-white mb-4">Investigación Destacada</h3>
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=1200"
                alt="Featured political research"
                fill
                className="object-cover"
              />
            </div>
          </Card>

          {/* Research Areas */}
          <Card className="md:col-span-2 row-span-2 backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Áreas de Investigación</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-red-400" />
                  <span className="text-white">Relaciones Internacionales</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-red-400" />
                  <span className="text-white">Política Pública</span>
                </div>
                <div className="flex items-center gap-2">
                  <LineChart className="w-5 h-5 text-red-400" />
                  <span className="text-white">Análisis de Políticas</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-red-400" />
                  <span className="text-white">Teoría Política</span>
                </div>
                <div className="flex items-center gap-2">
                  <Library className="w-5 h-5 text-red-400" />
                  <span className="text-white">Gobernanza</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-red-400" />
                  <span className="text-white">Educación Política</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Research Gallery */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Galería de Investigación</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Political research 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Political research 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Political research 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Political research 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Card>

          {/* Publications */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Publicaciones</h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-red-500/20 text-red-200">Política Digital</Badge>
              <Badge className="bg-red-500/20 text-red-200">Democracia</Badge>
              <Badge className="bg-red-500/20 text-red-200">Gobernanza</Badge>
            </div>
          </Card>

          {/* Academic Timeline */}
          <Card className="md:col-span-2 backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Trayectoria Académica</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-red-400/50 pl-4">
                <h4 className="text-white font-medium">Investigadora Principal</h4>
                <p className="text-white/60 text-sm">2019 - Presente</p>
              </div>
              <div className="border-l-2 border-red-400/50 pl-4">
                <h4 className="text-white font-medium">Analista Política</h4>
                <p className="text-white/60 text-sm">2017 - 2019</p>
              </div>
            </div>
          </Card>

          {/* Contact */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Contacto Académico</h3>
            <div className="space-y-2">
              <Button variant="secondary" className="w-full bg-white/20 text-white hover:bg-white/30">
                ResearchGate
              </Button>
              <Button variant="secondary" className="w-full bg-white/20 text-white hover:bg-white/30">
                Academia.edu
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

