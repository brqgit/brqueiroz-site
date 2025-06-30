import PrivacyPolicy from "~/privacy-policy/privacy-policy";
import type { Route } from "./+types/hometst";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "BRQueiroz - Politica e Privacidade" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function PrivacyPolicyRoute() {
  return <PrivacyPolicy />;
}