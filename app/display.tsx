// import Image from "next/image";
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

import { cn } from "@/lib/utils";

export default function Display() {
  return (
    <>
      <header className="flex items-center justify-between bg-black-800 p-4">
        <div className="flex items-center space-x-4">
          {/* <Image
            width={100}
            height={100}
            src="/logo-main.png"
            alt="Cafe Logo"
            className="dark:invert rounded-md"
          /> */}
          <h2 className={cn("text-white", "text-lg", "font-semibold")}>
            Blonde Money
          </h2>
        </div>

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
                href="/insights"
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
      </header>
    </>
  );
}
