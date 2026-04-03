import Avatar from "./Avatar.tsx";
import { STYLE_CONTAINER } from "../data/data_styles.ts";
import { motion } from "motion/react";

export default function Header() {
  return (
    <motion.header className="w-full">
      <div className={STYLE_CONTAINER}>
        <nav className="flex h-[64px] w-full items-center gap-4 z-1 relative border-b">
          <Avatar />
        </nav>
      </div>
    </motion.header>
  );
}
