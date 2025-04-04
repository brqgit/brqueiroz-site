import LoadingPage from "~/components/loading-page";
import type { Route } from "./+types/hometst";
import { Welcome } from "~/welcome/welcome";
import HomePage from "~/home/cHome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "BR Queiroz"},
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <HomePage />;
}