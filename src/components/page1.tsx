"use client";
import { BoxReveal } from "./magicui/box-reveal";
import { TextAnimate } from "@/components/magicui/text-animate";
import gsap from "gsap";
import "../app/globals.css";
const Page1 = () => {
  return (
    <div>
      <main className="h-[95vh] flex flex-col justify-end sm:m-[0_2vmax] sm:p-[0_2vmax] max-sm:m-[0_1vmax] max-sm:p-[0_1vmax] mt-[15vh] border-b-1 border-zinc-600">
        <div className="flex flex-1 flex-col justify-center items-end font-[clash] sm:text-[2vmax] max-sm:text-[3vmax]">
          <TextAnimate
            animation="blurInUp"
            by="line"
            className="underline"
            once
          >
            thahir -
          </TextAnimate>
          <TextAnimate
            animation="blurInUp"
            by="line"
            className="underline"
            once
          >
            19 -
          </TextAnimate>
          <TextAnimate
            animation="blurInUp"
            by="line"
            className="underline"
            once
          >
            student -
          </TextAnimate>
          <div className="flex items-center gap-[0.7vmax] pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon sm:size-[1.5vmax] max-sm:size-[2.1vmax]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <TextAnimate
              animation="blurInUp"
              by="line"
              once
              className="flex items-center gap-[1vmax] underline"
            >
              andhra pradesh, India -
            </TextAnimate>
          </div>
        </div>
        <h1 className="leading-none sm:font-[panchanglight] max-sm:font-[thunder] sm:text-[8vmax] max-sm:text-[9vmax] pl-1">
          Hi I'm a
        </h1>
        <BoxReveal>
          <h1
            onMouseEnter={() =>
              gsap.to("#cursor", { scale: 12, duration: 0.5 })
            }
            onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.5 })}
            className="sm:font-[panchangbold] max-sm:font-[humanesemibold] sm:text-[12vmax] max-sm:text-[23vmax] text-center leading-none"
          >
            Developer
          </h1>
        </BoxReveal>
      </main>

      <div className="relative bg-zinc-300 min-h-screen m-5 rounded-[3vmax] flex flex-col items-center justify-center p-3">
        <div className="flex flex-col items-center">
          <h1 className="font-[panchanglight] text-[4vmax]">About</h1>
          <p className="font-[outfitlight] text-[2vmax] w-full text-center pb-20 text-zinc-800">
            I am a <u>developer</u>. I am a guy who figure things out until <u>they work</u>.
            <br></br>Then I polish it until it feels real magic.
          </p>
          <div className="flex flex-wrap items-center bg-zinc-100 rounded-xl justify-center pl-2 pr-2 pt-1 pb-1 shadow-zinc-400 shadow-xl">
            <h2 className="font-[outfitlight] text-xl">Tools?</h2>
            <div className="bg-zinc-900 text-white font-[clash] pl-3 pr-3 pt-1 pb-1 rounded-lg sm:ml-3">
              <p>
                MERN &nbsp; | &nbsp; Typescript &nbsp; | &nbsp; Next.js &nbsp; | &nbsp; Tailwind &nbsp; | &nbsp; Caffeine
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[0.1vh] bg-zinc-600 absolute bottom-[10vh]"></div>
      </div>
    </div>
  );
};
export default Page1;
