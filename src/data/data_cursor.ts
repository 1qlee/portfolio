import type { CSSProperties } from "react"

export const cursorButtonClasses = "fixed pointer-events-none z-[9999] rounded-lg visible p-2 px-4 border border-white bg-gray-900 text-gray-100 shadow-lg";
export const cursorClasses = "fixed pointer-events-none z-[9999] w-2 h-2 rounded-full border border-white bg-gray-900";

export const interactiveCursorStyle: CSSProperties = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 9999,
  borderRadius: "16px",
  visibility: "visible",
  padding: "8px 16px",
  border: '1px solid white',
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25), 0 -2px 8px rgba(0, 0, 0, 0.25)",
  backgroundColor: "var(--color-gray-900)",
  color: "var(--color-gray-100)"
}

export const initialCursorStyle: CSSProperties = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 9999,
  width: 8,
  height: 8,
  borderRadius: "50%",
  border: '1px solid white',
  backgroundColor: "var(--color-gray-900)",
  transformOrigin: "center",
}

export const DEFAULT_CURSOR_OFFSET = 4;