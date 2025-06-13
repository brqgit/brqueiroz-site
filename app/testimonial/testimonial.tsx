import { Trans, useTranslation } from "react-i18next";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { getPartnersLogos } from "~/lib/partners-logos";
import FeaturedMessage from "~/components/featured-message";
import type { Testimonial } from "~/types/testimonials";
import { s } from "framer-motion/client";


interface CaseProps {
    testimonial: Testimonial | null
}

export default function Testimonial({ testimonial }: CaseProps) {
    if (!testimonial) return null;

    const { t } = useTranslation();

    const partners = getPartnersLogos();

    const values = t("about.values", { returnObjects: true }) as { name: string; desc: string }[];

    const images = [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
    ]

    const images2 = [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
    ]

    const images3 = [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
    ]

    const [modalOpen, setModalOpen] = useState(false);
    const [currentIdx, setCurrentIdx] = useState(0);

    const [sliderRef1] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: { perView: 1 },
    });
    const [sliderRef2] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: { perView: 1 },
    });
    const [sliderRef3] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: { perView: 1 },
    });

    const [modalSliderRef, modalSlider] = useKeenSlider<HTMLDivElement>({
        initial: currentIdx,
        loop: true,
        slides: { perView: 1, spacing: 8 },
        slideChanged(s) {
            setCurrentIdx(s.track.details.rel);
        }
    });

    const [selectedImages, setSelectedImages] = useState<string[]>([])

    const basicInfo = (
        <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold mb-2">{testimonial.title}</h2>
            <p className="text-gray-600 mb-4">{testimonial.position}</p>
            <p className="text-gray-800">{testimonial.testimonial}</p>
        </div>
    )

    if (!testimonial.images || testimonial.images.length === 0) {
        return (
            <div className="p-6">
                {basicInfo}
            </div>
        )
    }

    const sectionSize = Math.ceil(testimonial.images.length / 3)
    const firstSection = testimonial.images.slice(0, sectionSize)
    const secondSection = testimonial.images.slice(sectionSize, sectionSize * 2)
    const thirdSection = testimonial.images.slice(sectionSize * 2)

    const handleSectionClick = (sectionImages: string[]) => {
        console.log("Section clicked:", sectionImages);
        setSelectedImages(sectionImages)
        setModalOpen(true)
    }

    return (
        <div className="w-full h-100% bg-gradient-to-br from-[#0a1525] to-[#0a0f18] text-white">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            {testimonial?.title}
                        </h1>
                        <div className="w-24 h-1 bg-[#1e6cd3]"></div>
                        {Array.isArray(testimonial.fullDescription) ? (
                            testimonial.fullDescription.map((paragraph, index) => (
                                <p className="text-gray-300 text-lg">
                                    {paragraph}
                                </p>
                            ))
                        ) : (
                            <p className="mb-4">{testimonial.fullDescription}</p>
                        )}
                    </div>

                    <div className="relative w-full h-[600px] md:h-[800px]">
                        <div className="absolute left-25 top-15 w-72 h-72 transform -rotate-6">
                            <div ref={sliderRef1} className="keen-slider rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-transform">
                                {firstSection.map((src, idx) => (
                                    <div
                                        key={src}
                                        className="keen-slider__slide"
                                        onClick={() => {
                                            setModalOpen(true);
                                            setCurrentIdx(idx);
                                            handleSectionClick(firstSection);
                                        }}
                                    >
                                        <img
                                            src={src}
                                            alt={`Case 1-${idx + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="absolute right-0 top-1/3 w-80 h-80 transform rotate-3">
                            <div ref={sliderRef2} className="keen-slider rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-transform">
                                {secondSection.map((src, idx) => (
                                    <div
                                        key={src}
                                        className="keen-slider__slide"
                                        onClick={() => {
                                            setModalOpen(true);
                                            setCurrentIdx(idx);
                                            handleSectionClick(secondSection);
                                        }}
                                    >
                                        <img
                                            src={src}
                                            alt={`Case 2-${idx + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="absolute left-20 bottom-0 w-76 h-76 transform rotate-6">
                            <div ref={sliderRef3} className="keen-slider rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-transform">
                                {thirdSection.map((src, idx) => (
                                    <div
                                        key={src}
                                        className="keen-slider__slide"
                                        onClick={() => {
                                            setModalOpen(true);
                                            setCurrentIdx(idx);
                                            handleSectionClick(thirdSection);
                                        }}
                                    >
                                        <img
                                            src={src}
                                            alt={`Case 3-${idx + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <FeaturedMessage />

            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
                    onClick={() => setModalOpen(false)}
                >
                    <div className="relative bg-white rounded-2xl shadow-2xl p-0 max-w-2xl w-full overflow-hidden animate-fadeIn"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-3xl font-bold z-10 transition"
                            onClick={() => setModalOpen(false)}
                            aria-label="Fechar"
                        >
                            &times;
                        </button>
                        <div className="relative">
                            <div ref={modalSliderRef} className="keen-slider rounded-t-2xl">
                                {selectedImages.map((src, idx) => (
                                    <div key={src} className="keen-slider__slide flex items-center justify-center">
                                        <img
                                            src={src}
                                            alt={`Case Modal ${idx + 1}`}
                                            className="w-full max-h-[60vh] object-contain bg-gray-100 rounded-t-2xl"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center gap-2 py-4 bg-white rounded-b-2xl">
                                {selectedImages.map((_, idx) => (
                                    <button
                                        key={idx}
                                        className={`w-3 h-3 rounded-full transition-all ${idx === currentIdx ? "bg-blue-600 scale-125" : "bg-gray-300"
                                            }`}
                                        // onClick={() => modalSlider?.moveToIdx(idx)}
                                        aria-label={`Ir para imagem ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
