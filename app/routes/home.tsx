import type { Route } from "./+types/hometst";
import HomePage from "~/home/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "BRQueiroz"},
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <HomePage />;
}