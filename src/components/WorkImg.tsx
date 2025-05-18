import { motion, type HTMLMotionProps } from "motion/react";

type WorkImgProps = {
  data: {
    alt: string;
    src: string;
    srcSet: string;
  }
} & HTMLMotionProps<'img'>

export default function WorkImg({ data, ...props }: WorkImgProps) {
  return (
    <motion.img
      className="select-none object-cover h-full w-full"
      src={data.src}
      srcSet={data.srcSet}
      sizes="(max-width: 480px) 320px, (max-width: 768px) 640px, 1024px"
      decoding="async"
      loading="lazy"
      alt={data.alt}
    />
  )
}