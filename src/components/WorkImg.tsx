import { motion, type HTMLMotionProps } from "motion/react";

// Define the types for your props
interface WorkImgProps {
  data: {
    src: string; // This will now be the optimized URL string
    srcSet?: string; // This will be the generated srcset string
    alt: string;
    width?: number; // Add width
    height?: number; // Add height
  };
}

export default function WorkImg({ data, ...props }: WorkImgProps) {
  const { src, srcSet, alt } = data;

  return (
    <motion.img
      className="select-none object-cover h-full w-full"
      src={src}
      srcSet={srcSet}
      sizes="(max-width: 480px) 320px, (max-width: 768px) 640px, 1024px"
      decoding="async"
      loading="lazy"
      alt={alt}
    />
  )
}