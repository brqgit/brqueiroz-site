import { Trans, useTranslation } from "react-i18next";
import React, { useState } from "react";
import { Check, ChevronRight } from "lucide-react"
import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";

import { getPartnersLogos } from "~/lib/partners-logos";

export default function Case() {
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

    const [modalOpen, setModalOpen] = useState(false);
    const [currentIdx, setCurrentIdx] = useState(0);

    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: { perView: 1, spacing: 8 },
    });

    const [modalSliderRef, modalSlider] = useKeenSlider<HTMLDivElement>({
        initial: currentIdx,
        loop: true,
        slides: { perView: 1, spacing: 8 },
        slideChanged(s) {
            setCurrentIdx(s.track.details.rel);
        }
    });

    return (
        <div className="w-full h-full bg-gradient-to-br from-[#0a1525] to-[#0a0f18] text-white">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            Lorem ipsum dolor sit amet
                        </h1>
                        <div className="w-24 h-1 bg-[#1e6cd3]"></div>
                        <p className="text-gray-300 text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="text-gray-300 text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="text-gray-300 text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <div className="relative w-80 h-80 md:w-96 md:h-96">
                            <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden cursor-pointer">
                                {images.map((src, idx) => (
                                    <div
                                        key={src}
                                        className="keen-slider__slide flex items-center justify-center"
                                        onClick={() => { setModalOpen(true); setCurrentIdx(idx); }}
                                    >
                                        <img
                                            src={src}
                                            alt={`Case ${idx + 1}`}
                                            width={400}
                                            height={400}
                                            className="w-[400px] h-[400px] object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="bg-gradient-to-r from-[#1e6cd3] to-[#3b82f6] rounded-xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        <div className="md:col-span-2">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("about.ready-elevate-technologies")}</h2>
                            <p className="text-white/90 mb-0 md:mb-0 md:pr-8">
                                {t("about.p5")}
                            </p>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <a
                                href="mailto:contato@brqueiroz.com.br"
                                className="inline-flex items-center bg-white text-[#1e6cd3] hover:bg-gray-100 transition-colors px-6 py-3 rounded-md font-medium"
                            >
                                {t("talk-to-us")}
                                <ChevronRight className="ml-2 h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

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
                            <button
                                // onClick={() => modalSlider?.prev()}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl text-blue-500 hover:text-blue-700 bg-transparent border-none shadow-none p-0 z-10 transition-colors duration-200"
                                aria-label="Anterior"
                            >
                                &#8592;
                            </button>
                            <button
                                // onClick={() => modalSlider?.next()}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl text-blue-500 hover:text-blue-700 bg-transparent border-none shadow-none p-0 z-10 transition-colors duration-200"
                                aria-label="Próximo"
                            >
                                &#8594;
                            </button>
                            <div ref={modalSliderRef} className="keen-slider rounded-t-2xl">
                                {images.map((src, idx) => (
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
                                {images.map((_, idx) => (
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
