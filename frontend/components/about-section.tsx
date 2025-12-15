"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Sparkles, Target, Users, Award, Lightbulb, TrendingUp, Heart } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Target,
      title: "Mission Driven Approach",
      description:
        "We are committed to delivering exceptional digital solutions that drive real, measurable business results and create lasting value for our clients.",
    },
    {
      icon: Users,
      title: "Expert Professional Team",
      description:
        "Our diverse team of skilled developers, creative designers, and digital strategists brings over 50 years of combined industry experience and expertise.",
    },
    {
      icon: Award,
      title: "Award Winning Excellence",
      description:
        "Recognized globally for our excellence in web development, mobile innovation, and digital transformation across multiple industries and sectors.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description:
        "We stay ahead of emerging technology trends, utilizing cutting-edge tools and methodologies to provide forward-thinking solutions for modern business challenges.",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused Strategy",
      description:
        "Our data-driven approach and strategic planning ensure your digital presence scales effectively, driving continuous growth and market leadership.",
    },
    {
      icon: Heart,
      title: "Client-Centric Philosophy",
      description:
        "Building long-term partnerships through transparent communication, dedicated support, and a genuine commitment to your success is at our core.",
    },
  ]

  return (
    <AnimatedSection id="about" className="bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-purple-500/30">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-200 font-medium">Who We Are</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-gradient font-[var(--font-display)]">
            About Sky Code Media
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed font-normal">
            Sky Code Media is a full-service digital agency dedicated to helping businesses of all sizes thrive in the
            rapidly evolving digital landscape. We combine creative thinking with technical excellence to deliver
            innovative technology solutions that transform ideas into successful digital experiences.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform glow-purple">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-10 rounded-3xl bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 backdrop-blur-sm">
          {[
            { value: "98%", label: "Client Satisfaction Rate" },
            { value: "250+", label: "Successful Projects" },
            { value: "20+", label: "Expert Team Members" },
            { value: "15+", label: "Countries Worldwide" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
