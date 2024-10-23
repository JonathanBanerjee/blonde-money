import Image from "next/image";
import { Button } from "@/components/ui/button";
// import { UKElectionBarChart } from "@/components/barchart";
// import { FlipWordsDemo } from "@/components/flipwords";
import { GlobeDemo } from "@/components/globe";
import { UKElectionPieChart } from "@/components/piecharts/piechart";
// import { ModeToggle } from "@/components/togglebutton";
import { CardHoverEffectDemo } from "@/components/cardhovereffect";
import Contact from "@/components/contact";

export default function Home() {
  return (
    // <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-end "> */}
      <main>
        {/* <ModeToggle /> */}
        <GlobeDemo />
        <CardHoverEffectDemo />
        <Contact />
        {/* <FlipWordsDemo /> */}
        {/* <UKElectionBarChart /> */}
        {/* <UKElectionPieChart /> */}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
