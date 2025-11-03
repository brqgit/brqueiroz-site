import { Trans, useTranslation } from "react-i18next";
import { useState } from "react";
import { Award, CheckCircle, Clock, Users, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import AboutUs from "~/about-us/about-us";
import Case from "~/testimonial/testimonial";

import LogoCarousel from "~/components/logo-carousel";
import ServiceCard from "~/components/service-card";
import StatCard from "~/components/star-card";
import TestimonialCard from "~/components/testimonial-card";
import { Carousel } from "~/components/carousel";
import ThirdPartyPostsSection from "~/components/thrid-party-posts";

import { getAllServices } from "~/lib/services";
import { getAllTestimonials } from "~/lib/testimonials";

import type { Testimonial } from "~/types/testimonials";

export default function HomePage() {
    const { t } = useTranslation();
    const services = getAllServices(t);
    const testimonials = getAllTestimonials(t);
    const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
    const [showAbout, setShowAbout] = useState(false);
    const [showCase, setShowCase] = useState(false);

    return (
        <>
            <LogoCarousel />
            <ThirdPartyPostsSection />

            <section id="about-us" className="py-16 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
                <motion.div
                    className="max-w-7xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-12">
                            <motion.h2
                                className="text-center text-3xl font-bold mb-10"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <Trans
                                    i18nKey="about-us"
                                    components={[
                                        <span />,
                                        <span className="text-blue-600" />
                                    ]}
                                />
                            </motion.h2>
                            <div className="grid lg:grid-cols-2 gap-12">
                                <motion.div
                                    className="space-y-6"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <p className="text-gray-700 text-justify">
                                        {t("home.about.p1")}
                                    </p>
                                    <p className="text-gray-700 text-justify">
                                        {t("home.about.p2")}
                                    </p>
                                    <p className="text-gray-700 text-justify">
                                        {t("home.about.p3")}
                                    </p>
                                    <p className="text-gray-700 text-justify">
                                        {t("home.about.p4")}
                                    </p>
                                </motion.div>
                                <motion.div
                                    className="
                                        relative h-auto
                                        flex flex-col
                                        md:grid md:grid-cols-2 md:grid-rows-2 md:gap-5 md:space-y-0
                                        lg:flex lg:flex-row lg:justify-center lg:items-center lg:space-y-6 lg:relative
                                        laptop:flex laptop:flex-row laptop:justify-center laptop:items-center laptop:space-y-6 laptop:relative
                                    "
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <motion.div
                                        className="
                                            w-60 h-60 flex justify-center items-center rounded-lg mx-auto mb-4
                                            md:mb-0 md:w-full md:h-full
                                            lg:absolute lg:top-[10%] lg:left-[5%] lg:w-50 lg:h-50
                                            laptop:absolute laptop:top-[-5%] laptop:left-[20%] laptop:w-60 laptop:h-60
                                        "
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        <img src="/about/22.jpeg" alt="Imagem 1" className="w-full h-full object-cover rounded-lg shadow-lg" />
                                    </motion.div>
                                    <motion.div
                                        className="
                                            w-60 h-60 flex justify-center items-center rounded-lg mx-auto mb-4
                                            md:mb-0 md:w-full md:h-full
                                            lg:absolute lg:top-[48%] lg:left-[28%] lg:transform lg:-translate-x-1/2 lg:w-50 lg:h-50
                                            laptop:absolute laptop:top-[53%] laptop:left-[30%] laptop:transform laptop:-translate-x-1/2 laptop:w-60 laptop:h-60
                                        "
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        <img src="/about/44.png" alt="Imagem 2" className="w-full h-full object-cover rounded-lg shadow-lg" />
                                    </motion.div>
                                    <motion.div
                                        className="
                                            relative
                                            w-60 h-60 flex justify-center items-center rounded-lg mx-auto mb-4
                                            md:mb-0 md:w-full md:h-full
                                            lg:absolute lg:top-[58%] lg:left-[80%] lg:transform lg:-translate-x-1/2 lg:w-50 lg:h-50
                                            laptop:absolute laptop:top-[60%] laptop:left-[75%] laptop:transform laptop:-translate-x-1/2 laptop:w-60 laptop:h-60
                                        "
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        <img src="/about/33.png" alt="Imagem 4" className="w-full h-full object-cover rounded-lg shadow-lg" />
                                        <div className="absolute -bottom-2 -left-4 bg-[#1e6cd3] p-2 rounded-lg text-white w-fit max-w-[90%]">
                                            <p
                                            className="
                                                text-[14px] font-bold
                                                lg:text-[11px]
                                                laptop:text-[14px]
                                            "
                                            >{t("about.ceo-founder-title")}</p>
                                            <p
                                            className="
                                                text-[11px] uppercase
                                                lg:text-[9px]
                                                laptop:text-[11px]
                                            "
                                            >Valdemir José de Queiroz</p>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        className="
                                            w-60 h-60 flex justify-center items-center rounded-lg mx-auto
                                            md:mb-0 md:w-full md:h-full
                                            lg:absolute lg:top-[20%] lg:left-[78%] lg:transform lg:-translate-x-1/2 lg:w-50 lg:h-50
                                            laptop:absolute laptop:top-[1%] laptop:left-[85%] laptop:transform laptop:-translate-x-1/2 laptop:w-60 laptop:h-60
                                        "
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        <img src="/about/11.jpeg" alt="Imagem 5" className="w-full h-full object-cover rounded-lg shadow-lg" />
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                        <div className="mt-12 text-center">
                            <button
                                className="
                                inline-flex items-center justify-center px-6 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transform hover:scale-105
                                laptop:mt-10
                                "
                                onClick={() => setShowAbout(true)}
                            >
                                {t("learn-more")}
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </section>

            <AnimatePresence>
                {showAbout && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-white"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        style={{
                            overflowY: "auto",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        <style>
                            {`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                `}
                        </style>
                        <div className="absolute top-0 right-0 p-6 z-10">
                            <button
                                className="text-white font-bold text-lg"
                                onClick={() => setShowAbout(false)}
                                aria-label="Fechar"
                            >
                                <motion.div
                                    className="cursor-pointer"
                                    whileHover={{
                                        scale: 1.2,
                                        rotate: 90,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <X className="h-14 w-14" />
                                </motion.div>
                            </button>
                        </div>
                        <div className="w-full flex flex-col hide-scrollbar">
                            <AboutUs />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <section className="py-12 bg-[#0a1525]">
                <motion.div
                    className="max-w-7xl mx-auto px-4 md:px-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <StatCard number="20+" text={t("years-of-experience")} icon={<Clock className="h-8 w-8 text-white" />} />
                            <StatCard number="5000+" text={t("clients-served")} icon={<Users className="h-8 w-8 text-white" />} />
                            <StatCard number="10000+" text={t("projects-completed")} icon={<CheckCircle className="h-8 w-8 text-white" />} />
                            <StatCard number="99.9%" text={t("satisfaction-guaranteed")} icon={<Award className="h-8 w-8 text-white" />} />
                        </div>
                    </div>
                </motion.div>
            </section>
            <section id="services" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
                <motion.div
                    className="max-w-7xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">
                            <Trans
                                i18nKey="our-services"
                                components={[
                                    <span />,
                                    <span className="text-blue-600" />
                                ]}
                            />
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                            {t("our-services-description")}
                        </p>
                    </div>
                    <div>
                        <Carousel itemsPerPage={4} showArrows={false} preserveGrid={true} gridClassName="grid md:grid-cols-2 gap-8">

                            {services.map((service) => (
                                <ServiceCard
                                    key={service.slug}
                                    title={service.title}
                                    description={service.description}
                                    icon={service.icon}
                                    path={service.slug}
                                />
                            ))}
                        </Carousel>
                    </div>
                </motion.div>
            </section>

            <section id="cases" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
                <motion.div
                    className="max-w-7xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">
                            <Trans
                                i18nKey="cases-success"
                                components={[
                                    <span />,
                                    <span className="text-blue-600" />
                                ]}
                            />
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                            {t("cases-success-description")}
                        </p>
                    </div>

                    <Carousel itemsPerPage={3} showArrows={false} preserveGrid={true} gridClassName="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, idx) => (
                            <TestimonialCard
                                key={idx}
                                name={testimonial.title}
                                position={testimonial.position}
                                testimonial={testimonial.testimonial}
                                image={testimonial.image}
                                onClick={() => {
                                    setSelectedTestimonial(testimonial)
                                    setShowCase(true)
                                }}
                            />
                        ))}
                    </Carousel>
                </motion.div>
            </section>

            <AnimatePresence>
                {showCase && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-white"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        style={{
                            overflowY: "auto",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        <style>
                            {`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                `}
                        </style>
                        <div className="absolute top-0 right-0 p-6 z-10">
                            <button
                                className="text-white font-bold text-lg"
                                onClick={() => {
                                    setShowCase(false)
                                    setSelectedTestimonial(null)
                                }}
                                aria-label="Fechar"
                            >
                                <motion.div
                                    className="cursor-pointer"
                                    whileHover={{
                                        scale: 1.2,
                                        rotate: 90,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <X className="h-14 w-14" />
                                </motion.div>
                            </button>
                        </div>
                        <div className="w-full flex flex-col hide-scrollbar">
                            <Case testimonial={selectedTestimonial} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
