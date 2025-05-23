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
  fullDescription: string | string[];
}

const services: ServiceType[] = [
  {
    slug: "Microsoft 365",
    title: "services.microsoft-365.title",
    description: "services.microsoft-365.description",
    shortDescription: "services.microsoft-365.shortDescription",
    icon: <Laptop className="h-10 w-10 text-[#1c5abd]" />,
    image: "/services/1.gif",
    fullDescription: "services.microsoft-365.fullDescription"
  },
  {
    slug: "consultoria",
    title: "services.consulting.title",
    description: "services.consulting.description",
    shortDescription: "services.consulting.shortDescription",
    icon: <LineChart className="h-10 w-10 text-[#1c5abd]" />,
    image: "",
    fullDescription: "services.consulting.fullDescription"
  },
  {
    slug: "infraestrutura",
    title: "services.infrastructure.title",
    description: "services.infrastructure.description",
    shortDescription: "services.infrastructure.shortDescription",
    icon: <Server className="h-10 w-10 text-[#1c5abd]" />,
    image: "",
    fullDescription: "services.infrastructure.fullDescription"
  },
  {
    slug: "seguranca",
    title: "services.security.title",
    description: "services.security.description",
    shortDescription: "services.security.shortDescription",
    icon: <Shield className="h-10 w-10 text-[#1c5abd]" />,
    image: "",
    fullDescription: "services.security.fullDescription"
  },
  {
    slug: "cloud",
    title: "services.cloud.title",
    description: "services.cloud.description",
    shortDescription: "services.cloud.shortDescription",
    icon: <Cloud className="h-10 w-10 text-[#1c5abd]" />,
    image: "",
    fullDescription: "services.cloud.fullDescription"
  },
  {
    slug: "redes",
    title: "services.networking.title",
    description: "services.networking.description",
    shortDescription: "services.networking.shortDescription",
    icon: <Network className="h-10 w-10 text-[#1c5abd]" />,
    image: "",
    fullDescription: "services.networking.fullDescription"
  },
  {
    slug: "suporte",
    title: "services.support.title",
    description: "services.support.description",
    shortDescription: "services.support.shortDescription",
    icon: <Zap className="h-10 w-10 text-[#1c5abd]" />,
    image: "",
    fullDescription: "services.support.fullDescription"
  },
  {
    slug: "virtualização",
    title: "services.virtualization.title",
    description: "services.virtualization.description",
    shortDescription: "services.virtualization.shortDescription",
    icon: <Cpu className="h-10 w-10 text-[#1c5abd]" />,
    image: "",
    fullDescription: "services.virtualization.fullDescription"
  },
  {
    slug: "cabeamento-estruturado",
    title: "services.structured-cabling.title",
    description: "services.structured-cabling.description",
    shortDescription: "services.structured-cabling.shortDescription",
    icon: <Network className="h-10 w-10 text-[#1c5abd]" />,
    image: "",
    fullDescription: "services.structured-cabling.fullDescription"
  }
];

export function getAllServices(t: (key: string, options?: any) => any): ServiceType[] {
  return services.map(item => ({
    ...item,
    title: t(item.title),
    description: t(item.description),
    shortDescription: t(item.shortDescription),
    fullDescription: typeof item.fullDescription === "string"
      ? t(item.fullDescription, { returnObjects: true })
      : item.fullDescription,
  }));
}

export function getServiceBySlug(slug: string, t: (key: string, options?: any) => any): ServiceType | undefined {
  const service = services.find((service) => service.slug === slug);
  if (!service) return undefined;
  return {
    ...service,
    title: t(service.title),
    description: t(service.description),
    shortDescription: t(service.shortDescription),
    fullDescription: typeof service.fullDescription === "string"
      ? t(service.fullDescription, { returnObjects: true })
      : service.fullDescription,
  };
}