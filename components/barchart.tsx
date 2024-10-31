// "use client";

// import { TrendingUp } from "lucide-react";
// import { Bar, BarChart, XAxis, YAxis } from "recharts";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart";

// export const description = "A mixed bar chart";

// const chartData = [
//   { browser: "labour", votes: 412, fill: "var(--color-labour)" },
//   { browser: "conservative", votes: 121, fill: "var(--color-conservative)" },
//   {
//     browser: "liberaldemocrats",
//     votes: 72,
//     fill: "var(--color-liberaldemocrats)",
//   },
//   { browser: "other", votes: 29, fill: "var(--color-other)" },
//   {
//     browser: "scottishnationalparty",
//     votes: 9,
//     fill: "var(--color-scottishnationalparty)",
//   },
//   { browser: "sinnfein", votes: 7, fill: "var(--color-other)" },
// ];

// const chartConfig = {
//   votes: {
//     label: "Votes",
//   },
//   labour: {
//     label: "Labour",
//     color: "hsl(var(--chart-1))",
//   },
//   conservative: {
//     label: "Conservative",
//     color: "hsl(var(--chart-2))",
//   },
//   liberaldemocrats: {
//     label: "Lib Dem",
//     color: "hsl(var(--chart-3))",
//   },
//   scottishnationalparty: {
//     label: "Scottish National Party",
//     color: "hsl(var(--chart-4))",
//   },
//   sinnfein: {
//     label: "Sinn Féin",
//     color: "hsl(var(--chart-5))",
//   },
//   other: {
//     label: "Other",
//     color: "hsl(var(--chart-5))",
//   },
// } satisfies ChartConfig;

// export function UKElectionBarChart() {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>UK Election</CardTitle>
//         <CardDescription>2024</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <ChartContainer
//           config={chartConfig}
//           className="min-h-[300px] flex flex-col"
//         >
//           <BarChart
//             accessibilityLayer
//             data={chartData}
//             layout="vertical"
//             margin={{
//               left: 0,
//             }}
//           >
//             <YAxis
//               dataKey="browser"
//               type="category"
//               tickLine={false}
//               tickMargin={10}
//               axisLine={false}
//               tickFormatter={(value) =>
//                 chartConfig[value as keyof typeof chartConfig]?.label
//               }
//             />
//             <XAxis dataKey="votes" type="number" hide />
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent hideLabel />}
//             />
//             <Bar dataKey="votes" layout="vertical" radius={5} />
//           </BarChart>
//         </ChartContainer>
//       </CardContent>
//       <CardFooter className="flex-col items-start gap-2 text-sm">
//         <div className="flex gap-2 font-medium leading-none">
//           Labour gain 211 seats <TrendingUp className="h-4 w-4" />
//         </div>
//         <div className="leading-none text-muted-foreground">
//           Showing total votes for the UK Election
//         </div>
//       </CardFooter>
//     </Card>
//   );
// }
