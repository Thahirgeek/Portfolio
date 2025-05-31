"use client";

import type { Metadata } from "next";
import "./globals.css";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import gsap from "gsap";
import Navbar from "@/components/navbar";
import Page1 from "@/components/page1";
import Cursor from "@/components/cursor";
import Menu from "@/components/menu";
import PageTransition from "@/components/PageTransition";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showTransition, setShowTransition] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleRouteChange = (path: string) => {
    if (path === pathname) return;

    setShowTransition(true);
    setTimeout(() => {
      router.push(path);
      setShowTransition(false);
    }, 1000);
  };

  return (
    <html lang="en">
      <body className="cursor-none selection:bg-zinc-950 selection:text-zinc-300">
        <ScrollToTop/>
        <PageTransition show={showTransition} />
        {/* <SmoothCursor></SmoothCursor> */}
        <div className="main relative bg-zinc-50 flex flex-col">
          <Cursor />
          <Navbar handleRouteChange={handleRouteChange} />
          <Menu handleRouteChange={handleRouteChange} />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
