import { DEFAULT_CURSOR_OFFSET, cursorButtonClasses, cursorClasses } from "../data/data_cursor";
import { isNotEmptyString } from "../utils/helpers";
import { motion } from "motion/react";
import { useState, useEffect, useCallback } from "react";
import useCursor from "../hooks/useCursor";
import clsx from "clsx";

export default function Cursor() {
  const [position, setPosition, mouseEvent] = useCursor();
  const [text, setText] = useState("");
  const [cursorAnimation, setCursorAnimation] = useState("cursor");
  const [targetRect, setTargetRect] = useState<DOMRect>({} as DOMRect);

  const resetCursor = useCallback(() => {
    setCursorAnimation("cursor")
    setText("");
  }, []);

  const findDataCursorAncestor = (target: HTMLElement | null) => {
    // Traverse upwards to find the first ancestor with data-cursor
    let element = target;
    while (element) {
      if (element.dataset?.cursor) {
        return element;
      }
      element = element.parentElement;
    }
    return null; // No ancestor with data-cursor
  };

  useEffect(() => {
    if (mouseEvent) {
      const target = mouseEvent?.target as HTMLElement;
      const dataCursorAncestor = findDataCursorAncestor(target);

      if (dataCursorAncestor) {
        const { nodeName, dataset } = dataCursorAncestor;
        const rect = dataCursorAncestor.getBoundingClientRect();

        if (nodeName === "A" && dataset.cursor) {
          setTargetRect(rect);
          setText("");
          setCursorAnimation("link");
        } 
        else if (nodeName === "ARTICLE" && dataset.cursor) {
          setTargetRect(rect);
          setText("");
          setCursorAnimation("article");
        }
        else if (dataset.cursor && isNotEmptyString(dataset.cursor)) {
          setText(dataset.cursor);
          setCursorAnimation("button");
        }
      } else {
        resetCursor();
      }
    }
  }, [mouseEvent]);

  return (
    <motion.div
      className={clsx(
        "grid place-items-center",
        cursorAnimation === "cursor" ? cursorClasses : cursorButtonClasses
      )}
      variants={{
        initial: {
          opacity: 0,
        },
        link: {
          opacity: 1,
          width: 8,
          height: 8,
          padding: 0,
          borderRadius: "50%",
          x: targetRect?.left - 12,
          y: targetRect?.bottom - targetRect?.height / 2 - 4,
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          transition: { type: "linear", duration: 0.2 }
        },
        article: {
          opacity: 0.75,
          width: 32,
          height: 32,
          padding: 0,
          borderRadius: "50%",
          borderWidth: "6px",
          x: position?.x - 16,
          y: position?.y - 16,
          transition: { type: "linear", duration: 0.1, ease: "easeOut" }
        },
        cursor: {
          opacity: 1,
          width: 8,
          height: 8,
          padding: 0,
          borderRadius: "50%",
          x: position?.x - DEFAULT_CURSOR_OFFSET,
          y: position?.y - DEFAULT_CURSOR_OFFSET,
          transition: { type: "linear", duration: 0.1, ease: "easeOut" }
        },
        button: {
          opacity: 1,
          x: position?.x,
          y: position?.y,
          width: "fit-content",
          height: "fit-content",
          padding: "4px 8px",
          borderRadius: "8px",
          fontSize: "14px",
          transition: { type: "linear", duration: 0.1 }
        }
      }}
      initial="cursor"
      animate={cursorAnimation}
    >
      {text}
    </motion.div>
  );
}