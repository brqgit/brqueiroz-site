import type { ReactNode } from "react";

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
  fullDescription: string[];
}

const services: ServiceType[] = [
  {
    slug: "consultoria",
    title: "Consultoria",
    description: "Planeje a melhor rota p/ soluções de qualidade.",
    shortDescription: "Análise e planejamento estratégico para otimizar seus recursos tecnológicos.",
    icon: '',
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
    description: "Estrutura essencial para um crescimento sólido.",
    shortDescription: "Implementação e gerenciamento de toda a infraestrutura de TI para garantir estabilidade e desempenho.",
    icon: '',
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
    description: "Proteja seus dados e sistemas contra ameaças digitais.",
    shortDescription: "Soluções completas de segurança para proteger seus dados e sistemas contra ameaças digitais.",
    icon: '',
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
    description: "Migre seus sistemas para a nuvem e ganhe flexibilidade.",
    shortDescription: "Soluções em nuvem para flexibilidade, escalabilidade e redução de custos.",
    icon: '',
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
    description: "Projetos e implementação de redes estruturadas e wireless.",
    shortDescription: "Soluções de conectividade para garantir comunicação eficiente entre sistemas e colaboradores.",
    icon: '',
    fullDescription: [
      "Nossa solução de Redes e Conectividade oferece o projeto, implementação e gerenciamento de toda a infraestrutura de comunicação da sua empresa, garantindo conexões rápidas, estáveis e seguras.",
      "Desenvolvemos projetos de redes estruturadas, wireless, VPN, SD-WAN e outras soluções de conectividade adaptadas às necessidades específicas do seu negócio e ambiente físico.",
      "Utilizamos equipamentos de alta qualidade e seguimos as melhores práticas do mercado para criar uma infraestrutura de rede robusta, escalável e preparada para as demandas atuais e futuras.",
      "Além da implementação, oferecemos serviços de monitoramento, manutenção e otimização contínua para garantir o máximo desempenho e disponibilidade da sua rede.",
    ],
  },
];

export function getAllServices(): ServiceType[] {
  return services;
}

export function getServiceBySlug(slug: string): ServiceType | undefined {
  return services.find((service) => service.slug === slug);
}

