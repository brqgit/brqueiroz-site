import { useState } from "react";

import Card from "./card";
import { motion } from "framer-motion";

export default function AppHeader() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Artigo 1",
            description: "Descrição",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
            title: "Artigo 2",
            description: "Descrição",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
            title: "Artigo 3",
            description: "Descrição",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
    ];

    return (
        <header id="header" className="relative h-full md:h-[89vh] overflow-hidden pt-[60px] bg-gray-950 text-white">
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
                    <div className="md:w-[80%] max-w-[1200px] flex justify-between p-5 flex-col md:flex-row">
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
                                className="text-right font-sans text-[18px]"
                                style={{ fontFamily: "'Eurostile Black', sans-serif" }}
                            >
                                A TECNOLOGIA QUE SUA EMPRESA PRECISA PARA
                            </h2>
                            <h1
                                className="text-right font-bold text-[40px]"
                                style={{ fontFamily: "'Eurostile Black', sans-serif" }}
                            >
                                ATINGIR O <span className="text-blue-500">PRÓXIMO NÍVEL</span>
                            </h1>
                            <h4
                                className="text-right italic text-[15px]"
                                style={{ fontFamily: "'Eurostile Black', sans-serif" }}
                            >
                                Para uma empresa crescer sólida e com força, invista no que há de melhor
                            </h4>

                            <hr className="border-t border-white my-6 w-25 ml-auto" />

                            <div className="flex justify-end mt-4 space-x-2">
                                <a
                                    href="/consultoria"
                                    className="border border-white text-white text-xs px-4 py-2 rounded-sm transform transition-transform hover:scale-105 hover:bg-white hover:text-gray-900"
                                >
                                    Consultoria
                                </a>
                                <a
                                    href="/infraestrutura"
                                    className="border border-white text-white text-xs px-4 py-2 rounded-sm transform transition-transform hover:scale-105 hover:bg-white hover:text-gray-900"
                                >
                                    Infraestrutura
                                </a>
                                <a
                                    href="/seguranca"
                                    className="border border-white text-white text-xs px-4 py-2 rounded-sm transform transition-transform hover:scale-105 hover:bg-white hover:text-gray-900"
                                >
                                    Segurança
                                </a>
                                <a
                                    href="/cloud-computing"
                                    className="border border-white text-white text-xs px-4 py-2 rounded-sm transform transition-transform hover:scale-105 hover:bg-white hover:text-gray-900"
                                >
                                    Cloud Computing
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
                                    imageSrc="/placeholder.svg"
                                    imageAlt="Product image"
                                    title={slides[currentSlide].title}
                                    description={slides[currentSlide].description}
                                    content={slides[currentSlide].content}
                                    buttonText="Leia mais"
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