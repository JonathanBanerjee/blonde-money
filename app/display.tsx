"use client";
import Image from "next/image";
// import { AppSidebar } from "@/components/app-sidebar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import HamburgerMenu from "@/components/hamburger";

import { geistSans } from "./layout";

import { cn } from "@/lib/utils";

export default function Display() {
  const isMobile = useIsMobile();

  return (
    <header
      role="banner"
      className="flex items-center justify-between bg-black-800 p-4 w-full"
    >
      <div className="flex items-center">
        <Image
          width={200}
          height={20}
          src="/logo-main.png"
          alt="Blonde Money Logo"
          priority
        />
      </div>

      <nav role="navigation" aria-label="Main navigation">
        <HamburgerMenu />

        {!isMobile && (
          <NavigationMenu>
            <NavigationMenuList className="flex flex-wrap justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-20">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={cn(
                    "text-white",
                    "bg-transparent",
                    "rounded-lg",
                    "hover:bg-emerald-600",
                    "transition-colors",
                    "duration-200",
                    "p-2"
                  )}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="https://blondemoney.co.uk/insights/"
                  className={cn(
                    "text-white",
                    "bg-transparent",
                    "rounded-lg",
                    "hover:bg-emerald-600",
                    "transition-colors",
                    "duration-200",
                    "p-2"
                  )}
                >
                  Insights
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className={cn(
                    "text-white",
                    "bg-transparent",
                    "rounded-lg",
                    "hover:bg-emerald-600",
                    "transition-colors",
                    "duration-200",
                    "p-2"
                  )}
                >
                  About us
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}
      </nav>
    </header>
  );
}
