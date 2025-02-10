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
  title: "Blonde Money | Global Financial & Political Intelligence",
  description:
    "Blonde Money provides actionable intelligence and expert insights where finance and politics intersect. Get data-driven analysis on global markets, elections, and policy decisions.",
  keywords:
    "financial intelligence, political analysis, global markets, election analysis, financial data, political insights, market intelligence",
  openGraph: {
    title: "Blonde Money | Global Financial & Political Intelligence",
    description:
      "Expert insights where finance and politics intersect. Data-driven analysis on global markets, elections, and policy decisions.",
    type: "website",
    url: "https://blondemoney.co.uk",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Blonde Money",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blonde Money | Global Financial & Political Intelligence",
    description:
      "Expert insights where finance and politics intersect. Data-driven analysis on global markets, elections, and policy decisions.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
