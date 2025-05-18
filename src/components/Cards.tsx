import { CARDS_DATA, CARD_WIDTH, BLURGRADIENT_WIDTH } from "../data/data_cards";
import BlurGradient from "./BlurGradient";
import Card from "./Card";
import { motion, useMotionValue, useTransform, type PanInfo } from "motion/react";
import { useRef, useEffect, useState } from "react";

export default function Cards() {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousedOverIndex, setMousedOverIndex] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [dragging, setDragging] = useState(false);
  const maxLeft = -(CARD_WIDTH + 32) * (CARDS_DATA.length) + containerWidth + 32;
  const gradientLeft = useTransform(x, [0, -BLURGRADIENT_WIDTH], [-BLURGRADIENT_WIDTH, 0]);
  const gradientRight = useTransform(x, [maxLeft + BLURGRADIENT_WIDTH, maxLeft], [0, BLURGRADIENT_WIDTH]);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleDrag(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    if (!containerRef.current) return;

    const style = window.getComputedStyle(containerRef.current);
    const transformMatrix = style.transform;

    if (transformMatrix && transformMatrix !== "none") {
      // The transform property can have multiple transformations.
      // We need to extract the translateX value from the matrix.
      const matrixValues = transformMatrix.substring(7).slice(0, -1).split(', ');
      const translateX = parseFloat(matrixValues[4]); // translateX is typically the 5th value

      x.set(translateX);
    }
  }

  return (
    <div
      className="relative z-2 w-full h-max overflow-hidden mt-8 py-4"
      onMouseLeave={() => setMousedOverIndex(null)}
      style={{
        cursor: dragging ? "grabbing" : "grab",
      }}
    >
      <motion.div
        className="w-[64px] h-full pointer-events-none absolute left-0 top-0 z-1"
        style={{
          x: gradientLeft
        }}
      >
        <BlurGradient
          direction="left"
        />
      </motion.div>
      <motion.div
        ref={containerRef}
        className="flex gap-8 items-center"
        drag="x"
        onDrag={handleDrag}
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
        dragMomentum={false}
        dragConstraints={{
          left: maxLeft,
          right: 0,
        }}
      >
        {CARDS_DATA.map((card, index) => (
          <Card
            key={index}
            data={card}
            dragging={dragging}
            index={index}
            activeIndex={mousedOverIndex}
            setActiveIndex={setMousedOverIndex}
            x={x}
          />
        ))}
      </motion.div>
      <motion.div
        className="w-[64px] h-full pointer-events-none absolute right-0 top-0 z-1"
        style={{
          x: gradientRight
        }}
      >
        <BlurGradient
          direction="right"
        />
      </motion.div>
    </div>
  )
}