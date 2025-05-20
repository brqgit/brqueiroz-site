import { Trans, useTranslation } from "react-i18next";
import { useState } from "react";
import { Award, CheckCircle, Clock, Users, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import AboutUs from "~/about-us/about-us";

import LogoCarousel from "~/components/logo-carousel";
import ServiceCard from "~/components/service-card";
import StatCard from "~/components/star-card";
import TestimonialCard from "~/components/testimonial-card";
import { Carousel } from "~/components/carousel";

import { getAllServices } from "~/lib/services";
import { getAllTestimonials } from "~/lib/testimonials";

export default function HomePage() {
    const { t } = useTranslation();
    const services = getAllServices(t);
    const testimonials = getAllTestimonials(t);
    const [showAbout, setShowAbout] = useState(false);

    return (
        <>
            <LogoCarousel />
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
                                {/* SOBRE <span className="text-blue-600">NÓS</span> */}
                                <Trans
                                    i18nKey="about-us"
                                    components={[
                                        <span />,
                                        <span className="text-blue-600" />
                                    ]}
                                />
                            </motion.h2>
                            <div className="grid md:grid-cols-2 gap-12">
                                <motion.div
                                    className="space-y-6"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <p className="text-gray-700">
                                        {t("home.about.p1")}
                                    </p>
                                    <p className="text-gray-700">
                                        {t("home.about.p2")}
                                    </p>
                                    <p className="text-gray-700">
                                        {t("home.about.p3")}
                                    </p>
                                    <p className="text-gray-700">
                                        {t("home.about.p4")}
                                    </p>
                                </motion.div>
                                <motion.div
                                    className="relative h-auto md:h-[500px] flex flex-col md:space-y-6 md:flex-row md:justify-center md:items-center"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <motion.div
                                        className="w-60 h-60 flex justify-center items-center rounded-lg mx-auto mb-4 md:mb-0 md:absolute md:top-[-5%] md:left-[30%]"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        <img src="/about/22.jpeg" alt="Imagem 1" className="w-full h-full object-cover rounded-lg shadow-lg" />
                                    </motion.div>
                                    <motion.div
                                        className="w-60 h-60 flex justify-center items-center rounded-lg mx-auto mb-4 md:mb-0 md:absolute md:top-[50%] md:left-[30%] md:transform md:-translate-x-1/2"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        <img src="/about/44.png" alt="Imagem 2" className="w-full h-full object-cover rounded-lg shadow-lg" />
                                    </motion.div>
                                    <motion.div
                                        className="w-60 h-60 flex justify-center items-center rounded-lg mx-auto mb-4 md:mb-0 md:absolute md:top-[60%] md:left-[77%] md:transform md:-translate-x-1/2"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        <img src="/about/33.png" alt="Imagem 4" className="w-full h-full object-cover rounded-lg shadow-lg" />
                                    </motion.div>
                                    <motion.div
                                        className="w-60 h-60 flex justify-center items-center rounded-lg mx-auto md:mb-0 md:absolute md:top-[2%] md:left-[95%] md:transform md:-translate-x-1/2"
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
                            {/* <button
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Saiba mais
                            </button> */}
                            <button
                                className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transform hover:scale-105"
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
                                <X className="h-14 w-14" />
                            </button>
                        </div>
                        <div className="w-full h-full flex flex-col hide-scrollbar">
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
                            {/* NOSSOS <span className="text-blue-600">SERVIÇOS</span> */}
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
                            {/* CASOS DE <span className="text-blue-600">SUCESSO</span> */}
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
                            />
                        ))}
                    </Carousel>

                    {/* <div className="mt-12 text-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                            Ver Mais Casos de Sucesso
                        </button>
                    </div> */}
                </motion.div>
            </section>
        </>
    );
}