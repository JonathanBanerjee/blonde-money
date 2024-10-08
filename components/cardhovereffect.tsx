"use-client";
import { HoverEffect } from "./ui/card-hover-effect";
import { UKElectionPieChart } from "./piechart";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Stripe",
    description: <UKElectionPieChart />,
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description: <UKElectionPieChart />,
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description: <UKElectionPieChart />,
    link: "https://google.com",
  },
  {
    title: "Meta",
    description: <UKElectionPieChart />,
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description: <UKElectionPieChart />,
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description: <UKElectionPieChart />,
    link: "https://microsoft.com",
  },
];
