import { motion } from "motion/react";
import EmailLink from "./EmailLink";
import Heading from "./Heading";
import { fadeIn } from "../data/data_motion";
import { useState } from "react";
import clsx from "clsx";
import { Suspense } from "react";

export default function Squares() {
  const [mousedOverIndex, setMousedOverIndex] = useState<number | null>(null);
  const linkClasses = "block w-min relative hover-link text-clamp-sm";

  const handleMouseOver = (index: number) => {
    setMousedOverIndex(index);
  };

  const handleMouseLeave = () => {
    setMousedOverIndex(null);
  };

  return (
    <div 
      className="flex gap-4 mt-auto justify-between w-full xs:flex-col sm:flex-row"
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex overflow-y-hidden">
        <motion.div
          className="overflow-y-hidden"
          {...fadeIn}
        >
          <Heading>Frontend Developer</Heading>
          <p
            className="text-clamp-sm">Based in New York</p>
        </motion.div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-hidden">
          <EmailLink 
            onMouseOver={() => handleMouseOver(0)}
            className={clsx(
              linkClasses,
              mousedOverIndex !== 0 && mousedOverIndex !== null ? "text-gray-500" : "text-gray-900"
            )}
          />
        </div>
        <div className="overflow-hidden">
          <motion.a
            className={linkClasses}
            data-cursor="true"
            href="/WonkyuLee_Resume_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onMouseOver={() => handleMouseOver(1)}
            {...fadeIn}
          >
            <p
              className={clsx(
                mousedOverIndex !== 1 && mousedOverIndex !== null ? "text-gray-500" : "text-gray-900"
              )}
            >
              Résumé
            </p>
          </motion.a>
        </div>
        <div className="overflow-hidden">
          <motion.a
            className={linkClasses}
            href="https://github.com/1qlee"
            data-cursor="true"
            target="_blank"
            rel="noopener noreferrer"
            onMouseOver={() => handleMouseOver(2)}
            {...fadeIn}
          >
            <p
              className={clsx(
                mousedOverIndex !== 2 && mousedOverIndex !== null ? "text-gray-500" : "text-gray-900"
              )}
            >
              GitHub
            </p>
          </motion.a>
        </div>
        <div className="overflow-hidden">
          <motion.a
            className={linkClasses}
            href="https://bsky.app/profile/wonkyu.bsky.social"
            data-cursor="true"
            target="_blank"
            rel="noopener noreferrer"
            onMouseOver={() => handleMouseOver(3)}
            {...fadeIn}
          >
            <p
              className={clsx(
                mousedOverIndex !== 3 && mousedOverIndex !== null ? "text-gray-500" : "text-gray-900"
              )}
            >
              Bluesky
            </p>
          </motion.a>
        </div>
      </div>
    </div>
  )
}