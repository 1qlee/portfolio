import { useCallback, useState } from "react";
import { fadeIn } from "../data/data_motion";
import { motion } from "motion/react";

export default function EmailLink({ ...props }) {
  const [copied, setCopied] = useState(false)

  const copyEmail = useCallback(async () => {
    if (!navigator.clipboard) {
      return;
    }

    try {
      await navigator.clipboard.writeText("wonkyu.business@gmail.com");
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000)
    }
    catch (err) {
      setCopied(false);
      return;
    }
  }, [])

  return (
    <motion.a
      data-cursor="true"
      role="button"
      aria-label="Click to copy email address"
      onClick={copyEmail}
      {...props}
      {...fadeIn}
    >
      <p
        className="text-clamp-sm"
      >
        {copied ? (
          "Copied"
        ) : (
          "Email"
        )}
      </p>
    </motion.a>
  )
}