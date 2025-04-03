import React, { useState } from "react";
// import './Home.css';

import LogoCarousel from '~/components/logo-carousel';
import Card from 'app/components/card';
import ImageCarousel from "~/components/image-carousel";
import TestimonialCard from "~/components/testimonial-card";
import ServiceCard from "~/components/service-card";
import { Award, CheckCircle, Clock, Cloud, Code, Cpu, Laptop, LineChart, Mail, MapPin, MessageSquare, Network, Phone, Server, Shield, Users, Zap } from "lucide-react";
import StatCard from "~/components/star-card";
import ServiceCaseCard from "~/components/service-case-card";
import { Carousel } from "~/components/carousel";
import AppNavbar from "~/components/app-navbar";

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { title: "Artigo 1", description: "Descrição", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { title: "Artigo 2", description: "Descrição", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    { title: "Artigo 3", description: "Descrição", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
  ];

  const images = [
    "public/placeholder.svg?height=400&width=600&text=Imagem+1",
    "public/placeholder.svg?height=400&width=600&text=Imagem+2",
    "public/placeholder.svg?height=400&width=600&text=Imagem+3",
    "public/placeholder.svg?height=400&width=600&text=Imagem+4",
  ]

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <header id="header" className="relative h-[80vh] overflow-hidden pt-[60px] bg-gray-950 text-white">
        <video
          className="absolute top-0 left-0 w-full h-[100%] object-cover filter grayscale opacity-50"
          autoPlay
          loop
          muted
        >
          <source src="bg-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-[100%] bg-[rgba(15,19,28,0.5)]"></div>

        <AppNavbar />

        <div className="relative flex items-center justify-center h-full">
          <div className="relative flex justify-center p-5 z-10 w-full">
            <div className="w-[80%] max-w-[1200px] flex justify-between p-5">
              <div className="w-[45%]">
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
              </div>
              <div className="w-[45%] flex flex-col items-center justify-center">
                <div className="w-full overflow-hidden relative">
                  <Card
                    imageSrc="public/placeholder.svg"
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
              </div>
            </div>
          </div>
        </div>
      </header>

      <LogoCarousel />

      <section id="sobre-nós" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-10">
              <img src="brqueiroz_logo-preto_1.5s.webp" alt="" width="300" height="300" />
            </div>
            <h2 className="text-3xl font-bold">
              SOBRE <span className="text-blue-600">NÓS</span>
            </h2>

            <p className="mt-4 text-gray-600 max-w-5xl mx-auto">
              A BRQueiroz foi idealizada com base no crescimento constante que o mundo digital tem tido, que gera a
              necessidade de soluções objetivas e confiáveis na estruturação e crescimento de uma empresa.
            </p>
            <p className="mt-4 text-gray-600 max-w-5xl mx-auto">
              Agora com mais de 20 anos no mercado, a BRQueiroz se mostra como uma empresa sólida e confiável, trazendo
              soluções de qualidade para seus clientes. Nossa equipe é formada por profissionais altamente qualificados
              e certificados nas principais tecnologias do mercado.
            </p>
            <p className="mt-4 text-gray-600 max-w-5xl mx-auto">
              Nosso compromisso é oferecer soluções personalizadas que atendam às necessidades específicas de cada
              cliente, garantindo a máxima eficiência e segurança em todos os projetos. Trabalhamos com as melhores
              práticas do mercado e estamos sempre atualizados com as últimas tendências tecnológicas.
            </p>
            <p className="mt-4 text-gray-600 max-w-5xl mx-auto">
              Atendemos empresas de todos os portes e segmentos, desde pequenas empresas até grandes corporações, sempre
              com o mesmo nível de excelência e dedicação. Nossa missão é ser um parceiro estratégico para nossos
              clientes, ajudando-os a alcançar seus objetivos de negócio através da tecnologia.
            </p>


            <div className="mt-12 text-center">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Saiba mais sobre nós
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="sobre-nós" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              SOBRE <span className="text-blue-600">NÓS</span>
            </h2>
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
          </div>
          <div className="space-y-6">
            <ImageCarousel
              images={images}
              interval={5000}
            />
            <div className="pt-6">
              <h3 className="text-xl font-bold mb-4">Nossa Missão</h3>
              <p className="text-gray-700">
                Fornecer soluções tecnológicas inovadoras e de alta qualidade que impulsionem o crescimento e a
                eficiência dos nossos clientes, sempre com foco na excelência, segurança e satisfação.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Nossa Visão</h3>
              <p className="text-gray-700">
                Ser reconhecida como referência em soluções de tecnologia da informação na região de Ribeirão Preto,
                destacando-se pela qualidade dos serviços, inovação constante e relacionamento duradouro com os
                clientes.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-12 bg-[#0a1525]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard number="20+" text="Anos de Experiência" icon={<Clock className="h-8 w-8 text-white" />} />
            <StatCard number="500+" text="Clientes Atendidos" icon={<Users className="h-8 w-8 text-white" />} />
            <StatCard number="1000+" text="Projetos Realizados" icon={<CheckCircle className="h-8 w-8 text-white" />} />
            <StatCard number="99.9%" text="Satisfação Garantida" icon={<Award className="h-8 w-8 text-white" />} />
          </div>
        </div>
      </section>

      <section id="serviços" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
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
              />
              <ServiceCard
                title="Consultoria"
                description="Planeje a melhor rota p/ soluções de qualidade. Nossa equipe de especialistas analisa sua infraestrutura atual e propõe melhorias estratégicas para otimizar seus recursos tecnológicos."
                icon={<LineChart className="h-10 w-10 text-[#1c5abd]" />}
              />
              <ServiceCard
                title="Infraestrutura"
                description="Estrutura essencial para um crescimento sólido. Implementamos e gerenciamos toda a infraestrutura de TI da sua empresa, garantindo estabilidade, segurança e alto desempenho."
                icon={<Server className="h-10 w-10 text-[#1c5abd]" />}
              // text-blue-600
              />
              <ServiceCard
                title="Segurança da Informação"
                description="Proteja seus dados e sistemas contra ameaças digitais. Oferecemos soluções completas de segurança, incluindo firewall, antivírus, backup, criptografia e treinamento de usuários."
                icon={<Shield className="h-10 w-10 text-[#1c5abd]" />}
              />
              <ServiceCard
                title="Cloud Computing"
                description="Migre seus sistemas para a nuvem e ganhe flexibilidade, escalabilidade e redução de custos. Somos especialistas em soluções Microsoft Azure."
                icon={<Cloud className="h-10 w-10 text-[#1c5abd]" />}
              />
              <ServiceCard
                title="Redes e Conectividade"
                description="Projetos e implementação de redes estruturadas, wireless, VPN, SD-WAN e soluções de conectividade para garantir a comunicação eficiente entre seus sistemas e colaboradores."
                icon={<Network className="h-10 w-10 text-[#1c5abd]" />}
              />
              <ServiceCard
                title="Suporte Técnico"
                description="Suporte técnico especializado e proativo, com atendimento remoto e presencial, para resolver problemas rapidamente e minimizar o impacto em suas operações."
                icon={<Zap className="h-10 w-10 text-[#1c5abd]" />}
              />
              <ServiceCard
                title="Virtualização"
                description="Otimize seus recursos de hardware com soluções de virtualização de servidores, desktops e aplicações, aumentando a eficiência e reduzindo custos operacionais."
                icon={<Cpu className="h-10 w-10 text-[#1c5abd]" />}
              />
            </Carousel>
          </div>
          {/* <div className="mt-12 text-center">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Ver mais serviços
            </button>
          </div> */}
        </div>
      </section>

      <section id="cases" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              CASOS DE <span className="text-blue-600">SUCESSO</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Conheça alguns dos nossos casos de sucesso e veja o que nossos clientes têm a dizer sobre nossos serviços.
            </p>
          </div>

          <div>
            <Carousel itemsPerPage={3} showArrows={false} preserveGrid={true} gridClassName="grid md:grid-cols-3 gap-8">
              <div className="w-[400px]">
                <TestimonialCard
                  name="Empresa Lorem Ipsum Ltda"
                  position="Setor Lorem Ipsum"
                  testimonial="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  image="public/placeholder.svg"
                />
              </div>
              <div className="w-[400px]">
                <TestimonialCard
                  name="Empresa Lorem Ipsum Ltda"
                  position="Setor Lorem Ipsum"
                  testimonial="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  image="public/placeholder.svg"
                />
              </div>
              <div className="w-[400px]">
                <TestimonialCard
                  name="Empresa Lorem Ipsum Ltda"
                  position="Setor Lorem Ipsum"
                  testimonial="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  image="public/placeholder.svg"
                />
              </div>
            </Carousel>
          </div>

          <div className="mt-12 text-center">
            {/* <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Ver Mais Casos de Sucesso
            </button> */}
          </div>
        </div>
      </section>

      <footer id="contato" className="bg-[#0a1525] text-white py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="public/Logo_Branco.svg" alt="BR Queiroz Logo" width="180" height="50" className="h-18 w-auto mb-4" />
              <p className="text-gray-400 text-sm">
                Soluções em tecnologia da informação há mais de 20 anos, trazendo o que há de melhor para Ribeirão Preto
                e região.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm">
                    Consultoria
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm">
                    Infraestrutura
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm">
                    Segurança da Informação
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm">
                    Cloud Computing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm">
                    Redes e Conectividade
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm">
                    Suporte Técnico
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#sobre-nós" className="text-gray-400 hover:text-white text-sm">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#serviços" className="text-gray-400 hover:text-white text-sm">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#parceiros" className="text-gray-400 hover:text-white text-sm">
                    Parceiros
                  </a>
                </li>
                <li>
                  <a href="#cases" className="text-gray-400 hover:text-white text-sm">
                    Casos de Sucesso
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-gray-400 hover:text-white text-sm">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-400 text-sm">+55 (16) 3333-0065</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-400 text-sm">+55 (16) 99159-1078</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <a href="mailto:contato@brqueiroz.com.br" className="text-gray-400 text-sm">
                    contato@brqueiroz.com.br
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-400 text-sm">Ribeirão Preto - SP</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} BR Queiroz. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
