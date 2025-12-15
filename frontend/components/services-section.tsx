"use client"

import { AnimatedSection } from "@/components/animated-section"
import {
  Sparkles,
  Globe,
  Smartphone,
  Palette,
  TrendingUp,
  Shield,
  Cloud,
  ArrowRight,
  Code,
  Database,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Custom, responsive websites and powerful web applications built with cutting-edge technologies, optimized for performance, scalability, and seamless user experiences across all devices.",
      features: ["React & Next.js Development", "Full-Stack Solutions", "E-commerce Platforms", "CMS Integration"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications engineered to deliver exceptional user experiences, stunning performance, and robust functionality for iOS and Android platforms.",
      features: ["iOS & Android Native", "React Native Apps", "Flutter Development", "App Store Optimization"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive, and user-centered designs that captivate audiences, enhance engagement, and drive meaningful conversions through strategic design thinking.",
      features: ["User Research & Testing", "Wireframing & Prototyping", "Visual Design Systems", "Interaction Design"],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Data-driven marketing strategies and campaigns designed to amplify your online presence, increase brand visibility, and drive qualified traffic that converts.",
      features: ["SEO & SEM Optimization", "Social Media Marketing", "Content Strategy", "Email Campaigns"],
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description:
        "Comprehensive security services to protect your digital assets, ensure compliance, and maintain customer trust with enterprise-grade security protocols.",
      features: ["Security Audits & Testing", "Penetration Testing", "Compliance Management", "Threat Monitoring"],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description:
        "Scalable cloud infrastructure, automated deployment pipelines, and modern DevOps practices that accelerate development and ensure reliable operations.",
      features: ["AWS & Azure & GCP", "CI/CD Pipeline Setup", "Microservices Architecture", "Container Orchestration"],
    },
    {
      icon: Code,
      title: "Custom Software",
      description:
        "Tailored software solutions built from the ground up to address your unique business challenges, streamline operations, and unlock new opportunities.",
      features: ["Business Automation", "API Development", "Legacy Modernization", "System Integration"],
    },
    {
      icon: Database,
      title: "Data Analytics",
      description:
        "Transform raw data into actionable insights with advanced analytics, business intelligence tools, and machine learning solutions that drive informed decisions.",
      features: ["Data Visualization", "Predictive Analytics", "Business Intelligence", "ML/AI Integration"],
    },
  ]

  return (
    <AnimatedSection id="services" className="bg-gradient-to-b from-black via-purple-950/10 to-black relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-purple-500/30">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-200 font-medium">What We Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-gradient font-[var(--font-display)]">
            Our Professional Services
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed font-normal">
            Comprehensive digital solutions and services meticulously tailored to elevate your business, enhance your
            digital presence, and drive sustainable growth in today's competitive marketplace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-7 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 glow-purple">
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">{service.description}</p>

                <ul className="space-y-2 mb-5">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="ghost"
                  className="group/btn text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 p-0 text-sm font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
