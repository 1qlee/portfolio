import { motion, AnimatePresence } from "motion/react";

export default function Background({
  color = "rgba(255,255,255)",
}: { color: string }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          background: color
        }}
        animate={{
          background: color
        }}
        transition={{
          duration: 1,
          delay: 0.25,
        }}
        className="fixed pointer-events-none h-full w-full top-0 left-0"
      >
      </motion.div>
    </AnimatePresence>
  )
}