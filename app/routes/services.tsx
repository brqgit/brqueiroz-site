import type { Route } from "./+types/hometst";
import ServicePage from "~/services/service";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "BRQueiroz - Serviços" },
    {
      name: "description",
      content:
        "Descubra os serviços da BRQueiroz: consultoria técnica, infraestrutura de TI, segurança da informação, cloud computing, redes e conectividade, suporte técnico, virtualização, cabeamento estruturado e gerenciamento de projetos. Soluções tecnológicas personalizadas para seu negócio.",
    },
    {
      name: "keywords",
      content:
        "BRQueiroz serviços, consultoria técnica, infraestrutura TI, segurança da informação, cloud computing, Microsoft 365, Azure, redes e conectividade, suporte técnico, virtualização, cabeamento estruturado, gerenciamento de projetos",
    },
    { name: "author", content: "BRQueiroz" },
    { name: "robots", content: "index, follow" },
    {
      property: "og:title",
      content: "BRQueiroz - Serviços",
    },
    {
      property: "og:description",
      content:
        "Descubra os serviços da BRQueiroz: consultoria técnica, infraestrutura de TI, segurança da informação, cloud computing, redes e conectividade, suporte técnico, virtualização, cabeamento estruturado e gerenciamento de projetos. Soluções tecnológicas personalizadas para seu negócio.",
    },
    {
      property: "og:image",
      content: "https://brqueiroz.com.br/brqueiroz_logo-preto_3s.webp",
    },
    { property: "og:url", content: "https://brqueiroz.com.br/services" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "BRQueiroz" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "BRQueiroz - Serviços",
    },
    {
      name: "twitter:description",
      content:
        "Descubra os serviços da BRQueiroz: consultoria técnica, infraestrutura de TI, segurança da informação, cloud computing, redes e conectividade, suporte técnico, virtualização, cabeamento estruturado e gerenciamento de projetos. Soluções tecnológicas personalizadas para seu negócio.",
    },
    {
      name: "twitter:image",
      content: "https://brqueiroz.com.br/brqueiroz_logo-preto_3s.webp",
    },
  ];
}

export default function D() {
  return <ServicePage />;
}
