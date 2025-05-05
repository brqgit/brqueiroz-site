import type { ReactNode } from "react";

import {
  Cloud,
  Cpu,
  Laptop,
  LineChart,
  Network,
  Server,
  Shield,
  Zap,
} from "lucide-react";

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceProcess {
  title: string;
  description: string;
}

export interface ServicePricing {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceType {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: ReactNode;
  image: string;
  fullDescription: string[];
}

const services: ServiceType[] = [
  {
    slug: "Microsoft 365",
    title: "Microsoft 365",
    description: "Transforme sua empresa com nossa consultoria em Microsoft 365. Analisamos sua infraestrutura, implementamos soluções personalizadas e otimizamos processos, colaborando para aumentar a produtividade e eficiência.",
    shortDescription: "",
    icon: <Laptop className="h-10 w-10 text-[#1c5abd]" />,
    image: "/services/1.gif",
    fullDescription: [
      "Nossa consultoria em TI oferece uma análise completa e estratégica da infraestrutura tecnológica da sua empresa, identificando oportunidades de melhoria, redução de custos e aumento de produtividade.",
      "Com uma equipe de especialistas altamente qualificados e experientes, realizamos um diagnóstico detalhado da sua atual estrutura de TI, avaliando hardware, software, redes, segurança, processos e pessoas.",
      "A partir desse diagnóstico, desenvolvemos um plano estratégico personalizado, alinhado aos objetivos de negócio da sua empresa, com recomendações claras e priorizadas para implementação.",
      "Nossa abordagem é totalmente imparcial e focada nas necessidades específicas do seu negócio, garantindo que você faça os investimentos certos em tecnologia para impulsionar o crescimento da sua empresa.",
    ],
  },
  {
    slug: "consultoria",
    title: "Consultoria",
    description: "Planeje a melhor rota p/ soluções de qualidade. Nossa equipe de especialistas analisa sua infraestrutura atual e propõe melhorias estratégicas para otimizar seus recursos tecnológicos.",
    shortDescription: "",
    icon: <LineChart className="h-10 w-10 text-[#1c5abd]" />,
    image: "",
    fullDescription: [
      "Nossa consultoria em TI oferece uma análise completa e estratégica da infraestrutura tecnológica da sua empresa, identificando oportunidades de melhoria, redução de custos e aumento de produtividade.",
      "Com uma equipe de especialistas altamente qualificados e experientes, realizamos um diagnóstico detalhado da sua atual estrutura de TI, avaliando hardware, software, redes, segurança, processos e pessoas.",
      "A partir desse diagnóstico, desenvolvemos um plano estratégico personalizado, alinhado aos objetivos de negócio da sua empresa, com recomendações claras e priorizadas para implementação.",
      "Nossa abordagem é totalmente imparcial e focada nas necessidades específicas do seu negócio, garantindo que você faça os investimentos certos em tecnologia para impulsionar o crescimento da sua empresa.",
    ],
  },
  {
    slug: "infraestrutura",
    title: "Infraestrutura",
    description: "Estrutura essencial para um crescimento sólido. Implementamos e gerenciamos toda a infraestrutura de TI da sua empresa, garantindo estabilidade, segurança e alto desempenho.",
    shortDescription: "",
    icon: <Server className="h-10 w-10 text-[#1c5abd]" />,
    image: "",
    fullDescription: [
      "Nossa solução de infraestrutura de TI oferece uma base sólida e confiável para todas as operações tecnológicas da sua empresa, garantindo estabilidade, segurança e alto desempenho.",
      "Projetamos, implementamos e gerenciamos toda a infraestrutura de TI, incluindo servidores, storage, backup, redes, sistemas operacionais e virtualização, adaptados às necessidades específicas do seu negócio.",
      "Utilizamos as melhores práticas do mercado e tecnologias de ponta para criar uma infraestrutura robusta, escalável e preparada para o crescimento futuro da sua empresa.",
      "Nossa equipe de especialistas certificados garante a implementação correta e o funcionamento contínuo de todos os componentes, minimizando riscos e maximizando o retorno sobre o investimento em tecnologia.",
    ],
  },
  {
    slug: "seguranca",
    title: "Segurança da Informação",
    description: "Proteja seus dados e sistemas contra ameaças digitais. Oferecemos soluções completas de segurança, incluindo firewall, antivírus, backup, criptografia e treinamento de usuários.",
    shortDescription: "",
    icon: <Shield className="h-10 w-10 text-[#1c5abd]" />,
    image: "",
    fullDescription: [
      "Nossa solução de Segurança da Informação oferece proteção abrangente para os dados e sistemas da sua empresa, defendendo-os contra as mais diversas ameaças digitais do cenário atual.",
      "Implementamos múltiplas camadas de segurança, incluindo firewall, antivírus, anti-malware, detecção de intrusão, prevenção de perda de dados e muito mais, criando uma defesa robusta contra ataques cibernéticos.",
      "Além das soluções tecnológicas, oferecemos políticas de segurança, treinamento de usuários e auditorias periódicas para garantir que todos os aspectos da segurança da informação sejam cobertos.",
      "Nossa abordagem é proativa, identificando e mitigando vulnerabilidades antes que possam ser exploradas, e mantendo todos os sistemas de segurança atualizados contra as mais recentes ameaças.",
    ],
  },
  {
    slug: "cloud",
    title: "Cloud Computing",
    description: "Migre seus sistemas para a nuvem e ganhe flexibilidade, escalabilidade e redução de custos. Somos especialistas em soluções Microsoft Azure.",
    shortDescription: "",
    icon: <Cloud className="h-10 w-10 text-[#1c5abd]" />,
    image: "",
    fullDescription: [
      "Nossa solução de Cloud Computing oferece a migração e gerenciamento de seus sistemas e dados para a nuvem, proporcionando maior flexibilidade, escalabilidade e redução de custos operacionais.",
      "Trabalhamos com os principais provedores de nuvem do mercado, como Microsoft Azure, AWS e Google Cloud, para oferecer a melhor solução de acordo com as necessidades específicas da sua empresa.",
      "Desenvolvemos uma estratégia de migração personalizada, minimizando riscos e interrupções, e garantindo que seus sistemas funcionem perfeitamente no ambiente de nuvem.",
      "Após a migração, oferecemos serviços de gerenciamento contínuo, otimização de custos, monitoramento de desempenho e segurança para garantir que você obtenha o máximo valor do seu investimento em nuvem.",
    ],
  },
  {
    slug: "redes",
    title: "Redes e Conectividade",
    description: "Projetos e implementação de redes estruturadas, wireless, VPN, SD-WAN e soluções de conectividade para garantir a comunicação eficiente entre seus sistemas e colaboradores.",
    shortDescription: "",
    icon: <Network className="h-10 w-10 text-[#1c5abd]" />,
    image: "",
    fullDescription: [
      "Nossa solução de Redes e Conectividade oferece o projeto, implementação e gerenciamento de toda a infraestrutura de comunicação da sua empresa, garantindo conexões rápidas, estáveis e seguras.",
      "Desenvolvemos projetos de redes estruturadas, wireless, VPN, SD-WAN e outras soluções de conectividade adaptadas às necessidades específicas do seu negócio e ambiente físico.",
      "Utilizamos equipamentos de alta qualidade e seguimos as melhores práticas do mercado para criar uma infraestrutura de rede robusta, escalável e preparada para as demandas atuais e futuras.",
      "Além da implementação, oferecemos serviços de monitoramento, manutenção e otimização contínua para garantir o máximo desempenho e disponibilidade da sua rede.",
    ],
  },
  {
    slug: "suporte",
    title: "Suporte Técnico",
    description: "Suporte técnico especializado e proativo, com atendimento remoto e presencial, para resolver problemas rapidamente e minimizar o impacto em suas operações.",
    shortDescription: "",
    icon: <Zap className="h-10 w-10 text-[#1c5abd]" />,
    image: "",
    fullDescription: [
      "Nossa solução de Redes e Conectividade oferece o projeto, implementação e gerenciamento de toda a infraestrutura de comunicação da sua empresa, garantindo conexões rápidas, estáveis e seguras.",
      "Desenvolvemos projetos de redes estruturadas, wireless, VPN, SD-WAN e outras soluções de conectividade adaptadas às necessidades específicas do seu negócio e ambiente físico.",
      "Utilizamos equipamentos de alta qualidade e seguimos as melhores práticas do mercado para criar uma infraestrutura de rede robusta, escalável e preparada para as demandas atuais e futuras.",
      "Além da implementação, oferecemos serviços de monitoramento, manutenção e otimização contínua para garantir o máximo desempenho e disponibilidade da sua rede.",
    ],
  },
  {
    slug: "virtualização",
    title: "Virtualização",
    description: "Otimize seus recursos de hardware com soluções de virtualização de servidores, desktops e aplicações, aumentando a eficiência e reduzindo custos operacionais.",
    shortDescription: "",
    icon: <Cpu className="h-10 w-10 text-[#1c5abd]" />,
    image: "",
    fullDescription: [
      "Nossa solução de Redes e Conectividade oferece o projeto, implementação e gerenciamento de toda a infraestrutura de comunicação da sua empresa, garantindo conexões rápidas, estáveis e seguras.",
      "Desenvolvemos projetos de redes estruturadas, wireless, VPN, SD-WAN e outras soluções de conectividade adaptadas às necessidades específicas do seu negócio e ambiente físico.",
      "Utilizamos equipamentos de alta qualidade e seguimos as melhores práticas do mercado para criar uma infraestrutura de rede robusta, escalável e preparada para as demandas atuais e futuras.",
      "Além da implementação, oferecemos serviços de monitoramento, manutenção e otimização contínua para garantir o máximo desempenho e disponibilidade da sua rede.",
    ],
  },
  {
    slug: "cabeamento-estruturado",
    title: "Cabeamento Estruturado",
    description: "Projetos e execução de cabeamento estruturado para ambientes corporativos e datacenters, garantindo desempenho, organização e escalabilidade.",
    shortDescription: "Infraestrutura de cabeamento para datacenters, certificação e garantia de performance.",
    icon: <Network className="h-10 w-10 text-[#1c5abd]" />,
    image: "",
    fullDescription: [
      "Oferecemos soluções completas de cabeamento estruturado para ambientes corporativos e datacenters, desde o projeto até a execução, seguindo as melhores práticas do mercado e normas internacionais.",
      "Nosso serviço garante organização, facilidade de manutenção, escalabilidade e alta performance para sua infraestrutura de TI.",
      "Utilizamos materiais de alta qualidade e mão de obra especializada para assegurar a durabilidade e eficiência do sistema de cabeamento.",
      "Realizamos a certificação de todos os pontos de rede utilizando o equipamento LanTEK-IV, garantindo que o cabeamento atenda aos padrões exigidos para transmissão de dados em alta velocidade e máxima confiabilidade.",
      "A certificação com o LanTEK-IV assegura que sua rede está pronta para suportar aplicações críticas e futuras expansões, proporcionando tranquilidade e segurança para o seu negócio."
    ],
  },
];

export function getAllServices(): ServiceType[] {
  return services;
}

export function getServiceBySlug(slug: string): ServiceType | undefined {
  return services.find((service) => service.slug === slug);
}

