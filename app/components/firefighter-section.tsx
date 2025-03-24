"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Flame, ShieldAlert, Heart, Truck, Phone, Users } from "lucide-react"
import Image from "next/image"

export default function FirefighterSection() {
  return (
    <div className="min-h-screen w-full p-10 pb-20 pl-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
        >
          Bombera Profesional
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Featured Image */}
          <Card className="md:col-span-3 backdrop-blur-xl bg-white/10 border-white/20 p-6 overflow-hidden">
            <h3 className="text-2xl font-semibold text-white mb-4">Destacado</h3>
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=1200"
                alt="Featured firefighting moment"
                fill
                className="object-cover"
              />
            </div>
          </Card>

          {/* Main Skills Card */}
          <Card className="md:col-span-2 row-span-2 backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Especialidades</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-400" />
                  <span className="text-white">Control de Incendios</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-orange-400" />
                  <span className="text-white">Materiales Peligrosos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-orange-400" />
                  <span className="text-white">Primeros Auxilios</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-orange-400" />
                  <span className="text-white">Rescate Vehicular</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <span className="text-white">Emergencias</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-orange-400" />
                  <span className="text-white">Trabajo en Equipo</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Image Gallery */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Galería</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Firefighting moment 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Firefighting moment 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Firefighting moment 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Firefighting moment 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Card>

          {/* Certifications */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Certificaciones</h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-orange-500/20 text-orange-200">Bombero Nivel II</Badge>
              <Badge className="bg-orange-500/20 text-orange-200">EMT Certificado</Badge>
              <Badge className="bg-orange-500/20 text-orange-200">Hazmat</Badge>
            </div>
          </Card>

          {/* Experience Timeline */}
          <Card className="md:col-span-2 backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Experiencia</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-orange-400/50 pl-4">
                <h4 className="text-white font-medium">Bombera Profesional</h4>
                <p className="text-white/60 text-sm">2018 - Presente</p>
              </div>
              <div className="border-l-2 border-orange-400/50 pl-4">
                <h4 className="text-white font-medium">Instructora</h4>
                <p className="text-white/60 text-sm">2020 - Presente</p>
              </div>
            </div>
          </Card>

          {/* Contact */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Contacto</h3>
            <div className="space-y-2">
              <Button variant="secondary" className="w-full bg-white/20 text-white hover:bg-white/30">
                LinkedIn
              </Button>
              <Button variant="secondary" className="w-full bg-white/20 text-white hover:bg-white/30">
                Email
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

