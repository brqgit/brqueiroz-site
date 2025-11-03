import type { Route } from "./+types/hometst";
import HomePage from "~/home/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "BRQueiroz" },
    {
      name: "description",
      content:
        "A BRQueiroz é uma empresa especializada em consultoria técnica, infraestrutura de TI, segurança da informação, cloud computing, redes e conectividade, suporte técnico, virtualização, cabeamento estruturado e gerenciamento de projetos. Com mais de 20 anos de experiência, oferecemos soluções personalizadas para empresas de todos os portes, garantindo eficiência, segurança e inovação tecnológica.",
    },
    {
      name: "keywords",
      content:
        "BRQueiroz, consultoria técnica, infraestrutura TI, segurança da informação, cloud computing, Microsoft 365, Azure, redes e conectividade, suporte técnico, virtualização, cabeamento estruturado, gerenciamento de projetos, PMBOK",
    },
    { name: "author", content: "BRQueiroz" },
    { name: "robots", content: "index, follow" },
    {
      property: "og:title",
      content: "BRQueiroz",
    },
    {
      property: "og:description",
      content:
        "A BRQueiroz é uma empresa especializada em consultoria técnica, infraestrutura de TI, segurança da informação, cloud computing, redes e conectividade, suporte técnico, virtualização, cabeamento estruturado e gerenciamento de projetos. Com mais de 20 anos de experiência, oferecemos soluções personalizadas para empresas de todos os portes, garantindo eficiência, segurança e inovação tecnológica.",
    },
    {
      property: "og:image",
      content: "https://brqueiroz.com.br/brqueiroz_logo-preto_3s.webp",
    },
    { property: "og:url", content: "https://brqueiroz.com.br" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "BRQueiroz" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "BRQueiroz",
    },
    {
      name: "twitter:description",
      content:
        "A BRQueiroz é uma empresa especializada em consultoria técnica, infraestrutura de TI, segurança da informação, cloud computing, redes e conectividade, suporte técnico, virtualização, cabeamento estruturado e gerenciamento de projetos. Com mais de 20 anos de experiência, oferecemos soluções personalizadas para empresas de todos os portes, garantindo eficiência, segurança e inovação tecnológica.",
    },
    {
      name: "twitter:image",
      content: "https://brqueiroz.com.br/brqueiroz_logo-preto_3s.webp",
    },
  ];
}

export default function Home() {
  return <HomePage />;
}
