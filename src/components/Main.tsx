import Header from "./Header";
import Squares from "./Squares";
import Cards from "./Cards";
import Name from "./Name";
import { STYLE_CONTAINER } from "../data/data_styles";

import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";

export default function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const minimumLoadingTime = 500;

    const elapsedTime = Date.now() - startTime;
    const timeToWait = Math.max(0, minimumLoadingTime - elapsedTime);

    const timerId = setTimeout(() => {
      setLoading(false);
    }, timeToWait);

    return () => {
      clearTimeout(timerId);
    };
  })
    
  return (
    <>
      <AnimatePresence>
        {loading && (
          <div>
            <motion.div
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5 }}
              className="h-full w-full fixed top-0 left-0 bg-black z-11"
            >
            </motion.div>
            <div className="absolute overflow-y-hidden z-12 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.h1
                className="text-white text-clamp-md font-semibold text-center"
                exit={{
                  y: 64
                }}
              >
                <span className="flash">Won</span>
                <span className="flash middle">kyu</span>
                <span className="flash last">&nbsp;Lee</span>
              </motion.h1>
            </div>
          </div>
        )}
      </AnimatePresence>
      <main className="pt-8 h-[calc(100%-64px)]">
        <section className="h-full">
          <div className={`${STYLE_CONTAINER} h-full`}>
            <div className="relative h-full gap-y-4">
              <Squares />
              <Cards />
              <Name />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}