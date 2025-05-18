import { useState, useCallback, useEffect } from "react";
import { motion } from "motion/react";
import clsx from "clsx";

const letterVariantsFirst = {
  render: {
    pathLength: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      type: "tween",
      ease: "circInOut"
    }
  },
  playing: {
    pathLength: 1,
    fill: "rgb(0,0,0)",
    scaleY: 0.9,
    transition: {
      type: "tween",
      ease: "circInOut"
    }
  }
}

const letterVariantsSecond = {
  render: {
    pathLength: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      type: "tween",
      ease: "circInOut"
    }
  },
  playing: {
    pathLength: 1,
    fill: "rgb(0,0,0)",
    scaleY: 0.9,
    transition: {
      delay: 0.2,
      duration: 0.2,
      type: "tween",
      ease: "circInOut"
    }
  }
}

export default function Name() {
  const [nameSoundPlaying, setNameSoundPlaying] = useState(false);
  const [nameAnimation, setNameAnimation] = useState("render");
  const [isHovered, setIsHovered] = useState(false);

  const handleNameClick = useCallback(() => {
    if (!nameSoundPlaying) {
      setNameSoundPlaying(true);
      setNameAnimation("playing");
      const namePronunciationAudio = new Audio("/sounds/sound_name.m4a");

      namePronunciationAudio.play()
        .then(() => {
          namePronunciationAudio.onended = () => {
            setNameSoundPlaying(false);
            setNameAnimation("render");
          };
        })
        .catch(() => {
          setNameSoundPlaying(false);
          setNameAnimation("render");
        })
    }
  }, [nameSoundPlaying]);

  return (
    <div 
      className={clsx(
        (isHovered || nameAnimation === "playing") && "z-4",
        "absolute w-full bottom-0"
      )}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <motion.svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 35.14 11.12"
        data-cursor="Pronounce"
        className="cursor-pointer"
        onClick={handleNameClick}
        animate={nameAnimation}
      >
        <motion.path
          className="pointer-events-none"
          variants={letterVariantsFirst}
          initial={{
            pathLength: 0,
          }}
          animate={nameAnimation}
          d="M6.97,8.48h-.48c.17-.77.52-2.55,1.04-5.32l.28-1.46c-.49.61-1.09,1.42-1.79,2.44s-1.67,2.47-2.9,4.34h-1.08c.25-.46.51-1.17.8-2.11.55-1.8.83-3.2.83-4.2,0-1.19-.36-1.79-1.08-1.79-.32,0-.6.08-.86.24s-.47.37-.63.62-.29.54-.4.86c-.2.58-.29,1.17-.29,1.76s.09,1.16.26,1.7.46.93.85,1.2l-.28.23c-.41-.35-.72-.81-.91-1.38S.03,4.52.03,4.05s.03-.88.09-1.22.16-.68.29-1.02.3-.64.5-.9.44-.47.75-.63S2.29.03,2.67.03s.7.06.98.19.49.31.65.54c.3.44.45,1.02.45,1.73,0,1.14-.41,2.69-1.24,4.65,1.29-2.17,2.3-3.73,3.04-4.7.66-.88,1.28-1.54,1.84-2.01l.42.19-1.05,6.83c.85-.57,1.54-1.28,2.07-2.1s.89-1.71,1.06-2.64c-.38-.18-.71-.42-.98-.71s-.41-.6-.41-.92.08-.57.25-.76.37-.28.61-.28.43.04.57.13.25.2.33.35c.15.29.23.61.23.97s-.03.72-.09,1.08c.28.14.58.25.91.32l-.08.28c-.5-.12-.8-.21-.9-.25-.25,1.17-.73,2.23-1.46,3.18s-1.68,1.75-2.87,2.4ZM10.13,1.13c.04.45.32.85.83,1.21.06-.3.09-.56.09-.76s0-.33,0-.4-.02-.15-.04-.26c-.05-.22-.18-.33-.39-.33-.14,0-.25.05-.34.15s-.14.21-.14.35v.04Z"
          fill="#fff" stroke="#222" strokeWidth="0.1" />
        <motion.path
          className="pointer-events-none"
          variants={letterVariantsFirst}
          initial={{
            pathLength: 0,
          }}
          animate={nameAnimation}
          d="M10.6,7.09c0-.29.07-.58.21-.85s.33-.5.55-.69c.5-.41,1.01-.61,1.53-.61s.95.14,1.28.42.5.62.5,1.04-.11.79-.34,1.12-.53.59-.91.78-.78.28-1.23.28-.82-.14-1.13-.42-.47-.64-.47-1.07ZM12.51,8.21c.18,0,.35-.06.51-.18s.28-.27.36-.46c.16-.36.24-.73.24-1.11s-.07-.67-.21-.87-.34-.3-.6-.3-.51.17-.76.5-.38.76-.38,1.28c0,.75.28,1.12.84,1.12Z"
          fill="#fff" stroke="#222" strokeWidth="0.1" />
        <motion.path
          className="pointer-events-none"
          variants={letterVariantsFirst}
          initial={{
            pathLength: 0,
          }}
          animate={nameAnimation}
          d="M16.74,6.84c.82-1.26,1.55-1.89,2.2-1.89.22,0,.38.07.49.2s.16.3.16.5-.09.55-.27,1.05-.27.81-.27.93.03.18.09.18c.08,0,.19-.08.35-.24s.29-.33.4-.51l.25.23c-.23.43-.49.75-.77.96s-.51.33-.68.33-.31-.06-.41-.17-.15-.27-.15-.47.08-.52.24-.98.24-.77.24-.96-.06-.28-.19-.28c-.15,0-.32.09-.53.28s-.4.42-.59.69c-.3.44-.62.94-.93,1.51l-.16.28h-.83l.18-.55c.34-1.02.51-1.62.51-1.81s-.03-.28-.09-.28c-.11,0-.25.13-.4.4-.04.06-.06.11-.09.15s-.05.08-.08.13-.05.08-.06.1l-.39-.23c.3-.5.58-.86.84-1.1s.51-.35.78-.35c.12,0,.23.05.31.15s.13.22.13.37-.01.29-.04.42-.05.25-.07.35-.06.21-.1.35-.06.23-.07.25Z"
          fill="#fff" stroke="#222" strokeWidth="0.1" />
        <motion.path
          className="pointer-events-none"
          variants={letterVariantsSecond}
          initial={{
            pathLength: 0,
          }}
          animate={nameAnimation}
          d="M22.07,2.15c.28-.6.65-1.08,1.11-1.44s.96-.55,1.48-.55c.31,0,.58.08.8.23s.34.39.34.71c0,.18-.06.33-.18.43s-.27.15-.43.15-.31-.05-.42-.14-.17-.22-.17-.36.05-.3.16-.46c-.13-.06-.26-.09-.39-.09s-.27.05-.43.15-.3.24-.44.4c-.23.3-.45.66-.65,1.09s-.51,1.47-.93,3.11-.64,2.68-.64,3.1h-.93c0-.67.19-1.68.57-3.03s.76-2.45,1.15-3.3ZM24.35,8.24c-.26.23-.53.34-.79.34s-.46-.11-.59-.33-.25-.42-.36-.61-.19-.33-.26-.43-.12-.21-.18-.3-.09-.16-.12-.2-.05-.08-.07-.12c-.02-.04-.04-.09-.05-.13l.17-.19c1.11-1.18,1.98-1.77,2.61-1.77.24,0,.43.06.56.18s.2.25.2.39-.05.27-.14.38-.22.17-.38.17-.29-.04-.38-.12-.14-.16-.16-.23l-.02-.12c-.6.32-1.13.68-1.59,1.08-.1.09-.16.14-.18.16.11.08.5.54,1.17,1.39.07.09.14.13.21.13s.17-.05.27-.15.26-.27.47-.52l.24.21c-.17.3-.39.56-.65.79Z"
          fill="#fff" stroke="#222" strokeWidth="0.1" />
        <motion.path
          className="pointer-events-none"
          variants={letterVariantsSecond}
          initial={{
            pathLength: 0,
          }}
          animate={nameAnimation}
          d="M25.75,6.46l-.38-.23c.2-.34.44-.64.73-.9s.55-.39.78-.39c.38,0,.56.17.56.5,0,.14-.1.48-.29,1.03s-.29.89-.29,1.03,0,.24.03.28.06.06.13.06c.36,0,.72-.13,1.1-.4s.62-.56.74-.89l.41-1.2c.04-.12.11-.22.2-.29s.18-.11.26-.11.15.03.21.08.08.13.08.22-.02.18-.05.28l-.45,1.3c-.25.77-.63,1.52-1.14,2.26.45.05.85.13,1.2.24l-.05.33c-.54-.11-1.02-.17-1.43-.19-.38.49-.77.88-1.16,1.17s-.74.44-1.04.44-.52-.06-.66-.18-.22-.28-.22-.49.08-.4.23-.57.37-.31.63-.41c.53-.22,1.14-.34,1.83-.38.05-.06.19-.28.39-.66s.32-.61.33-.71c-.69.59-1.3.88-1.83.88-.21,0-.37-.07-.47-.22s-.15-.33-.15-.54.08-.58.24-1.1.24-.82.24-.89-.02-.11-.05-.11-.07,0-.11.03-.08.04-.11.08-.07.07-.1.11-.07.08-.1.14-.07.1-.08.13c-.08.13-.13.21-.16.26ZM27.44,9.48c-.32.02-.64.08-.97.17-.63.18-.95.39-.95.63,0,.14.09.22.27.22s.47-.13.88-.39.66-.47.77-.63Z"
          fill="#fff" stroke="#222" strokeWidth="0.1" />
        <motion.path
          className="pointer-events-none"
          variants={letterVariantsSecond}
          initial={{
            pathLength: 0,
          }}
          animate={nameAnimation}
          d="M34.79,5.07c-.52,1.39-.79,2.24-.79,2.54,0,.12.03.19.09.19.17,0,.42-.25.75-.75l.25.24c-.21.37-.45.68-.74.92s-.51.37-.69.37c-.36,0-.54-.18-.54-.55,0-.29.07-.63.2-1.04s.2-.62.2-.62c-.02.04-.07.12-.14.24s-.13.22-.16.28-.09.16-.17.28-.15.23-.2.3-.12.17-.21.28-.17.2-.23.27-.15.14-.24.22-.18.14-.27.18c-.2.1-.39.15-.57.15-.46,0-.7-.26-.7-.77,0-.23.08-.6.25-1.09s.25-.79.25-.87-.03-.13-.08-.13c-.16,0-.37.25-.65.74l-.38-.23c.54-.86,1.05-1.28,1.55-1.28.16,0,.29.05.39.14s.14.23.14.42-.1.53-.29,1.01-.28.86-.28,1.12c0,.14.06.21.19.21.15,0,.33-.09.53-.28s.4-.42.59-.69c.3-.43.62-.93.95-1.51l.16-.28h.84Z"
          fill="#fff" stroke="#222" strokeWidth="0.1" />
        </motion.svg>
      </div>
  );
}