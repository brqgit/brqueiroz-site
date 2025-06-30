"use client"

import { useState, useEffect, useCallback } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import type { Testimonial as TestimonialType } from "../types/testimonials"
import FeaturedMessage from "~/components/featured-message"

interface CaseProps {
    testimonial: TestimonialType | null
}

interface ImageWithLoadingProps {
    src: string
    alt: string
    className: string
    onClick?: () => void
    loading?: "lazy" | "eager"
}

function ImageWithLoading({ src, alt, className, onClick, loading = "lazy" }: ImageWithLoadingProps) {
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    const handleLoad = () => {
        setIsLoading(false)
    }

    const handleError = () => {
        setIsLoading(false)
        setHasError(true)
    }

    return (
        <div className="relative w-full h-full">
            {isLoading && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center z-10">
                    <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
            <img
                src={hasError ? "/placeholder.svg?height=400&width=600" : src || "/placeholder.svg?height=400&width=600"}
                alt={alt}
                className={`${className} transition-opacity duration-300`}
                onClick={onClick}
                onLoad={handleLoad}
                onError={handleError}
                loading={loading}
                style={{ opacity: isLoading ? 0 : 1 }}
            />
        </div>
    )
}

export default function Case({ testimonial }: CaseProps) {
    const [modalOpen, setModalOpen] = useState(false)
    const [currentIdx, setCurrentIdx] = useState(0)
    const [selectedImages, setSelectedImages] = useState<string[]>([])

    const [sliderRef1] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: { perView: 1 },
    })

    const [sliderRef2] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: { perView: 1 },
    })

    const [sliderRef3] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: { perView: 1 },
    })

    const [modalSliderRef, modalSlider] = useKeenSlider<HTMLDivElement>({
        initial: currentIdx,
        loop: true,
        slides: { perView: 1, spacing: 8 },
        slideChanged(s) {
            setCurrentIdx(s.track.details.rel)
        },
    })

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (!modalOpen) return

            switch (e.key) {
                case "Escape":
                    setModalOpen(false)
                    break
                case "ArrowLeft":
                    e.preventDefault()
                    if (modalSlider?.current) {
                        modalSlider.current.prev()
                    }
                    break
                case "ArrowRight":
                    e.preventDefault()
                    if (modalSlider?.current) {
                        modalSlider.current.next()
                    }
                    break
            }
        },
        [modalOpen, modalSlider],
    )

    useEffect(() => {
        if (modalOpen) {
            document.addEventListener("keydown", handleKeyDown)
            document.body.style.overflow = "hidden" // Prevent background scroll
        } else {
            document.body.style.overflow = "unset"
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            document.body.style.overflow = "unset"
        }
    }, [modalOpen, handleKeyDown])

    useEffect(() => {
        if (modalSlider?.current && modalOpen) {
            modalSlider.current.moveToIdx(currentIdx)
        }
    }, [currentIdx, modalSlider, modalOpen])

    if (!testimonial) {
        return (
            <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-500 text-lg">Carregando depoimento...</p>
                </div>
            </div>
        )
    }

    const basicInfo = (
        <div className="mb-8 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{testimonial.title}</h2>
            {testimonial.position && <p className="text-gray-600 mb-4 text-lg">{testimonial.position}</p>}
            {testimonial.testimonial && <p className="text-gray-800 text-lg leading-relaxed">{testimonial.testimonial}</p>}
        </div>
    )

    if (!testimonial.images || testimonial.images.length === 0) {
        return (
            <div className="w-full min-h-screen bg-gradient-to-br from-[#0a1525] to-[#0a0f18] text-white">
                <div className="container mx-auto px-4 py-16">{basicInfo}</div>
            </div>
        )
    }

    const sectionSize = Math.ceil(testimonial.images.length / 3)
    const firstSection = testimonial.images.slice(0, sectionSize)
    const secondSection = testimonial.images.slice(sectionSize, sectionSize * 2)
    const thirdSection = testimonial.images.slice(sectionSize * 2)

    const handleSectionClick = (sectionImages: string[], imageIndex = 0) => {
        setSelectedImages(sectionImages)
        setCurrentIdx(imageIndex)
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-[#0a1525] to-[#0a0f18] text-white">
            <div className="container mx-auto px-4 py-24 md:py-30 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                            {testimonial?.title}
                        </h1>
                        <div className="w-16 md:w-24 h-1 bg-[#1e6cd3]"></div>
                        <div className="space-y-3 md:space-y-4">
                            {Array.isArray(testimonial.fullDescription) ? (
                                testimonial.fullDescription.map((paragraph, index) => (
                                    <p key={index} className="text-gray-300 text-base md:text-lg leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))
                            ) : (
                                <p className="text-gray-300 text-base md:text-lg leading-relaxed">{testimonial.fullDescription}</p>
                            )}
                        </div>
                    </div>

                    <div
                        className="
                        w-full order-2 mt-8
                        lg:order-1
                      "
                    >
                        <div
                            className="
                                flex flex-col gap-4
                                md:flex-row md:gap-2
                                lg:hidden
                            "
                        >
                            {firstSection.length > 0 && (
                                <div className="w-full md:w-60">
                                    <div
                                        ref={sliderRef1}
                                        className="keen-slider rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                                        role="button"
                                        tabIndex={0}
                                        aria-label={`Galeria de imagens - Seção 1 (${firstSection.length} imagens)`}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") {
                                                e.preventDefault()
                                                handleSectionClick(firstSection, 0)
                                            }
                                        }}
                                    >
                                        {firstSection.map((src, idx) => (
                                            <div
                                                key={`first-${idx}`}
                                                className="keen-slider__slide"
                                                onClick={() => handleSectionClick(firstSection, idx)}
                                            >
                                                <ImageWithLoading
                                                    src={src || "/placeholder.svg"}
                                                    alt={`Galeria 1 - Imagem ${idx + 1}`}
                                                    className="
                                                        w-full h-48 object-cover
                                                        md:w-60
                                                    "
                                                    loading={idx === 0 ? "eager" : "lazy"}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {secondSection.length > 0 && (
                                <div className="w-full md:w-60">
                                    <div
                                        ref={sliderRef2}
                                        className="keen-slider rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                                        role="button"
                                        tabIndex={0}
                                        aria-label={`Galeria de imagens - Seção 2 (${secondSection.length} imagens)`}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") {
                                                e.preventDefault()
                                                handleSectionClick(secondSection, 0)
                                            }
                                        }}
                                    >
                                        {secondSection.map((src, idx) => (
                                            <div
                                                key={`second-${idx}`}
                                                className="keen-slider__slide"
                                                onClick={() => handleSectionClick(secondSection, idx)}
                                            >
                                                <ImageWithLoading
                                                    src={src || "/placeholder.svg"}
                                                    alt={`Galeria 2 - Imagem ${idx + 1}`}
                                                    className="
                                                        w-full h-48 object-cover
                                                        md:w-60
                                                    "
                                                    loading="lazy"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {thirdSection.length > 0 && (
                                <div className="w-full md:w-60">
                                    <div
                                        ref={sliderRef3}
                                        className="keen-slider rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                                        role="button"
                                        tabIndex={0}
                                        aria-label={`Galeria de imagens - Seção 3 (${thirdSection.length} imagens)`}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") {
                                                e.preventDefault()
                                                handleSectionClick(thirdSection, 0)
                                            }
                                        }}
                                    >
                                        {thirdSection.map((src, idx) => (
                                            <div
                                                key={`third-${idx}`}
                                                className="keen-slider__slide"
                                                onClick={() => handleSectionClick(thirdSection, idx)}
                                            >
                                                <ImageWithLoading
                                                    src={src || "/placeholder.svg"}
                                                    alt={`Galeria 3 - Imagem ${idx + 1}`}
                                                    className="
                                                        w-full h-48 object-cover
                                                        md:w-60
                                                    "
                                                    loading="lazy"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] xl:h-[800px] hidden lg:block">
                            {firstSection.length > 0 && (
                                <div
                                    className="
                                        absolute z-10 left-2 top-4 w-48 h-48 transform -rotate-3 hover:rotate-[-8deg] transition-transform duration-300
                                        md:left-8 md:top-8 md:w-64 md:h-64 md:-rotate-6
                                        lg:left-15 lg:top-15 lg:w-62 lg:h-62 lg:-rotate-12
                                        laptop:left-40 laptop:top-35
                                    "
                                >
                                    <div
                                        ref={sliderRef1}
                                        className="keen-slider rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                                        role="button"
                                        tabIndex={0}
                                        aria-label={`Galeria de imagens - Seção 1 (${firstSection.length} imagens)`}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") {
                                                e.preventDefault()
                                                handleSectionClick(firstSection, 0)
                                            }
                                        }}
                                    >
                                        {firstSection.map((src, idx) => (
                                            <div
                                                key={`first-${idx}`}
                                                className="keen-slider__slide"
                                                onClick={() => handleSectionClick(firstSection, idx)}
                                            >
                                                <ImageWithLoading
                                                    src={src || "/placeholder.svg"}
                                                    alt={`Galeria 1 - Imagem ${idx + 1}`}
                                                    className="
                                                        w-full h-full object-cover 
                                                        lg:h-60
                                                    "
                                                    loading={idx === 0 ? "eager" : "lazy"}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {secondSection.length > 0 && (
                                <div
                                    className="
                                        absolute z-20 right-0 top-1/4 w-52 h-52 transform rotate-2 hover:rotate-[-8deg] transition-transform duration-300
                                        md:right-0 md:top-1/3 md:w-62 md:h-62 md:rotate-3
                                        lg:w-62 lg:h-62 lg:left-55 lg:top-1/3
                                        laptop:left-103 laptop:top-85
                                    "
                                >
                                    <div
                                        ref={sliderRef2}
                                        className="keen-slider rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                                        role="button"
                                        tabIndex={0}
                                        aria-label={`Galeria de imagens - Seção 2 (${secondSection.length} imagens)`}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") {
                                                e.preventDefault()
                                                handleSectionClick(secondSection, 0)
                                            }
                                        }}
                                    >
                                        {secondSection.map((src, idx) => (
                                            <div
                                                key={`second-${idx}`}
                                                className="keen-slider__slide"
                                                onClick={() => handleSectionClick(secondSection, idx)}
                                            >
                                                <ImageWithLoading
                                                    src={src || "/placeholder.svg"}
                                                    alt={`Galeria 2 - Imagem ${idx + 1}`}
                                                    className="
                                                        w-full h-full object-cover
                                                        lg:h-60
                                                    "
                                                    loading="lazy"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {thirdSection.length > 0 && (
                                <div
                                    className="
                                        absolute z-30 left-4 bottom-0 w-44 h-44 transform rotate-4 hover:rotate-[-8deg] transition-transform duration-300
                                        md:left-12 md:bottom-0 md:w-68 md:h-68 md:rotate-6
                                        lg:left-10 lg:w-62 lg:h-62
                                        laptop:left-35 laptop:top-120
                                    "
                                >
                                    <div
                                        ref={sliderRef3}
                                        className="keen-slider rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                                        role="button"
                                        tabIndex={0}
                                        aria-label={`Galeria de imagens - Seção 3 (${thirdSection.length} imagens)`}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") {
                                                e.preventDefault()
                                                handleSectionClick(thirdSection, 0)
                                            }
                                        }}
                                    >
                                        {thirdSection.map((src, idx) => (
                                            <div
                                                key={`third-${idx}`}
                                                className="keen-slider__slide"
                                                onClick={() => handleSectionClick(thirdSection, idx)}
                                            >
                                                <ImageWithLoading
                                                    src={src || "/placeholder.svg"}
                                                    alt={`Galeria 3 - Imagem ${idx + 1}`}
                                                    className="
                                                        w-full h-full object-cover
                                                        lg:h-60
                                                    "
                                                    loading="lazy"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <FeaturedMessage />

            {modalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all duration-300"
                    onClick={closeModal}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Galeria de imagens em tela cheia"
                >
                    <div
                        className="flex flex-col items-end max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl w-full mx-4 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="hidden md:block absolute -left-16 top-1/2 -translate-y-1/2 border border-gray-300 bg-white/80 hover:bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-20 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={(e) => {
                                e.stopPropagation()
                                if (modalSlider?.current) {
                                    modalSlider.current.prev()
                                }
                            }}
                            aria-label="Imagem anterior"
                            type="button"
                        >
                            <span className="text-2xl text-gray-700 font-bold">‹</span>
                        </button>

                        <button
                            className="hidden md:block absolute -right-16 top-1/2 -translate-y-1/2 border border-gray-300 bg-white/80 hover:bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-20 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={(e) => {
                                e.stopPropagation()
                                if (modalSlider?.current) {
                                    modalSlider.current.next()
                                }
                            }}
                            aria-label="Próxima imagem"
                            type="button"
                        >
                            <span className="text-2xl text-gray-700 font-bold">›</span>
                        </button>

                        <button
                            className="mb-2 mr-2 text-white hover:text-red-400 text-3xl font-bold z-10 transition-all duration-200 self-end cursor-pointer bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-red-500"
                            onClick={closeModal}
                            aria-label="Fechar galeria"
                        >
                            ×
                        </button>

                        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-full animate-fadeIn">
                            <div className="relative">
                                <div ref={modalSliderRef} className="keen-slider rounded-t-2xl">
                                    {selectedImages.map((src, idx) => (
                                        <div
                                            key={`modal-${idx}`}
                                            className="keen-slider__slide flex items-center justify-center bg-gray-50"
                                        >
                                            <ImageWithLoading
                                                src={src || "/placeholder.svg"}
                                                alt={`Imagem ${idx + 1} de ${selectedImages.length}`}
                                                className="w-full max-h-[50vh] md:max-h-[70vh] object-contain"
                                                loading="eager"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <button
                                    className="md:hidden absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        if (modalSlider?.current) {
                                            modalSlider.current.prev()
                                        }
                                    }}
                                    aria-label="Imagem anterior"
                                >
                                    <span className="text-xl font-bold">‹</span>
                                </button>

                                <button
                                    className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        if (modalSlider?.current) {
                                            modalSlider.current.next()
                                        }
                                    }}
                                    aria-label="Próxima imagem"
                                >
                                    <span className="text-xl font-bold">›</span>
                                </button>
                            </div>

                            <div className="flex justify-center gap-2 py-4 bg-white">
                                <div className="flex items-center gap-2 max-w-full h-5 overflow-x-auto px-4">
                                    {selectedImages.map((_, idx) => (
                                        <button
                                            key={idx}
                                            className={`flex-shrink-0 w-3 h-3 rounded-full transition-all duration-200 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-300 ${idx === currentIdx ? "bg-blue-600 scale-125 shadow-lg" : "bg-gray-300 hover:bg-gray-400"
                                                }`}
                                            aria-label={`Ir para imagem ${idx + 1}`}
                                            type="button"
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                                {currentIdx + 1} / {selectedImages.length}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
