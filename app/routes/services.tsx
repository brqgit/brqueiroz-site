import type { Route } from "./+types/hometst";
import ServicePage from "~/services/service";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "BRQueiroz" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function D() {
  return <ServicePage />;
}