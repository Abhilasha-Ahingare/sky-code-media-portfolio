"use client"

import type React from "react"

import { useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Briefcase,
  DollarSign,
  Calendar,
} from "lucide-react"
import { cn } from "@/lib/utils"

const steps = [
  { id: 1, title: "Contact Info", icon: Mail },
  { id: 2, title: "Project Details", icon: Briefcase },
  { id: 3, title: "Budget & Timeline", icon: DollarSign },
]

const budgetOptions = ["$5k - $10k", "$10k - $25k", "$25k - $50k", "$50k+"]
const timelineOptions = ["ASAP", "1-2 months", "3-6 months", "Flexible"]
const serviceOptions = ["Web Development", "Mobile App", "UI/UX Design", "Digital Marketing", "Other"]

export function ContactSection() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <AnimatedSection id="contact" className="bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center glow-purple">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gradient font-[var(--font-display)]">Thank You!</h2>
            <p className="text-xl text-gray-400">
              We&#39;ve received your message and will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </AnimatedSection>
    )
  }

  return (
    <AnimatedSection id="contact" className="bg-gradient-to-b from-black via-purple-950/10 to-black relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-purple-500/30">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-200">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient font-[var(--font-display)]">
            Start Your Project
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Let&#39;s discuss how we can help achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Email Us</div>
                    <div className="text-white">hello@skycodemedia.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Call Us</div>
                    <div className="text-white">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Visit Us</div>
                    <div className="text-white">123 Innovation Drive, Tech City, TC 10001</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business hours */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-purple-400">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Multi-step form */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-purple-500/20">
            {/* Progress steps */}
            <div className="flex items-center justify-between mb-8">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                      currentStep >= step.id
                        ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white"
                        : "bg-gray-800 text-gray-500",
                    )}
                  >
                    <step.icon className="w-5 h-5" />
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={cn(
                        "w-12 md:w-20 h-1 mx-2 rounded transition-all duration-300",
                        currentStep > step.id ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-gray-800",
                      )}
                    />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Contact Info */}
              <div className={cn("space-y-4", currentStep !== 1 && "hidden")}>
                <h3 className="text-xl font-bold text-white mb-4">Your Information</h3>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-black/50 border-purple-500/30 focus:border-purple-400 text-white placeholder:text-gray-500"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-black/50 border-purple-500/30 focus:border-purple-400 text-white placeholder:text-gray-500"
                />
                <Input
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-black/50 border-purple-500/30 focus:border-purple-400 text-white placeholder:text-gray-500"
                />
                <Input
                  placeholder="Company Name (Optional)"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-black/50 border-purple-500/30 focus:border-purple-400 text-white placeholder:text-gray-500"
                />
              </div>

              {/* Step 2: Project Details */}
              <div className={cn("space-y-4", currentStep !== 2 && "hidden")}>
                <h3 className="text-xl font-bold text-white mb-4">Project Details</h3>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Select Service</label>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceOptions.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setFormData({ ...formData, service })}
                        className={cn(
                          "p-3 rounded-xl text-sm transition-all duration-300 border",
                          formData.service === service
                            ? "bg-purple-500/20 border-purple-400 text-white"
                            : "bg-black/50 border-purple-500/30 text-gray-400 hover:border-purple-400",
                        )}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>
                <Textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-black/50 border-purple-500/30 focus:border-purple-400 text-white placeholder:text-gray-500 min-h-32"
                />
              </div>

              {/* Step 3: Budget & Timeline */}
              <div className={cn("space-y-6", currentStep !== 3 && "hidden")}>
                <h3 className="text-xl font-bold text-white mb-4">Budget & Timeline</h3>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Estimated Budget
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {budgetOptions.map((budget) => (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget })}
                        className={cn(
                          "p-3 rounded-xl text-sm transition-all duration-300 border",
                          formData.budget === budget
                            ? "bg-purple-500/20 border-purple-400 text-white"
                            : "bg-black/50 border-purple-500/30 text-gray-400 hover:border-purple-400",
                        )}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Project Timeline
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {timelineOptions.map((timeline) => (
                      <button
                        key={timeline}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline })}
                        className={cn(
                          "p-3 rounded-xl text-sm transition-all duration-300 border",
                          formData.timeline === timeline
                            ? "bg-purple-500/20 border-purple-400 text-white"
                            : "bg-black/50 border-purple-500/30 text-gray-400 hover:border-purple-400",
                        )}
                      >
                        {timeline}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between mt-8">
                {currentStep > 1 ? (
                  <Button type="button" variant="ghost" onClick={handlePrev} className="text-gray-400 hover:text-white">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                ) : (
                  <div />
                )}

                {currentStep < 3 ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full px-6"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full px-6 glow-purple"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
