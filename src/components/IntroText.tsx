import { motion } from "motion/react";
import { STYLE_SUBHEADING_INDEX } from "../data/data_styles";
import { fadeIn } from "../data/data_motion";

export default function Intro({ children }: {
  children: React.ReactNode
}) {
  return (
    <div className="overflow-y-hidden">
      <motion.div
        {...fadeIn}
        className={`${STYLE_SUBHEADING_INDEX} font-normal text-gray-900 leading-normal text-clamp-xs`}
      >
        {children}
      </motion.div>
    </div>
  );
}