import { motion, type PanInfo, useMotionValue, useTransform } from "motion/react";
import { stats } from "../data/data_stats";
import { useState, useEffect, useRef } from "react";
import BlurGradient from "./BlurGradient";

export default function Stats() {
  const motionY = useMotionValue(0);
  const wheelEventRef = useRef<NodeJS.Timeout | null>(null);
  const container = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [moveY, setMoveY] = useState(0);
  const [maxY, setMaxY] = useState(0);
  const bottomGradientY = useTransform(motionY, [-maxY, -maxY + 144], [144, 0]);

  const handlePan = (event: PointerEvent, info: PanInfo) => {
    const deltaY = info.delta.y;

    if (moveY > 0 && deltaY > 0) {
      setMoveY(prev => prev + deltaY * 0.33);
      motionY.set(0);
    }
    else if (moveY < -maxY && deltaY < 0) {
      setMoveY(prev => prev + deltaY * 0.33);
      motionY.set(-maxY);
    }
    else {
      setMoveY(prev => prev + deltaY);
      motionY.set(motionY.get() + deltaY);
    }
  }

  const handlePanConstraint = () => {
    if (moveY > 0) {
      setMoveY(0);
      motionY.set(0);
    }
    if (moveY < -maxY) {
      setMoveY(-maxY);
      motionY.set(-maxY);
    }
  }

  useEffect(() => {
    if (!container.current) return;

    setMaxY(container.current.getBoundingClientRect().top - 128);

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      if (Math.abs(event.deltaY) > 0) {
        if (wheelEventRef.current) {
          clearTimeout(wheelEventRef.current);
        }

        const reverseDelta = -event.deltaY / 3;

        if (moveY > 0 && reverseDelta > 0) {
          setMoveY(0);
          motionY.set(0);
        }
        else if (moveY < -maxY && reverseDelta < 0) {
          setMoveY(-maxY);
          motionY.set(-maxY);
        }
        else {
          setMoveY(prev => prev + reverseDelta);
          motionY.set(motionY.get() + reverseDelta);
        }

        wheelEventRef.current = setTimeout(() => {
          handlePanConstraint();
        }, 100)
      }
    }

    container.current.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.current?.removeEventListener("wheel", handleWheel);
    }
  }, [motionY, moveY])

  // Detect when a child is centered
  useEffect(() => {
    const checkCenteredChild = () => {
      if (!container.current) return;

      const parentBox = container.current.getBoundingClientRect();
      const parentCenterY = parentBox.top + parentBox.height / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      stats.forEach((_, index) => {
        const child = container.current?.children[index] as HTMLDivElement;
        if (!child) return;

        const childBox = child.getBoundingClientRect();
        const childCenterY = childBox.top + childBox.height / 2;
        const distance = Math.abs(parentCenterY - childCenterY);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    requestAnimationFrame(checkCenteredChild);
  }, [moveY]);

  return (
     <motion.div
      ref={container}
      className="relative pl-6 overflow-hidden h-[300px] w-full pt-16 perspective-midrange z-2"
      onPan={handlePan}
      onPanEnd={handlePanConstraint}
     >
      {stats.map((stat, index) => {
        const rotateX = activeIndex === index ? 0 : index < activeIndex ? 45 : -45;

        return (
          <motion.div
            key={index}
            className={`border rounded bg-white shadow-lg inline-block mb-4 w-[320px] select-none`}
            animate={{
              y: moveY,
              z: activeIndex === index ? 60 : 0,
              rotateX
            }}
            transition={{
              type: "tween",
              duration: 0.3
            }}
          >
            <div
              className="bg-gray-900 text-gray-100 text-clamp-xs px-2 inline-block"
            >
              {stat.title}
            </div>
            <p className="p-2 inline-block">{stat.text}</p>
          </motion.div>
        )
      })}
      <motion.div
        className="flex-none h-[144px] left-0 w-full pointer-events-none absolute right-0 bottom-0 z-1"
        style={{
          y: bottomGradientY,
        }}
      >
        <BlurGradient
          direction="bottom"
        />
      </motion.div>
     </motion.div>
  )
}