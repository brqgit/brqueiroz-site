import { Trans, useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { getAllArticles } from "~/lib/articles";
import Card from "./card";

export default function AppHeader() {
    const { t } = useTranslation();

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = getAllArticles()

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [slides.length]);


    return (
        <header id="header" className="relative h-full lg:h-[840px] overflow-hidden pt-[60px] bg-gray-950 text-white">

            <video
                className="absolute top-0 left-0 w-full h-[100%] object-cover"
                autoPlay
                loop
                muted
            >
                <source src="/bg-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-0 left-0 w-full h-[100%] bg-[rgba(15,19,28,0.5)]"></div>

            <motion.div
                className="relative flex items-center justify-center h-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="relative flex justify-center p-5 z-1 w-full">
                    <div className="w-full lg:w-[80%] max-w-[1200px] flex justify-between p-5 flex-col md:flex-row">
                        <motion.div
                            className="md:w-[45%]"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="flex justify-center md:justify-end">
                                <img src="/brqueiroz_logo-branca_3s.webp"
                                    alt=""
                                    width="300"
                                    height="300"
                                />
                            </div>
                            <h2
                                className="text-center md:text-right font-sans text-[15px] md:text-[18px]"
                                style={{ fontFamily: "'Eurostile Black', sans-serif" }}
                            >
                                {t("header.h2")}
                            </h2>
                            <h1
                                className="text-center md:text-right font-bold text-[22px] md:text-[40px]"
                                style={{ fontFamily: "'Eurostile Black', sans-serif" }}
                            >
                                <Trans
                                    i18nKey="header.h1"
                                    components={[
                                        <span className="text-blue-500" />
                                    ]}
                                />
                            </h1>
                            <h4
                                className="text-center md:text-right italic text-[15px]"
                                style={{ fontFamily: "'Eurostile Black', sans-serif" }}
                            >
                                {t("header.h4")}
                            </h4>

                            <hr className="border-t border-white my-6 w-25 m-auto md:mr-0" />

                            <div className="flex justify-center md:justify-end mt-4 flex-wrap gap-2">
                                <a
                                    href="/services?service=consultoria"
                                    className="border border-white text-white text-xs px-4 py-2 rounded-sm transform transition-transform hover:scale-105 hover:bg-white hover:text-gray-900"
                                >
                                    {t("services.consulting.title")}
                                </a>
                                <a
                                    href="/services?service=infraestrutura"
                                    className="border border-white text-white text-xs px-4 py-2 rounded-sm transform transition-transform hover:scale-105 hover:bg-white hover:text-gray-900"
                                >
                                    {t("services.infrastructure.title")}
                                </a>
                                <a
                                    href="/services?service=seguranca"
                                    className="border border-white text-white text-xs px-4 py-2 rounded-sm transform transition-transform hover:scale-105 hover:bg-white hover:text-gray-900"
                                >
                                    {t("services.security.title")}
                                </a>
                                <a
                                    href="/services?service=cloud"
                                    className="border border-white text-white text-xs px-4 py-2 rounded-sm transform transition-transform hover:scale-105 hover:bg-white hover:text-gray-900"
                                >
                                    {t("services.cloud.title")}
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="md:w-[45%] flex flex-col items-center justify-center mt-10 md:mt-0"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div className="w-full overflow-hidden relative flex flex-col items-center justify-center">
                                <Card
                                    imageSrc={slides[currentSlide].image}
                                    imageAlt="Product image"
                                    title={t(slides[currentSlide].title)}
                                    description={t(slides[currentSlide].description)}
                                    content={t(slides[currentSlide].content)}
                                    link={slides[currentSlide].link}
                                    buttonText={t("learn-more")}
                                    onButtonClick={() => alert("Button clicked!")}
                                    className="mb-4"
                                />
                                <div className="w-auto max-w-md flex justify-center mt-4 w-[300px]">
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`w-3 h-3 mx-0.5 rounded-full ${currentSlide === index ? "bg-blue-500" : "bg-gray-300"
                                                }`}
                                            onClick={() => setCurrentSlide(index)}
                                        ></button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </header>
    )
}