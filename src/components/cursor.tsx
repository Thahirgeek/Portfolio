"use client";
import { useEffect } from "react";
import {gsap} from "gsap";
const Cursor = () => {
    useEffect(() => {

        const handleInitialPosition = (e: MouseEvent) => {
            gsap.set("#cursor", {
                x: e.clientX,
                y: e.clientY,
                opacity: 0,
                scale: 0
            })

            gsap.to("#cursor", {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "elastic"
            })
            
            window.addEventListener("mousemove", handleMove);
            window.removeEventListener("mousemove", handleInitialPosition);
        }

        const handleMove = (e: MouseEvent) => {
            gsap.to("#cursor", {
                x: e.clientX,
                y: e.clientY,
                duration: 1.5,
                ease: "power3.out"
            })
        }

        window.addEventListener("mousemove", handleInitialPosition);
    },[])
    return(
        <div id="cursor" className="opacity-0 scale-0 bg-zinc-200 h-5 w-5 fixed z-[9999] rounded-full pointer-events-none mix-blend-difference max-sm:invisible"></div>
    );
}
export default Cursor