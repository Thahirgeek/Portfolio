"use client";
import { AuroraText } from "@/components/magicui/aurora-text";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { TextAnimate } from "@/components/magicui/text-animate";
import "./globals.css";
import Page1 from "@/components/page1";
import { useEffect } from "react";
import gsap from "gsap";
import Cursor from "@/components/cursor";
import Footer from "@/components/footer";
import Lenis from "lenis";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
    });
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Page1></Page1>
      <Footer></Footer>
    </>
  );
};
export default Home;
