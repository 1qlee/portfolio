import { motion, MotionValue } from "motion/react";
import { CARDS_DATA } from "../data/data_cards";
import { useState } from "react";
import clsx from "clsx";
import { navigate } from "astro:transitions/client";
import WorkImg from "./WorkImg";
import { fadeIn } from "../data/data_motion";

type CardProps = {
  dragging: boolean;
  x: MotionValue<number>;
  data: typeof CARDS_DATA[0];
  index: number;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Card({ dragging, data, index, activeIndex, setActiveIndex }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
      <motion.article
        className={`w-[320px]`}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onMouseOver={() => setActiveIndex(index)}
        onClick={() => {
          if (!dragging) navigate(`/work/${data.slug}`)
        }}
        data-cursor="true"
        {...fadeIn}
      >
        <div className="border border-b-[0px] pl-2">
          <h3 className={clsx(
            "relative inline-block hover-link uppercase text-xs font-medium mb-1 transition-colors duration-200",
            isHovered && "active",
            activeIndex !== index && activeIndex !== null ? "text-gray-500" : "text-gray-900"
          )}>{data.title}</h3>
        </div>
        <div
          className={clsx(
            `overflow-hidden pointer-events-none w-[320px] h-[210px] transition-all duration-200 border`,
            activeIndex !== index && activeIndex !== null ? "opacity-50" : "blur-none scale-none"
          )}
        >
          <WorkImg
            data={data}
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </motion.article>
  )
}