import type { ReactNode } from "react";

export default function Badge({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div
      className="px-[8px] py-[1px] border rounded-xl text-clamp-xs text-sm bg-gray-900 text-gray-100"
    >
      {children}
    </div>
  );
}