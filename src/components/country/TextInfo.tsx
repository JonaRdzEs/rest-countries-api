import type { ReactNode } from "react";

interface Props {
  className?: string;
  title: string;
  children: ReactNode;
}

export function TextInfo({ className = "", title, children }: Props) {
  return (
    <div className={`flex justify-start items-center gap-1 ${className}`}>
      <span className="font-semibold text-charcoal-black text-sm">{title}</span>
      <span className="text-sm">{children}</span>
    </div>
  );
}
