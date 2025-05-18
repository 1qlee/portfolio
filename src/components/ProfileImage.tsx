import profile from "../images/wonkyu.png";
import { motion } from "motion/react";

export default function ProfileImage() {

  return (
    <div 
      className="absolute bottom-0 left-[50%] w-full z-1 perspective-midrange"
      style={{
        transform: "translateX(-50%)"
      }}
    >
      <motion.img
        style={{
          filter: "drop-shadow(4px 4px 16px rgba(0,0,0,0.7))",
          margin: "0 auto",
        }}
        width={400}
        height={533}
        src={profile.src}
      />
    </div>
  )
}