import { motion } from "motion/react";
import { type ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
}

export default function Title({ children }: TitleProps) {
  return (
    <motion.h1
      initial={{
        x: -32,
      }}
      animate={{
        x: 0
      }}
      transition={{
        duration: 0.5,
        type: "spring"
      }}
      className="block text-clamp-lg"
    >
      {children}
    </motion.h1>
  )
}