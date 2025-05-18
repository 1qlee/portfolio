import Avatar from "./Avatar.tsx";
import { STYLE_CONTAINER } from "../data/data_styles.ts";
import { motion } from "motion/react";
import { fadeIn } from "../data/data_motion.ts";

export default function Header() {
  return (
    <motion.header
      className="w-full"
    >
      <div className={STYLE_CONTAINER}>
        <nav className="flex h-[64px] w-full items-center gap-4 z-1 relative border-b">
          <Avatar />
          <div className="flex items-center gap-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="#f00"
                viewBox="0 0 256 256"
              >
                <path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path>
              </svg>
            </span>
            <p>Available in July</p>
          </div>
        </nav>
      </div>
    </motion.header>
  )
}