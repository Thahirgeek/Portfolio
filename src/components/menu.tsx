"use client";

import { useEffect, useRef, useState } from "react";
import MobileMenuButton from "./MobileMenuButton";
import gsap from "gsap";
import MenuCard from "./MenuCard";


const Menu = ({handleRouteChange}: {handleRouteChange: (path: string) => void }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (menuRef.current) {
        if (window.scrollY > 350) {
          gsap.to(menuRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.2,
            ease: "bounce",
          });
        } else {
          setIsActive(false);
          gsap.to(menuRef.current, {
            opacity: 0,
            scale: 0,
            duration: 0.2,
            ease: "bounce",
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    const handleOutsideMenuClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsActive(false);
      }
    };

    if (isActive) {
      window.addEventListener("mousedown", handleOutsideMenuClick);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div
        ref={menuRef}
        className="fixed top-5 right-8 opacity-0 sm:h-[30px] sm:w-[40px] max-sm:h-[35px] max-sm:w-[35px] text-white z-[99] hover:cursor-none"
      >
        
        <MenuCard isActive={isActive} setIsActive={setIsActive} handleRouteChange={handleRouteChange}/>
        <MobileMenuButton isActive={isActive} setIsActive={setIsActive}/>
      </div>
    </>
  );
};

export default Menu;
