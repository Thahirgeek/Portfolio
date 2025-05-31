"use client";
import Page1 from "@/components/page1";
import { useEffect } from "react";
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
