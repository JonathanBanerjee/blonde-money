import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["data.", "finance.", "politics."];

  return (
    <div className="h-[5rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 overflow-hidden w-full">
        Providing global expert insights in
        <FlipWords words={words} />
      </div>
    </div>
  );
}
