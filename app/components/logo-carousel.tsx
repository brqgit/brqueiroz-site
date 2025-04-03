import type React from "react"
import { useRef, useState, useEffect } from "react"

export default function LogoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [position, setPosition] = useState(0)
  const speed = 1

  const logos = [
    { id: 1, src: "/placeholder.svg?height=80&width=160", alt: "Company 1" },
    { id: 2, src: "/placeholder.svg?height=80&width=160", alt: "Company 2" },
    { id: 3, src: "/placeholder.svg?height=80&width=160", alt: "Company 3" },
    { id: 4, src: "/placeholder.svg?height=80&width=160", alt: "Company 4" },
    { id: 5, src: "/placeholder.svg?height=80&width=160", alt: "Company 5" },
    { id: 6, src: "/placeholder.svg?height=80&width=160", alt: "Company 6" },
    { id: 7, src: "/placeholder.svg?height=80&width=160", alt: "Company 7" },
    { id: 8, src: "/placeholder.svg?height=80&width=160", alt: "Company 8" },
  ]

  const logoSpacing = 48;

  useEffect(() => {
    const firstSetEl = document.querySelector('.logo-set') as HTMLElement;

    let animationId: number;
    let currentPosition = position;

    const animate = () => {
      if (isDragging || !firstSetEl) return;

      currentPosition -= speed;

      const setWidth = firstSetEl.offsetWidth;
      if (Math.abs(currentPosition) >= setWidth) {
        currentPosition += setWidth;
      }

      setPosition(currentPosition);

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isDragging, position]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX)
    document.body.classList.add("select-none")
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX)
    document.body.classList.add("select-none")
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const x = e.pageX;
    const diff = x - startX;
    setStartX(x);

    setPosition(prevPosition => prevPosition + diff);
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return

    const x = e.touches[0].pageX;
    const diff = x - startX;
    setStartX(x);

    setPosition(prevPosition => prevPosition + diff);
  }

  const stopDragging = () => {
    setIsDragging(false)
    document.body.classList.remove("select-none")
  }

  const LogoItem = ({ logo, prefix }: { logo: typeof logos[0], prefix: string }) => (
    <div
      key={`${prefix}-${logo.id}`}
      className="flex-shrink-0 w-40 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center"
      style={{ marginRight: `${logoSpacing}px` }}
    >
      <img
        src={logo.src || "/placeholder.svg"}
        alt={logo.alt}
        width={160}
        height={80}
        className="object-contain p-4 max-w-full max-h-full"
        draggable="false"
      />
    </div>
  );

  return (
    <div className="w-full py-16 overflow-hidden relative bg-gray-50">
      <div
        className="relative overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={stopDragging}
      >
        <div
          ref={containerRef}
          className={`flex ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          style={{
            transform: `translateX(${position}px)`,
            transition: isDragging ? 'none' : 'transform 0.1s ease',
            display: 'flex',
            flexWrap: 'nowrap'
          }}
        >
          <div className="flex flex-nowrap logo-set">
            {logos.map((logo) => (
              <LogoItem key={`start-${logo.id}`} logo={logo} prefix="start" />
            ))}
          </div>

          <div className="flex flex-nowrap logo-set">
            {logos.map((logo) => (
              <LogoItem key={`main-${logo.id}`} logo={logo} prefix="main" />
            ))}
          </div>

          <div className="flex flex-nowrap logo-set">
            {logos.map((logo) => (
              <LogoItem key={`end-${logo.id}`} logo={logo} prefix="end" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}