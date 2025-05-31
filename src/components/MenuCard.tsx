import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { Dispatch, SetStateAction } from "react";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Variants = {
  open: {
    width: "250px",
    height: "400px",
    top: -3,
    right: -3,
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100%",
    height: "100%",
    transition: {
      duration: 0.75,
      delay: 0.15,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const VariantsLinks2 = {
  open: {
    opacity: 1,
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.75,
      delay: 0.15,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const VariantsLinks1 = {
  open: {
    fontSize: "2em",
    opacity: 1,
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    fontSize: "0em",
    opacity: 0,
    transition: {
      duration: 0.75,
      delay: 0.15,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

interface Prop {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  handleRouteChange: (path: string) => void;
}

const MenuCard = ({ isActive, setIsActive, handleRouteChange }: Prop) => {
  
  return (
    <motion.div
      variants={Variants}
      animate={isActive ? "open" : "closed"}
      initial="closed"
      className="absolute top-0 right-0 rounded-lg bg-zinc-800 flex flex-col items-start justify-between overflow-hidden"
    >
      <motion.div
        variants={VariantsLinks1}
        animate={isActive ? "open" : "closed"}
        initial="closed"
        className="font-[clash] ml-5 mt-[2em] list-none"
      >
        <li>
          <div
            onMouseEnter={() =>
              gsap.to("#cursor", { scale: 1.8, duration: 0.25 })
            }
            onMouseLeave={() =>
              gsap.to("#cursor", { scale: 1, duration: 0.25 })
            }
            onClick={() => {
              setIsActive(false);
              handleRouteChange("/");
            }}
            className="text-zinc-300 hover:text-white transition-colors duration-300"
          >
            - Home
          </div>
        </li>
        <li>
          <div
            onMouseEnter={() =>
              gsap.to("#cursor", { scale: 1.8, duration: 0.25 })
            }
            onMouseLeave={() =>
              gsap.to("#cursor", { scale: 1, duration: 0.25 })
            }
            onClick={() => {
              setIsActive(false);
              handleRouteChange("/projects");
            }}
            className="text-zinc-300 hover:text-white transition-colors duration-300"
          >
            - Projects
          </div>
        </li>
        <li>
          <div
            onMouseEnter={() =>
              gsap.to("#cursor", { scale: 1.8, duration: 0.25 })
            }
            onMouseLeave={() =>
              gsap.to("#cursor", { scale: 1, duration: 0.25 })
            }
            onClick={() => {
              setIsActive(false);
              handleRouteChange("/contact");
            }}
            className="text-zinc-300 hover:text-white transition-colors duration-300"
          >
            - Contact
          </div>
        </li>
      </motion.div>
      <motion.div
        variants={VariantsLinks2}
        animate={isActive ? "open" : "closed"}
        initial="closed"
        className="w-full flex items-center justify-between mb-3 pl-5 pr-5 text-zinc-300 font-[clash] text-xl border-b border-zinc-300"
      >
        <Link
          onMouseEnter={() =>
            gsap.to("#cursor", { scale: 1.8, duration: 0.25 })
          }
          onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.25 })}
          onClick={() => setIsActive(false)}
          className="hover:text-white transition-colors duration-300 flex items-center justify-center gap-1"
          href="https://www.linkedin.com/in/thahirdottsx"
        >
          LinkedIn
          <FaLinkedin className="" />
        </Link>
        <Link
          onMouseEnter={() =>
            gsap.to("#cursor", { scale: 1.5, duration: 0.25 })
          }
          onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.25 })}
          onClick={() => setIsActive(false)}
          className="hover:text-white transition-colors duration-300"
          href="https://x.com"
        >
          <RiTwitterXFill className="text-zinc-300 hover:text-white" />
        </Link>
      </motion.div>
      {/* <div className="bg-zinc-500 h-[1px] w-full absolute bottom-6"></div> */}
    </motion.div>
  );
};

export default MenuCard;
