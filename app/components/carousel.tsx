import React, { useState, useEffect, useCallback, useRef, type ReactNode } from "react"

interface CarouselProps {
  children: ReactNode[]
  autoPlayInterval?: number
  className?: string
  showArrows?: boolean
  itemsPerPage?: number
  gridClassName?: string
  preserveGrid?: boolean
}

export function Carousel({
  children,
  autoPlayInterval = 5000,
  className,
  showArrows = true,
  itemsPerPage = 1,
  gridClassName = "",
  preserveGrid = false,
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStartX, setDragStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const childrenArray = React.Children.toArray(children)
  const totalItems = childrenArray.length
  const slideCount = Math.ceil(totalItems / itemsPerPage)

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % slideCount)
  }, [slideCount])

  const prevSlide = useCallback(() => {
    setActiveIndex((current) => (current - 1 + slideCount) % slideCount)
  }, [slideCount])

  const goToSlide = (index: number) => {
    setActiveIndex(index)
  }

  useEffect(() => {
    if (isPaused || isDragging) return

    const interval = setInterval(() => {
      nextSlide()
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [nextSlide, autoPlayInterval, isPaused, isDragging])

  const handleDragStart = (clientX: number) => {
    setIsDragging(true)
    setDragStartX(clientX)
    setDragOffset(0)
    setIsPaused(true)
  }

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return

    const containerWidth = carouselRef.current?.offsetWidth || 0
    const newOffset = clientX - dragStartX

    const maxOffset = containerWidth * 0.5
    const limitedOffset = Math.max(Math.min(newOffset, maxOffset), -maxOffset)

    setDragOffset(limitedOffset)
  }

  const handleDragEnd = () => {
    if (!isDragging) return

    const containerWidth = carouselRef.current?.offsetWidth || 0
    const threshold = containerWidth * 0.2

    if (dragOffset > threshold) {
      prevSlide()
    } else if (dragOffset < -threshold) {
      nextSlide()
    }

    setIsDragging(false)
    setDragOffset(0)
    setIsPaused(false)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    handleDragStart(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    e.preventDefault()
    handleDragMove(e.clientX)
  }

  const handleMouseUp = () => {
    handleDragEnd()
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd()
    }
    setIsPaused(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    handleDragEnd()
  }

  return (
    <div
      className={["relative w-full overflow-hidden", className].filter(Boolean).join(" ")}
      onMouseEnter={() => !isDragging && setIsPaused(true)}
      onMouseLeave={handleMouseLeave}
      ref={carouselRef}
    >
      <div
        className={["flex transition-transform duration-500 ease-in-out", isDragging ? "transition-none" : ""]
          .filter(Boolean)
          .join(" ")}
        style={{
          transform: `translateX(calc(-${activeIndex * 100}% + ${dragOffset}px))`,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={isDragging ? handleMouseMove : undefined}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {Array.from({ length: slideCount }).map((_, slideIndex) => {
          const slideItems = childrenArray.slice(
            slideIndex * itemsPerPage,
            Math.min((slideIndex + 1) * itemsPerPage, totalItems),
          )

          return (
            <div className="w-full flex-shrink-0" key={slideIndex}>
              {preserveGrid ? (
                <div className={gridClassName}>{slideItems}</div>
              ) : (
                <div className="flex flex-wrap justify-center gap-4">
                  {slideItems.map((child, itemIndex) => (
                    <div
                      className={["flex-grow", itemsPerPage > 1 ? "basis-full md:basis-[calc(33.333%-1rem)]" : ""]
                        .filter(Boolean)
                        .join(" ")}
                      key={`${slideIndex}-${itemIndex}`}
                    >
                      {child}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {Array.from({ length: slideCount }).length > 1 && (
        <div className="flex justify-center gap-2 mt-8 mb-[2px]">
          {Array.from({ length: slideCount }).map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={[
                "h-3 w-3 rounded-full transition-all cursor-pointer",
                activeIndex === index ? "bg-[#1c5abd] scale-125" : "bg-[#1c5abd]/30 hover:bg-[#1c5abd]/50",
              ].filter(Boolean).join(" ")}
              role="button"
              tabIndex={0}
              aria-label={`Go to slide ${index + 1}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  goToSlide(index)
                }
              }}
            />
          ))}
        </div>
      )}

      {showArrows && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-md hover:bg-background"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-left"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-md hover:bg-background"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </>
      )}
    </div>
  )
}

