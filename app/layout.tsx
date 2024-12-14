import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./styles.css";
import { ThemeProvider } from "@/components/theme-provider";
import Display from "./display";
import { Toaster } from "@/components/ui/toaster";
import HamburgerMenu from "@/components/hamburger";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
export const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Blonde Money",
  description:
    "We provide actionable intelligence where the worlds of finance and politics collide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <HamburgerMenu /> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Display />
          <main>{children}</main>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
