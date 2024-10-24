import { Twitter, Linkedin, KeyRound } from "lucide-react";
import Image from "next/image";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

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
  {
    title: "Login",
    url: "#/loginurlgoeshere",
    icon: KeyRound,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <Image
              width={200}
              height={200}
              src="/logo-main.png"
              alt="Blonde money Logo"
            />
          </SidebarGroupLabel>

          <SidebarGroupContent>
            {/* <h3 className="text-2lg font-bold text-center">
              Join in the conversation
            </h3> */}
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
