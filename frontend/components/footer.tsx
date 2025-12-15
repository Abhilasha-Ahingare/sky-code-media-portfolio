"use client"

import Link from "next/link"
import { Sparkles, Github, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Web Development", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
    { label: "Digital Marketing", href: "#services" },
  ],
  resources: [
    { label: "Blog", href: "#blog" },
    { label: "Case Studies", href: "#portfolio" },
    { label: "Documentation", href: "#" },
    { label: "Support", href: "#" },
  ],
}

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-black border-t border-purple-500/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center glow-purple">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient font-[var(--font-display)]">Sky Code Media</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Transforming businesses through innovative digital solutions. We create exceptional web experiences that
              drive results.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-purple-500/30 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Subscribe to our newsletter</h3>
              <p className="text-gray-400">Get the latest updates and insights delivered to your inbox.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 rounded-xl bg-black/50 border border-purple-500/30 focus:border-purple-400 focus:outline-none text-white placeholder:text-gray-500"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl px-6 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-purple-500/20">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Sky Code Media. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-purple-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-purple-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-purple-400 transition-colors">
              Cookies
            </Link>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full border border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/10"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
