"use-client";
import { HoverEffect } from "./ui/card-hover-effect";
import { UKElectionPieChart } from "./piechart";
import { GermanElectionPieChart } from "./germanpiechart";
import { USElectionPieChart } from "./uselectionpiechart";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "US Presidential Election",
    description: <USElectionPieChart />,
    link: "https://www.bbc.co.uk/news/election/us2020/results",
  },
  {
    title: "UK Election",
    description: <UKElectionPieChart />,
    link: "https://www.bbc.co.uk/news/election/2024/uk/results",
  },
  {
    title: "German Election",
    description: <GermanElectionPieChart />,
    link: "https://en.wikipedia.org/wiki/Results_of_the_2021_German_federal_election",
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
