"use client";

import "../app/globals.css";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import MenuCard from "./MenuCard";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = ( { handleRouteChange } : { handleRouteChange : ( path: string ) => void}) => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const navMenuRef = useRef<HTMLDivElement>(null);

  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        if (window.scrollY > 320) {
          gsap.to(navbarRef.current, {
            y: -100,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          });
          setIsActive(false);
        } else {
          gsap.to(navbarRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    const handleOutsideClick = (e: MouseEvent) => {
      if (
        navMenuRef.current &&
        !navMenuRef.current.contains(e.target as Node)
      ) {
        setIsActive(false);
      }
    };

    if (isActive) {
      window.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isActive]);

  return (
    <div ref={navbarRef} className="navbar fixed left-0 right-0 top-0 z-[999]">
      <div className="bg-zinc-50 sm:p-4 sm:pr-6 sm:pl-6 max-sm:p-3 max-sm:pl-4 max-sm:pr-4 font-[clash] border-b-1 border-zinc-400">
        <nav className="flex items-center justify-between text-black">
          <h1 className="sm:text-2xl max-sm:text-lg uppercase tracking-wide">
            <div
              onMouseEnter={() =>
                gsap.to("#cursor", { scale: 2, duration: 0.5 })
              }
              onMouseLeave={() =>
                gsap.to("#cursor", { scale: 1, duration: 0.5 })
              }
              onClick={() => {
                setIsActive(false);
                handleRouteChange("/");
              }}
            >
              Portfolio
            </div>
          </h1>
          <ul className="text-md flex gap-[1.2vmax] tracking-wider max-sm:hidden">
            <li
              onMouseEnter={() =>
                gsap.to("#cursor", { scale: 2, duration: 0.5 })
              }
              onMouseLeave={() =>
                gsap.to("#cursor", { scale: 1, duration: 0.5 })
              }
              className="w-[13vh] h-[4vh] flex items-center pt-0.5 pb-0.5 text-center border-1 border-zinc-400 max-sm:scale-0 rounded-sm"
            >
              <div
                onClick={() => {
                  setIsActive(false);
                  handleRouteChange("/");
                }}
                className="absolute z-9 left-0 right-0 cursor-none"
              >
                Home
              </div>
            </li>
            <li
              onMouseEnter={() =>
                gsap.to("#cursor", { scale: 2, duration: 0.5 })
              }
              onMouseLeave={() =>
                gsap.to("#cursor", { scale: 1, duration: 0.5 })
              }
              className="w-[13vh] h-[4vh] flex items-center t-0.5 pb-0.5 text-center border-1 border-zinc-400 max-sm:scale-0 rounded-sm"
            >
              <div
                onClick={() => {
                  setIsActive(false);
                  handleRouteChange("/projects");
                }}
                className="absolute z-9 left-0 right-0 cursor-none"
              >
                Projects
              </div>
            </li>
            <li
              onMouseEnter={() =>
                gsap.to("#cursor", { scale: 2, duration: 0.5 })
              }
              onMouseLeave={() =>
                gsap.to("#cursor", { scale: 1, duration: 0.5 })
              }
              className="w-[13vh] h-[4vh] flex items-center pt-0.5 pb-0.5 text-center border-1 border-zinc-400 max-sm:scale-0 rounded-sm"
            >
              <div
                onClick={() => {
                  setIsActive(false);
                  handleRouteChange("/contact");
                }}
                className="absolute z-9 left-0 right-0 cursor-none"
              >
                Contact
              </div>
            </li>
          </ul>
          <div className="sm:hidden">
            <div
              ref={navMenuRef}
              className="bg-zinc-900 relative h-7 w-15 text-white flex items-center justify-center rounded-sm "
            >
              <MenuCard isActive={isActive} setIsActive={setIsActive} handleRouteChange={handleRouteChange}/>
              <button onClick={() => setIsActive(!isActive)} className="z-[1]">
                <AnimatePresence mode="wait">
                  {isActive ? (
                    <motion.span
                      key="close"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        type: "tween",
                        ease: [0.76, 0, 0.24, 1],
                      }}
                    >
                      Close
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        type: "tween",
                        ease: [0.76, 0, 0.24, 1],
                      }}
                    >
                      Menu
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
