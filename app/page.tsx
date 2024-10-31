import Image from "next/image";
import { Button } from "@/components/ui/button";

import { GlobeDemo } from "@/components/globe";
import { CardHoverEffectDemo } from "@/components/cardhovereffect";
import Contact from "@/components/contact";
import { AppSidebar } from "@/components/app-sidebar";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <GlobeDemo />
      <CardHoverEffectDemo />
      <Contact />
      <AppSidebar />

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
