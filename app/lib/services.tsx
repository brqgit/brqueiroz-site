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
      "Nossa consultoria em Microsoft 365 proporciona uma análise abrangente e estratégica da infraestrutura tecnológica da sua empresa, destacando áreas para melhoria, redução de custos e aumento de produtividade.",
      "Com uma equipe de especialistas altamente qualificados, realizamos um diagnóstico detalhado da sua estrutura de TI atual, incluindo hardware, software, redes, segurança, processos e pessoas.",
      "A partir desse diagnóstico, desenvolvemos um plano estratégico personalizado alinhado aos objetivos de negócio da sua empresa, com recomendações claras e priorizadas para implementação.",
      "Implementamos soluções Microsoft 365 que podem incluir configuração e integração de aplicativos como Microsoft Teams, SharePoint, Exchange Online e outras ferramentas colaborativas essenciais.",
      "Nosso suporte contínuo garante que as soluções implementadas estejam otimizadas e alinhadas com as melhores práticas de segurança e eficiência operacional.",
      "Além de melhorar a colaboração e a comunicação interna, nossa abordagem visa capacitar sua equipe com treinamentos e suporte técnico para maximizar o retorno sobre o investimento em tecnologia.",
      "Estamos comprometidos em fornecer resultados tangíveis, medindo o impacto das mudanças implementadas e ajustando estratégias conforme necessário para atender às necessidades dinâmicas do seu negócio."
    ]
  },
  {
    slug: "consultoria",
    title: "Consultoria",
    description: "Planeje a melhor rota para soluções de qualidade. Nossa equipe de especialistas analisa sua infraestrutura atual e propõe melhorias estratégicas para otimizar seus recursos tecnológicos.",
    shortDescription: "",
    icon: <LineChart className="h-10 w-10 text-[#1c5abd]" />,
    image: "",
    fullDescription: [
      "Nossa consultoria em TI oferece uma análise completa e estratégica da infraestrutura tecnológica da sua empresa, identificando oportunidades de melhoria, redução de custos e aumento de produtividade.",
      "Com uma equipe de especialistas altamente qualificados e experientes, realizamos um diagnóstico detalhado da sua atual estrutura de TI, avaliando hardware, software, redes, segurança, processos e pessoas.",
      "A partir desse diagnóstico, desenvolvemos um plano estratégico personalizado alinhado aos objetivos de negócio da sua empresa, com recomendações claras e priorizadas para implementação.",
      "Implementamos soluções que podem incluir desde a migração para a nuvem até a integração de ferramentas colaborativas, sempre alinhadas às melhores práticas do mercado.",
      "Nosso compromisso é garantir que sua empresa aproveite ao máximo seus investimentos em tecnologia, melhorando a eficiência operacional e impulsionando o crescimento sustentável.",
      "Além de estratégias de curto prazo, focamos em estabelecer uma base sólida para o futuro, capacitando sua equipe e assegurando que suas soluções tecnológicas estejam sempre alinhadas com as demandas do mercado."
    ]
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
      "Além de implementar a infraestrutura, oferecemos suporte proativo e gerenciamento contínuo, assegurando que sua infraestrutura de TI opere com eficiência máxima e esteja sempre alinhada com os objetivos estratégicos da sua empresa."
    ]
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
      "Com foco na conformidade com normas e regulamentos de segurança, nossa equipe assegura que sua empresa esteja sempre protegida e em conformidade com os padrões exigidos pelo mercado e pela legislação."
    ]
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
      "Com nossa expertise em Microsoft Azure, oferecemos integrações avançadas, implementação de serviços gerenciados e suporte especializado para que sua empresa aproveite ao máximo os recursos da plataforma.",
    ]
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
      "Nossa abordagem inclui análise proativa de performance, identificação e resolução de problemas antes que impactem seus serviços, garantindo a continuidade operacional e a satisfação dos usuários.",
    ]
  },
  {
    slug: "suporte",
    title: "Suporte Técnico",
    description: "Suporte técnico especializado e proativo, com atendimento remoto e presencial, para resolver problemas rapidamente e minimizar o impacto em suas operações.",
    shortDescription: "",
    icon: <Zap className="h-10 w-10 text-[#1c5abd]" />,
    image: "",
    fullDescription: [
      "Nossa solução de Suporte Técnico oferece atendimento especializado e proativo para resolver problemas rapidamente, garantindo a continuidade operacional da sua empresa.",
      "Com serviços de suporte remoto e presencial, nossa equipe está disponível para resolver incidentes de forma eficiente, minimizando o impacto nas suas operações diárias.",
      "Além do suporte reativo, também oferecemos monitoramento proativo e manutenção preventiva para identificar e resolver problemas antes que afetem seu ambiente tecnológico.",
      "Nossa abordagem visa não apenas resolver problemas, mas também otimizar a performance dos seus sistemas e garantir a satisfação contínua dos usuários finais.",
    ]
  },
  {
    slug: "virtualização",
    title: "Virtualização",
    description: "Otimize seus recursos de hardware com soluções de virtualização de servidores, desktops e aplicações, aumentando a eficiência e reduzindo custos operacionais.",
    shortDescription: "",
    icon: <Cpu className="h-10 w-10 text-[#1c5abd]" />,
    image: "",
    fullDescription: [
      "Nossa solução de Virtualização oferece a otimização de recursos de hardware através da virtualização de servidores, desktops e aplicações, proporcionando maior eficiência operacional e redução de custos.",
      "Desenvolvemos projetos personalizados de virtualização, adaptados às necessidades específicas do seu negócio, para maximizar o uso de recursos existentes e simplificar a gestão de ambientes complexos.",
      "Utilizamos tecnologias líderes de mercado e melhores práticas para implementar soluções de virtualização que garantem escalabilidade, segurança e alta disponibilidade para suas operações.",
      "Além da implementação inicial, oferecemos serviços contínuos de monitoramento, manutenção e otimização para garantir que seus ambientes virtualizados estejam sempre operando com máximo desempenho.",
    ]
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

