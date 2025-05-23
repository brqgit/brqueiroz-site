import type React from "react"
import { useRef, useState, useEffect } from "react"

import { getPartnersLogos } from "~/lib/partners-logos";

export default function LogoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [startX, setStartX] = useState(0)
  const [position, setPosition] = useState(0)
  const [logos, setLogos] = useState(getPartnersLogos())
  const speed = 1
  const logoSpacing = 8

  useEffect(() => {
    const originalLogos = getPartnersLogos()
    setLogos([...originalLogos, ...originalLogos, ...originalLogos])
  }, [])

  useEffect(() => {
    const animate = () => {
      if (isDragging || isPaused || !containerRef.current) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      setPosition((prevPosition) => {
        let newPosition = prevPosition - speed

        if (containerRef.current) {
          const firstSetEl = containerRef.current.querySelector(".logo-set") as HTMLElement
          if (firstSetEl) {
            const setWidth = firstSetEl.offsetWidth + logoSpacing

            if (Math.abs(newPosition) >= setWidth) {
              newPosition = -1
            }
          }
        }

        return newPosition
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isDragging, isPaused, speed, logoSpacing])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
    document.body.classList.add("select-none")
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    document.body.classList.add("select-none")
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const x = e.clientX
    const diff = x - startX
    setStartX(x)

    setPosition((prevPosition) => prevPosition + diff)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return

    const x = e.touches[0].clientX
    const diff = x - startX
    setStartX(x)

    setPosition((prevPosition) => prevPosition + diff)
  }

  const stopDragging = () => {
    setIsDragging(false)
    document.body.classList.remove("select-none")
  }

  const logoSets = {
    first: logos.slice(0, logos.length / 3),
    second: logos.slice(logos.length / 3, (logos.length / 3) * 2),
    third: logos.slice((logos.length / 3) * 2),
  }

  return (
    <div className="w-full overflow-hidden">
      <div
        className="relative overflow-hidden py-2"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={stopDragging}
        aria-hidden="true"
      >
        <div
          ref={containerRef}
          className="flex"
          style={{
            transform: `translateX(${position}px)`,
            transition: isDragging ? "none" : "transform 0.05s linear",
            willChange: "transform",
          }}
        >
          <div className="flex flex-nowrap logo-set">
            {logoSets.first.map((logo) => (
              <LogoItem
                key={`first-${logo.id}`}
                logo={logo}
                prefix="first"
                logoSpacing={logoSpacing}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              />
            ))}
          </div>

          <div className="flex flex-nowrap logo-set">
            {logoSets.second.map((logo) => (
              <LogoItem
                key={`second-${logo.id}`}
                logo={logo}
                prefix="second"
                logoSpacing={logoSpacing}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              />
            ))}
          </div>

          <div className="flex flex-nowrap logo-set">
            {logoSets.third.map((logo) => (
              <LogoItem
                key={`third-${logo.id}`}
                logo={logo}
                prefix="third"
                logoSpacing={logoSpacing}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function LogoItem({
  logo,
  prefix,
  logoSpacing,
  onMouseEnter,
  onMouseLeave,
}: {
  logo: ReturnType<typeof getPartnersLogos>[0]
  prefix: string
  logoSpacing: number
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  return (
    <div
      className="flex-shrink-0 w-50 h-25 bg-white rounded-lg shadow-sm flex items-center justify-center"

      style={{ marginRight: `${logoSpacing}px` }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        src={logo.src || "/placeholder.svg"}
        alt={logo.alt}
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-200 p-4"
        draggable="false"
      />
    </div>
  )
}