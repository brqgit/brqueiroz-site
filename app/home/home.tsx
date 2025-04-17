import React, { useState } from "react";
import LogoCarousel from "~/components/logo-carousel";
import ServiceCard from "~/components/service-card";
import StatCard from "~/components/star-card";
import { Carousel } from "~/components/carousel";
import {
    Award,
    CheckCircle,
    Clock,
    Cloud,
    Cpu,
    Laptop,
    LineChart,
    Network,
    Server,
    Shield,
    Users,
    Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import AppHeader from "~/components/app-header";

export default function HomePage() {
    return (
        <>
            <AppHeader />
            <LogoCarousel />
            <section id="sobre-nós" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
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
                                SOBRE <span className="text-blue-600">NÓS</span>
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
                                        A BRQueiroz foi idealizada com base no crescimento constante que o mundo digital tem tido, que gera a
                                        necessidade de soluções objetivas e confiáveis na estruturação e crescimento de uma empresa.
                                    </p>
                                    <p className="text-gray-700">
                                        Agora com mais de 20 anos no mercado, a BRQueiroz se mostra como uma empresa sólida e confiável, trazendo
                                        soluções de qualidade para seus clientes. Nossa equipe é formada por profissionais altamente qualificados
                                        e certificados nas principais tecnologias do mercado.
                                    </p>
                                    <p className="text-gray-700">
                                        Nosso compromisso é oferecer soluções personalizadas que atendam às necessidades específicas de cada
                                        cliente, garantindo a máxima eficiência e segurança em todos os projetos. Trabalhamos com as melhores
                                        práticas do mercado e estamos sempre atualizados com as últimas tendências tecnológicas.
                                    </p>
                                    <p className="text-gray-700">
                                        Atendemos empresas de todos os portes e segmentos, desde pequenas empresas até grandes corporações, sempre
                                        com o mesmo nível de excelência e dedicação. Nossa missão é ser um parceiro estratégico para nossos
                                        clientes, ajudando-os a alcançar seus objetivos de negócio através da tecnologia.
                                    </p>
                                </motion.div>
                                <motion.div
                                    className="relative h-[500px] space-y-6"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <motion.div
                                        className="absolute top-[-5%] left-[30%] w-60 h-60 flex justify-center items-center rounded-lg"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        <img src="/about/4.jpg" alt="Imagem 1" className="w-full h-full object-cover rounded-lg shadow-lg" />
                                    </motion.div>
                                    <motion.div
                                        className="absolute top-[50%] left-[30%] w-60 h-60 flex justify-center items-center rounded-lg transform -translate-x-1/2"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        <img src="/about/5.jpg" alt="Imagem 2" className="w-full h-full object-cover rounded-lg shadow-lg" />
                                    </motion.div>
                                    <motion.div
                                        className="absolute top-[60%] left-[70%] w-44 h-44 flex justify-center items-center rounded-lg transform -translate-x-1/2"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        <img src="/about/3.png" alt="Imagem 4" className="w-full h-full object-cover rounded-lg shadow-lg" />
                                    </motion.div>
                                    <motion.div
                                        className="absolute top-[20%] left-[90%] w-40 h-40 flex justify-center items-center rounded-lg transform -translate-x-1/2"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        <img src="/placeholder.svg" alt="Imagem 5" className="w-full h-full object-cover rounded-lg shadow-lg" />
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                        <div className="mt-12 text-center">
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Saiba mais
                            </button>
                        </div>
                    </div>
                </motion.div>
            </section>
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
                            <StatCard number="20+" text="Anos de Experiência" icon={<Clock className="h-8 w-8 text-white" />} />
                            <StatCard number="500+" text="Clientes Atendidos" icon={<Users className="h-8 w-8 text-white" />} />
                            <StatCard number="1000+" text="Projetos Realizados" icon={<CheckCircle className="h-8 w-8 text-white" />} />
                            <StatCard number="99.9%" text="Satisfação Garantida" icon={<Award className="h-8 w-8 text-white" />} />
                        </div>
                    </div>
                </motion.div>
            </section>
            <section id="serviços" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
                <motion.div
                    className="max-w-7xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">
                            NOSSOS <span className="text-blue-600">SERVIÇOS</span>
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                            Oferecemos uma ampla gama de serviços de tecnologia da informação para atender às necessidades específicas
                            da sua empresa. Conheça nossas soluções:
                        </p>
                    </div>
                    <div>
                        <Carousel itemsPerPage={4} showArrows={false} preserveGrid={true} gridClassName="grid md:grid-cols-2 gap-8">
                            <ServiceCard
                                title="Microsoft 365"
                                description="Transforme sua empresa com nossa consultoria em Microsoft 365. Analisamos sua infraestrutura, implementamos soluções personalizadas e otimizamos processos, colaborando para aumentar a produtividade e eficiência."
                                icon={<Laptop className="h-10 w-10 text-[#1c5abd]" />}
                                path=""
                            />
                            <ServiceCard
                                title="Consultoria"
                                description="Planeje a melhor rota p/ soluções de qualidade. Nossa equipe de especialistas analisa sua infraestrutura atual e propõe melhorias estratégicas para otimizar seus recursos tecnológicos."
                                icon={<LineChart className="h-10 w-10 text-[#1c5abd]" />}
                                path=""
                            />
                            <ServiceCard
                                title="Infraestrutura"
                                description="Estrutura essencial para um crescimento sólido. Implementamos e gerenciamos toda a infraestrutura de TI da sua empresa, garantindo estabilidade, segurança e alto desempenho."
                                icon={<Server className="h-10 w-10 text-[#1c5abd]" />}
                                path=""
                            />
                            <ServiceCard
                                title="Segurança da Informação"
                                description="Proteja seus dados e sistemas contra ameaças digitais. Oferecemos soluções completas de segurança, incluindo firewall, antivírus, backup, criptografia e treinamento de usuários."
                                icon={<Shield className="h-10 w-10 text-[#1c5abd]" />}
                                path=""
                            />
                            <ServiceCard
                                title="Cloud Computing"
                                description="Migre seus sistemas para a nuvem e ganhe flexibilidade, escalabilidade e redução de custos. Somos especialistas em soluções Microsoft Azure."
                                icon={<Cloud className="h-10 w-10 text-[#1c5abd]" />}
                                path=""
                            />
                            <ServiceCard
                                title="Redes e Conectividade"
                                description="Projetos e implementação de redes estruturadas, wireless, VPN, SD-WAN e soluções de conectividade para garantir a comunicação eficiente entre seus sistemas e colaboradores."
                                icon={<Network className="h-10 w-10 text-[#1c5abd]" />}
                                path=""
                            />
                            <ServiceCard
                                title="Suporte Técnico"
                                description="Suporte técnico especializado e proativo, com atendimento remoto e presencial, para resolver problemas rapidamente e minimizar o impacto em suas operações."
                                icon={<Zap className="h-10 w-10 text-[#1c5abd]" />}
                                path=""
                            />
                            <ServiceCard
                                title="Virtualização"
                                description="Otimize seus recursos de hardware com soluções de virtualização de servidores, desktops e aplicações, aumentando a eficiência e reduzindo custos operacionais."
                                icon={<Cpu className="h-10 w-10 text-[#1c5abd]" />}
                                path=""
                            />
                        </Carousel>
                    </div>
                </motion.div>
            </section>
        </>
    );
}