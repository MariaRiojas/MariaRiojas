"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cloud, Database, Lock, Terminal, Server, Globe, BarChart3, GitBranch } from "lucide-react"
import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const performanceData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 900 },
]

export default function CloudSection() {
  return (
    <div className="min-h-screen w-full p-10 pb-20 pl-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
        >
          Cloud Architecture & Development
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Featured Project Image */}
          <Card className="md:col-span-3 backdrop-blur-xl bg-white/10 border-white/20 p-6 overflow-hidden">
            <h3 className="text-2xl font-semibold text-white mb-4">Featured Project</h3>
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=1200"
                alt="Featured cloud architecture project"
                fill
                className="object-cover"
              />
            </div>
          </Card>

          {/* Performance Metrics */}
          <Card className="md:col-span-2 backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Performance Metrics</h3>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <XAxis dataKey="name" stroke="#ffffff60" />
                  <YAxis stroke="#ffffff60" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "8px",
                    }}
                  />
                  <Line type="monotone" dataKey="value" stroke="#02C3BD" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Quick Stats */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#02C3BD]" />
                  <span className="text-white">Uptime</span>
                </div>
                <span className="text-white font-bold">99.9%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GitBranch className="w-5 h-5 text-[#02C3BD]" />
                  <span className="text-white">Deployments</span>
                </div>
                <span className="text-white font-bold">1.2K</span>
              </div>
            </div>
          </Card>

          {/* Main Skills Card */}
          <Card className="md:col-span-2 row-span-2 backdrop-blur-xl bg-white/10 border-white/20 p-6 overflow-hidden">
            <h3 className="text-2xl font-semibold text-white mb-4">Expertise</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Cloud className="w-5 h-5 text-[#02C3BD]" />
                  <span className="text-white">Cloud Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-[#02C3BD]" />
                  <span className="text-white">Database Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-[#02C3BD]" />
                  <span className="text-white">Security</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-[#02C3BD]" />
                  <span className="text-white">DevOps</span>
                </div>
                <div className="flex items-center gap-2">
                  <Server className="w-5 h-5 text-[#02C3BD]" />
                  <span className="text-white">Infrastructure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-[#02C3BD]" />
                  <span className="text-white">Scalability</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Project Gallery */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Project Gallery</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Cloud project 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Cloud project 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Cloud project 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Cloud project 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Card>

          {/* Tech Stack */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Tech Stack</h3>
            <div className="grid grid-cols-3 gap-2">
              {["AWS", "GCP", "Azure", "Docker", "K8s", "Terraform"].map((tech) => (
                <Badge key={tech} className="bg-[#02C3BD]/20 text-[#02C3BD] text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Experience Timeline */}
          <Card className="md:col-span-2 backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Experience</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-[#02C3BD]/50 pl-4">
                <h4 className="text-white font-medium">Senior Cloud Architect</h4>
                <p className="text-white/60 text-sm">2020 - Present</p>
              </div>
              <div className="border-l-2 border-[#02C3BD]/50 pl-4">
                <h4 className="text-white font-medium">Cloud Solutions Engineer</h4>
                <p className="text-white/60 text-sm">2018 - 2020</p>
              </div>
            </div>
          </Card>

          {/* Contact */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
            <div className="space-y-2">
              <Button variant="secondary" className="w-full bg-white/20 text-white hover:bg-white/30">
                LinkedIn
              </Button>
              <Button variant="secondary" className="w-full bg-white/20 text-white hover:bg-white/30">
                GitHub
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

