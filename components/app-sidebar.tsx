import { Twitter, Linkedin } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sidesheet";

// Menu items.
const items = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/company/blonde-money/",
    icon: Linkedin,
  },
  {
    title: "Twitter",
    url: "https://x.com/MarketBlondes",
    icon: Twitter,
  },
];

export function AppSidebar() {
  return (
    <>
      <div className="fixed left-4 top-1/3 space-y-4 transform -translate-y-1/2">
        {items.map((item, index) => (
          <a
            href={item.url}
            key={item.title}
            className={cn(
              "flex items-center gap-2 p-3 rounded-full",
              "bg-emerald-600 text-white",
              "hover:bg-blue-600 transition-colors duration-200"
            )}
            aria-label={item.title}
          >
            <item.icon size={24} />
          </a>
        ))}
      </div>
    </>
  );
}
