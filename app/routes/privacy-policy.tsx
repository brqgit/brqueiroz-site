import PrivacyPolicy from "~/privacy-policy/privacy-policy";
import type { Route } from "./+types/hometst";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "BRQueiroz - Política de Privacidade" },
    {
      name: "description",
      content:
        "Política de Privacidade da BRQueiroz. Comprometidos com a transparência e segurança dos dados dos nossos clientes e visitantes.",
    },
    {
      name: "keywords",
      content:
        "BRQueiroz, política de privacidade, proteção de dados, segurança da informação",
    },
    { name: "author", content: "BRQueiroz" },
    { name: "robots", content: "index, follow" },
    {
      property: "og:title",
      content: "BRQueiroz - Política de Privacidade",
    },
    {
      property: "og:description",
      content:
        "Política de Privacidade da BRQueiroz. Comprometidos com a transparência e segurança dos dados dos nossos clientes e visitantes.",
    },
    {
      property: "og:image",
      content: "https://brqueiroz.com.br/brqueiroz_logo-preto_3s.webp",
    },
    { property: "og:url", content: "https://brqueiroz.com.br/privacy-policy" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "BRQueiroz" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "BRQueiroz - Política de Privacidade",
    },
    {
      name: "twitter:description",
      content:
        "Política de Privacidade da BRQueiroz. Comprometidos com a transparência e segurança dos dados dos nossos clientes e visitantes.",
    },
    {
      name: "twitter:image",
      content: "https://brqueiroz.com.br/brqueiroz_logo-preto_3s.webp",
    },
  ];
}

export default function PrivacyPolicyRoute() {
  return <PrivacyPolicy />;
}
