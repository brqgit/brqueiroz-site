import LogoCarousel from "~/components/logo-carousel";
import ServiceCard from "~/components/service-card";
import StatCard from "~/components/star-card";
import TestimonialCard from "~/components/testimonial-card";
import { getAllServices } from "~/lib/services";
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
    X,
    Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import AboutUs from "~/about-us/about-us";
import { useState } from "react";

export default function HomePage() {
    const services = getAllServices();
    const [showAbout, setShowAbout] = useState(false);

    return (
        <>
            <LogoCarousel />
            <section id="sobre-nós" className="py-16 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
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
                                Saiba mais
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

                            {services.map((service) => (
                                <ServiceCard
                                    key={service.slug}
                                    title={service.title}
                                    description={service.description}
                                    icon={service.icon}
                                    path={`/services/${service.slug}`}
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
                            CASOS DE <span className="text-blue-600">SUCESSO</span>
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                            Conheça alguns dos nossos casos de sucesso e veja o que nossos clientes têm a dizer sobre nossos serviços.
                        </p>
                    </div>

                    <Carousel itemsPerPage={4} showArrows={false} preserveGrid={true} gridClassName="grid md:grid-cols-3 gap-8">
                        {/* <TestimonialCard
                            name="Migração de Infraestrutura de TI"
                            position="Eventos e Turismo"
                            testimonial="Uma empresa do setor de eventos e turismo contratou a BRQueiroz para migrar 700 caixas de e-mail do Exchange Server para o Exchange Online do Microsoft 365 e 14TB de dados de diferentes hosts Windows Server para o SharePoint Online. Durante a migração, todas as caixas de e-mail foram transferidas com sucesso, incluindo assinaturas, agendas e permissões. Além disso, a empresa reformulou sua estrutura de e-mails e comunicação, segmentando empresas em diferentes Tenants do Office365 e ativando novos recursos de compartilhamento de arquivos via SharePoint. Também foi implementado o Microsoft Teams para reuniões via áudio e videoconferência. Com essas mudanças, a empresa agora possui uma infraestrutura de TI moderna e eficiente, que apoia suas operações diárias e contribui para seu crescimento contínuo."
                            image="/placeholder.svg"
                        />
                        <TestimonialCard
                            name="Migração de Infraestrutura de TI"
                            position="Eventos e Turismo"
                            testimonial="Uma empresa do setor de eventos e turismo contratou a BRQueiroz para migrar 700 caixas de e-mail do Exchange Server para o Exchange Online do Microsoft 365 e 14TB de dados de diferentes hosts Windows Server para o SharePoint Online. Durante a migração, todas as caixas de e-mail foram transferidas com sucesso, incluindo assinaturas, agendas e permissões. Além disso, a empresa reformulou sua estrutura de e-mails e comunicação, segmentando empresas em diferentes Tenants do Office365 e ativando novos recursos de compartilhamento de arquivos via SharePoint. Também foi implementado o Microsoft Teams para reuniões via áudio e videoconferência. Com essas mudanças, a empresa agora possui uma infraestrutura de TI moderna e eficiente, que apoia suas operações diárias e contribui para seu crescimento contínuo."
                            image="/placeholder.svg"
                        />
                        <TestimonialCard
                            name="Migração de Infraestrutura de TI"
                            position="Eventos e Turismo"
                            testimonial="Uma empresa do setor de eventos e turismo contratou a BRQueiroz para migrar 700 caixas de e-mail do Exchange Server para o Exchange Online do Microsoft 365 e 14TB de dados de diferentes hosts Windows Server para o SharePoint Online. Durante a migração, todas as caixas de e-mail foram transferidas com sucesso, incluindo assinaturas, agendas e permissões. Além disso, a empresa reformulou sua estrutura de e-mails e comunicação, segmentando empresas em diferentes Tenants do Office365 e ativando novos recursos de compartilhamento de arquivos via SharePoint. Também foi implementado o Microsoft Teams para reuniões via áudio e videoconferência. Com essas mudanças, a empresa agora possui uma infraestrutura de TI moderna e eficiente, que apoia suas operações diárias e contribui para seu crescimento contínuo."
                            image="/placeholder.svg"
                        /> */}

                        {/* O trecho destacado contém **1.396 caracteres**, incluindo espaços. */}
                        <TestimonialCard
                            name="Migração de Infraestrutura de TI"
                            position="Eventos e Turismo"
                            testimonial="Uma empresa do setor de eventos e turismo contratou a BRQueiroz para migrar 700 caixas de e-mail do Exchange Server para o Exchange Online do Microsoft 365 e 14TB de dados de diferentes hosts Windows Server para o SharePoint Online. Durante a migração, todas as caixas de e-mai"
                            image="/placeholder.svg"
                        />
                        <TestimonialCard
                            name="Migração de Infraestrutura de TI"
                            position="Eventos e Turismo"
                            testimonial="Uma empresa do setor de eventos e turismo contratou a BRQueiroz para migrar 700 caixas de e-mail do Exchange Server para o Exchange Online do Microsoft 365 e 14TB de dados de diferentes hosts Windows Server para o SharePoint Online. Durante a migração, todas as caixas de e-mai"
                            image="/placeholder.svg"
                        />
                        <TestimonialCard
                            name="Migração de Infraestrutura de TI"
                            position="Eventos e Turismo"
                            testimonial="Uma empresa do setor de eventos e turismo contratou a BRQueiroz para migrar 700 caixas de e-mail do Exchange Server para o Exchange Online do Microsoft 365 e 14TB de dados de diferentes hosts Windows Server para o SharePoint Online. Durante a migração, todas as caixas de e-mai"
                            image="/placeholder.svg"
                        />
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