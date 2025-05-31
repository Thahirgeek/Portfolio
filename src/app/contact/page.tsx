"use client";

import Form from "@/components/Form";
import { TextAnimate } from "@/components/magicui/text-animate";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";
import { useMemo, useState } from "react";
import { RiTwitterXFill } from "react-icons/ri";

const Contact = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const animatedText = useMemo(
    () => (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-[panchangbold] md:text-[8vmax] sm:text-[10vw] max-sm:text-[14vw] leading-none border-t border-b border-zinc-600 max-sm:mt-10 pt-3 pb-3"
      >
        <TextAnimate animation="blurInUp" by="line" delay={0.4} once>
          I &nbsp;reply
        </TextAnimate>
        <TextAnimate animation="blurInUp" by="line" delay={0.5} once>
          faster
        </TextAnimate>
        <TextAnimate animation="blurInUp" by="line" delay={0.6} once>
          than
        </TextAnimate>
        <TextAnimate animation="blurInUp" by="line" delay={0.7} once>
          ChatGPT
        </TextAnimate>
      </motion.div>
    ),
    []
  );

  return (
    <div className="min-h-screen mb-10 pt-15 flex sm: items-center justify-evenly max-sm:flex-col max-sm:items-center max-sm:justify-start  max-sm:gap-10">
      {animatedText}
      <div className="w-100 h-fit rounded-xl flex items-center justify-center ">
        <AnimatePresence mode="wait">
          {!isActive ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className=""
            >
              <Form setIsActive={setIsActive} />
            </motion.div>
          ) : (
            <motion.div
              key="para"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-zinc-900 sm:p-15 max-sm:p-8 rounded-xl w-fit"
            >
              <div className="font-[clash] w-fit h-fit">
                <h1 className="text-center lg:text-5xl md:text-3xl sm:text-2xl max-sm:text-[8vw] sm:pt-10 sm:pb-10 max-sm:pt-5 max-sm:pb-5 max-sm:pl-3 max-sm:pr-3 border-t border-b rounded-s bg-zinc-900 text-white transition-colors duration-300">
                  Email&apos;s old school
                </h1>
                <h2 className="text-center lg:text-4xl md:text-2xl sm:text-xl max-sm:text-[6vw] mt-20 tracking-wider border-b rounded-sm">
                  Find me on my socials
                </h2>
                <div className="flex items-center justify-between mt-10 sm:text-2xl max-sm:text-[5vw] gap-1">
                  <Link
                    href="https://www.linkedin.com/in/thahirdottsx"
                    onMouseEnter={() =>
                      gsap.to("#cursor", { scale: 1.5, duration: 0.2 })
                    }
                    onMouseLeave={() =>
                      gsap.to("#cursor", { scale: 1, duration: 0.3 })
                    }
                    className="hover:bg-zinc-900 lg:text-2xl md:text-xl sm:text-xl hover:text-white border-b transition-colors duration-300 rounded-sm p-1"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    href="https://x.com/"
                    onMouseEnter={() =>
                      gsap.to("#cursor", { scale: 1.5, duration: 0.2 })
                    }
                    onMouseLeave={() =>
                      gsap.to("#cursor", { scale: 1, duration: 0.3 })
                    }
                    className="hover:bg-zinc-900 lg:text-2xl md:text-xl sm:text-xl hover:text-white border-b transition-colors duration-300 rounded-sm p-1"
                  >
                    <RiTwitterXFill className="text-zinc-900 hover:text-white" />
                  </Link>
                  <Link
                    href="https://github.com/Thahirgeek"
                    onMouseEnter={() =>
                      gsap.to("#cursor", { scale: 1.5, duration: 0.2 })
                    }
                    onMouseLeave={() =>
                      gsap.to("#cursor", { scale: 1, duration: 0.3 })
                    }
                    className="hover:bg-zinc-900 lg:text-2xl md:text-xl sm:text-xl hover:text-white border-b transition-colors duration-300 rounded-sm p-1"
                  >
                    Github
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Contact;
