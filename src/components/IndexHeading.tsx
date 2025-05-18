import { motion } from "motion/react"
import type { ReactNode } from "react"
import { fadeIn } from "../data/data_motion"
import { STYLE_HEADING_INDEX } from "../data/data_styles"

export default function IndexHeading({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-y-hidden">
      <motion.h2
        className={STYLE_HEADING_INDEX}
        {...fadeIn}
      >
        {children}
      </motion.h2>
    </div>
  )
}