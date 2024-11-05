"use-client";
import { HoverEffect } from "./ui/card-hover-effect";
import { UKElectionPieChart } from "./piecharts/piechart";
import { GermanElectionPieChart } from "./piecharts/germanpiechart";
import { USElectionPieChart } from "./piecharts/uselectionpiechart";
import { FrenchElectionPieChart } from "./piecharts/franceelectionpiechart";
import { ArgentinianElectionPieChart } from "./piecharts/argentinianelectionpiechart";
import { ChineseElectionPieChart } from "./piecharts/chinaelectionpiechart";
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto ">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "US Presidential Election",
    description: <USElectionPieChart />,
  },
  {
    title: "French Presidential Election",
    description: <FrenchElectionPieChart />,
  },
  {
    title: "Argentinian Presidential Election",
    description: <ArgentinianElectionPieChart />,
  },
  {
    title: "UK Election",
    description: <UKElectionPieChart />,
  },
  {
    title: "German Election",
    description: <GermanElectionPieChart />,
  },

  {
    title: "Chinese Election",
    description: <ChineseElectionPieChart />,
  },
];
