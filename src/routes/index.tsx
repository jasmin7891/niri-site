import { createFileRoute } from "@tanstack/react-router";
import { Hunt } from "@/components/hunt";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Hunt />;
}
