"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Linkedin, LucideIcon, Twitter, Link, Youtube } from "lucide-react";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: {
      title: string;
      src: string;
      description: string;
      icon: any;
    };
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const renderIcon = (icon: any) => {
      const iconStyle = {
        backgroundColor: icon.iconColor || "#0000",
        borderRadius: "50%",
        padding: "10px",
        marginLeft: "10px",
        display: "inline-block",
        "&  svg": { width: "20px", height: "20px" },
      };

      switch (icon.icon) {
        case "Linkedin":
          return (
            <a href={icon.url} target="_blank">
              <div style={iconStyle}>
                <Linkedin />
              </div>
            </a>
          );
        case "Twitter":
          return (
            <a href={icon.url} target="_blank">
              <div style={iconStyle}>
                <Twitter />
              </div>
            </a>
          );
        case "Link":
          return (
            <a href={icon.url} target="_blank">
              <div style={iconStyle}>
                <Link />
              </div>
            </a>
          );
        case "Youtube":
          return (
            <a href={icon.url} target="_blank">
              <div style={iconStyle}>
                <Youtube />
              </div>
            </a>
          );
        default:
          return null;
      }
    };

    return (
      <div
        className="relative aspect-[4/5] w-full rounded-xl bg-gradient-to-b from-neutral-50/90 to-neutral-50/90 dark:from-neutral-950/90 dark:to-neutral-950/90"
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        role="article"
        aria-label={card.title}
      >
        <Image
          src={card.src}
          alt={`${card.title} - ${card.description}`}
          fill
          className="object-cover absolute inset-0"
          loading="lazy"
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex flex-col justify-between py-4 px-4 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div>
            <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
              {card.title}
            </div>
            <div className="mt-2 text-sm text-white">{card.description}</div>
          </div>
          <div>{card.icon && card.icon.map((e: any) => renderIcon(e))}</div>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  description: string;
  icon: any;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
