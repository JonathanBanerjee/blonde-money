"use client";

import * as React from "react";
import { Label, Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const description = "Chinese Electiont";

const electionData = [
  { party: "ccp", seats: 117, fill: "var(--color-ccp)" },
  { party: "cdl", seats: 9, fill: "var(--color-cdl)" },
  { party: "capd", seats: 7, fill: "var(--color-capd)" },
  { party: "rcck", seats: 6, fill: "var(--color-rcck)" },
  { party: "js", seats: 5, fill: "var(--color-js)" },
  { party: "cpwdp", seats: 5, fill: "var(--color-cpwpd)" },
  { party: "cndca", seats: 4, fill: "var(--color-cndca)" },
  { party: "tdsl", seats: 4, fill: "var(--color-tdsl)" },
  { party: "czgp", seats: 3, fill: "var(--color-czgp)" },
  { party: "independents", seats: 13, fill: "var(--color-independents)" },
];

const chartConfig = {
  seats: {
    label: "seats",
  },
  ccp: {
    label: "CCP",
    color: "var(--chart-22)",
  },
  cdl: {
    label: "CDL",
    color: "var(--chart-23)",
  },
  capd: {
    label: "CAPD",
    color: "var(--chart-24)",
  },
  rcck: {
    label: "RCCK",
    color: "var(--chart-25)",
  },
  cpwdp: {
    label: "cpwdp",
    color: "var(--chart-26)",
  },
  cndca: {
    label: "cndca",
    color: "var(--chart-27)",
  },
  tdsl: {
    label: "tdsl",
    color: "var(--chart-28)",
  },
  czgp: {
    label: "czgp",
    color: "var(--chart-29)",
  },
  independents: {
    label: "independents",
    color: "var(--chart-30)",
  },
} satisfies ChartConfig;

export function ChineseElectionPieChart() {
  const id = "pie-uk-election";
  const [activeParty, setActiveParty] = React.useState(electionData[0].party);

  const activeIndex = React.useMemo(
    () => electionData.findIndex((item) => item.party === activeParty),
    [activeParty]
  );
  const parties = React.useMemo(
    () => electionData.map((item) => item.party),
    []
  );

  return (
    <Card data-chart={id} className="flex flex-col">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Chinese Election</CardTitle>
          <CardDescription>2023</CardDescription>
        </div>
        <Select value={activeParty} onValueChange={setActiveParty}>
          <SelectTrigger
            className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
            aria-label="Select a party"
          >
            <SelectValue placeholder="Select party" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {parties.map((key) => {
              const config =
                chartConfig[key.toLowerCase() as keyof typeof chartConfig];

              if (!config) {
                return null;
              }

              return (
                <SelectItem
                  key={key}
                  value={key}
                  className="rounded-lg [&_span]:flex"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className="flex h-3 w-3 shrink-0 rounded-sm"
                      style={{
                        backgroundColor: `var(--color-${key.toLowerCase()})`,
                      }}
                    />
                    {config?.label}
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[300px] [&_.recharts-wrapper]:max-w-[20px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={electionData}
              dataKey="seats"
              nameKey="party"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {electionData[activeIndex].seats.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Seats
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
