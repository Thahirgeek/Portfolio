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
        className="font-[panchangbold] md:text-[8vmax] sm:text-5xl max-sm:text-6xl leading-none border-t border-b border-zinc-600 max-sm:mt-10 pt-3 pb-3"
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
    <div className="min-h-screen mb-10 pt-15 flex flex-wrap sm:items-center max-sm:items-start justify-evenly">
      {animatedText}
      <div className="w-[40vmax] h-fit rounded-xl pl-5 pr-5">
        <AnimatePresence mode="wait">
          {!isActive ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
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
              className="text-zinc-900 sm:p-15 max-sm:p-8 rounded-xl"
            >
              <div className="font-[clash] w-fit">
                <h1 className="text-center lg:text-5xl md:text-3xl sm:text-2xl max-sm:text-4xl sm:pt-10 sm:pb-10 max-sm:pt-5 max-sm:pb-5 border-t border-b rounded-s bg-zinc-900 text-white transition-colors duration-300">
                  Email&apos;s old school
                </h1>
                <h2 className="text-center lg:text-4xl md:text-2xl sm:text-xl max-sm:text-2xl mt-20 tracking-wider border-b rounded-sm">
                  Find me on my socials
                </h2>
                <div className="flex items-center justify-between mt-10 sm:text-2xl max-sm:text-xl gap-1">
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
