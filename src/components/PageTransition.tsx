"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const quotes = [
    "No AI, Just I",
    "This ain't Wix",
    "Probably overengineered this",
    "404: Template not found",
    "Yes I could have used WordPress",
  ];


const PageTransition = ({ show }: { show: boolean }) => {

  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote( quotes[Math.floor(Math.random() * quotes.length)] );
  }, [show])
  

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: "100%", }}
          animate={{ y: 0, }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.83, 0, 0.5, 1] }}
          className="bg-zinc-800 fixed top-0 left-0 w-full h-full z-[9999999] flex items-center justify-center text-white font-[clash] text-2xl p-10 rounded-b-xl"
        >
        <p className="text-center tracking-wider">{quote}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
