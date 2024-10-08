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

export const description = "UK Election Results Pie Chart";

const electionData = [
  { party: "Labour", seats: 412, fill: "var(--color-labour)" },
  { party: "Conservative", seats: 121, fill: "var(--color-conservative)" },
  {
    party: "Liberal Democrats",
    seats: 72,
    fill: "var(--color-liberaldemocrats)",
  },
  { party: "SNP", seats: 9, fill: "var(--color-snp)" },
  { party: "Sinn Féin", seats: 7, fill: "var(--color-sinnfein)" },
  { party: "Other", seats: 29, fill: "var(--color-other)" },
];

const chartConfig = {
  seats: {
    label: "Seats",
  },
  labour: {
    label: "Labour",
    color: "hsl(var(--chart-1))",
  },
  conservative: {
    label: "Tory",
    color: "hsl(var(--chart-2))",
  },
  liberaldemocrats: {
    label: "Lib Dem",
    color: "hsl(var(--chart-3))",
  },
  snp: {
    label: "SNP",
    color: "hsl(var(--chart-4))",
  },
  sinnfein: {
    label: "Sinn Féin",
    color: "hsl(var(--chart-5))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-6))",
  },
} satisfies ChartConfig;

export function UKElectionPieChart() {
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
          <CardTitle>UK Election Results</CardTitle>
          <CardDescription>2024</CardDescription>
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
          className="mx-auto aspect-square w-full max-w-[300px]"
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
