"use-client";
import { HoverEffect } from "./ui/card-hover-effect";
import { UKElectionPieChart } from "./piechart";
import { GermanElectionPieChart } from "./germanpiechart";
import { USElectionPieChart } from "./uselectionpiechart";
import { FrenchElectionPieChart } from "./franceelectionpiechart";
import { ArgentinianElectionPieChart } from "./argentinianelectionpiechart";
import { ChineseElectionPieChart } from "./chinaelectionpiechart";
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
    title: "French Presidential Election",
    description: <FrenchElectionPieChart />,
    link: "https://en.wikipedia.org/wiki/2022_French_presidential_election",
  },
  {
    title: "Argentinian Presidential Election",
    description: <ArgentinianElectionPieChart />,
    link: "https://en.wikipedia.org/wiki/2023_Argentine_general_election",
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
    title: "Chinese Election",
    description: <ChineseElectionPieChart />,
    link: "https://en.wikipedia.org/wiki/14th_National_People%27s_Congress",
  },
];
