import type { ReactNode } from "react";

export default function Heading({ children }: { children: ReactNode }) {
  return (
    <h3
      className={`whitespace-nowrap font-medium text-clamp-sm`}
    >
      {children}
    </h3>
  )
}