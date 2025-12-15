"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function useGSAP() {
  const scopeRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, scopeRef)
    return () => ctx.revert()
  }, [])

  return { scopeRef, gsap, ScrollTrigger }
}

export function useScrollAnimation(selector: string, animation: gsap.TweenVars, trigger?: ScrollTrigger.Vars) {
  useLayoutEffect(() => {
    const elements = document.querySelectorAll(selector)

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50, ...animation },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
            ...trigger,
          },
        },
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [selector, animation, trigger])
}

export { gsap, ScrollTrigger }
