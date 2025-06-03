import { motion } from "motion/react";
import avatarImage from "../images/avatar.webp";

const drawerAnimation = {
  borderColor: "rgba(0,0,255)",
  transition: { type: "spring", stiffness: 500 },
}

export default function Avatar() {
  return (
    <a className="block" href="/">
      <motion.div
        className="relative content-end"
        whileHover={drawerAnimation}
        whileTap={drawerAnimation}
      >
        <img
          className="rounded-full border border-gray-500"
          width={48}
          height={48}
          src={avatarImage.src}
          alt="Headshot photo of Wonkyu Lee, a young Asian man."
        />
      </motion.div>
    </a>
  )
}