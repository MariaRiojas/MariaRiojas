"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Calendar, ArrowRight, BookOpen, Tag, Bookmark } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    title: "The Future of Cloud Architecture",
    excerpt: "Exploring emerging trends in cloud computing and their impact on modern infrastructure.",
    category: "Cloud",
    readingTime: "5 min",
    date: "2024-01-20",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["AWS", "Architecture", "Innovation"],
  },
  {
    title: "Political Analysis in the Digital Age",
    excerpt: "How technology is transforming political research and analysis methodologies.",
    category: "Politics",
    readingTime: "7 min",
    date: "2024-01-18",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Digital", "Research", "Politics"],
  },
  {
    title: "Modern Emergency Response Systems",
    excerpt: "Implementing cutting-edge technology in firefighting and emergency services.",
    category: "Emergency",
    readingTime: "6 min",
    date: "2024-01-15",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Technology", "Safety", "Innovation"],
  },
]

export default function BlogSection() {
  return (
    <div className="min-h-screen w-full p-8 pb-20 pl-32">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
        >
          Blog & Insights
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Featured Post */}
          <Card className="md:col-span-3 backdrop-blur-xl bg-white/10 border-white/20 p-6 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Featured blog post"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <Badge className="bg-[#02C3BD]/20 text-[#02C3BD] mb-4">Featured</Badge>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Integrating Multiple Disciplines: A Comprehensive Approach
                  </h3>
                  <p className="text-white/80 mb-4">
                    Exploring the synergies between cloud architecture, political science, and emergency services in
                    today's interconnected world.
                  </p>
                  <div className="flex items-center gap-4 text-white/60 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>8 min read</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Jan 24, 2024</span>
                    </div>
                  </div>
                </div>
                <Button className="w-fit mt-4 bg-white/20 text-white hover:bg-white/30">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Blog Posts Grid */}
          {blogPosts.map((post, index) => (
            <Card key={index} className="backdrop-blur-xl bg-white/10 border-white/20 p-6 overflow-hidden">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <Badge
                className={`mb-3 ${
                  post.category === "Cloud"
                    ? "bg-[#02C3BD]/20 text-[#02C3BD]"
                    : post.category === "Politics"
                      ? "bg-[#E57A44]/20 text-[#E57A44]"
                      : "bg-[#FFC145]/20 text-[#FFC145]"
                }`}
              >
                {post.category}
              </Badge>
              <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
              <p className="text-white/80 mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between text-white/60 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readingTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline" className="text-white/60 border-white/20">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button variant="ghost" className="w-full text-white hover:bg-white/10">
                Read Article
              </Button>
            </Card>
          ))}

          {/* Categories */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Categories
            </h3>
            <div className="space-y-2">
              {["Cloud Computing", "Political Analysis", "Emergency Services", "Technology", "Research"].map(
                (category, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start text-white/80 hover:text-white hover:bg-white/10"
                  >
                    {category}
                  </Button>
                ),
              )}
            </div>
          </Card>

          {/* Popular Tags */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Tag className="w-5 h-5" />
              Popular Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {["AWS", "Politics", "Innovation", "Research", "Safety", "Cloud", "Technology", "Digital"].map(
                (tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-white/60 border-white/20 cursor-pointer hover:bg-white/10"
                  >
                    {tag}
                  </Badge>
                ),
              )}
            </div>
          </Card>

          {/* Bookmarks */}
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Bookmark className="w-5 h-5" />
              Saved Articles
            </h3>
            <div className="space-y-3">
              {["The Future of Cloud Architecture", "Political Analysis Methods", "Emergency Response Innovation"].map(
                (title, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-white/80 text-sm">{title}</span>
                    <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                ),
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

