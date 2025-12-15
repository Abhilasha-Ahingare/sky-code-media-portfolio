"use client"

import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { Sparkles, Calendar, Clock, ArrowRight, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt: "Explore the emerging technologies and frameworks shaping the future of web development.",
    image: "/web-development-future-technology.jpg",
    author: "Alex Thompson",
    date: "Dec 10, 2025",
    readTime: "5 min read",
    category: "Technology",
  },
  {
    title: "Building Scalable Mobile Apps with React Native",
    excerpt: "Best practices and strategies for creating high-performance cross-platform mobile applications.",
    image: "/mobile-app-development-react-native.jpg",
    author: "Sarah Chen",
    date: "Dec 8, 2025",
    readTime: "7 min read",
    category: "Development",
  },
  {
    title: "UI/UX Design Principles for Modern Web Applications",
    excerpt: "Essential design principles that create intuitive and engaging user experiences.",
    image: "/ui-ux-design-modern-interface.jpg",
    author: "Emma Davis",
    date: "Dec 5, 2025",
    readTime: "6 min read",
    category: "Design",
  },
]

export function BlogSection() {
  return (
    <AnimatedSection id="blog" className="bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-purple-500/30">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-200">Latest Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient font-[var(--font-display)]">
            From Our Blog
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, insights, and best practices in digital technology.
          </p>
        </div>

        {/* Blog posts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group rounded-3xl overflow-hidden bg-gradient-to-b from-white/5 to-transparent border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-purple-500/80 text-white backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-purple-500/20">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-gray-300">{post.author}</span>
                  </div>
                  <Link
                    href="#"
                    className="flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm group/link"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="rounded-full px-8 py-6 text-lg border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 text-white bg-transparent"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </AnimatedSection>
  )
}
