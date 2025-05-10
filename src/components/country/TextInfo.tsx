import type { ReactNode } from "react";

interface Props {
  textClassName?: string;
  title: string;
  children: ReactNode;
}

export function TextInfo({ textClassName = "", title, children }: Props) {
  return (
    <div className="flex justify-start items-center gap-1">
      <span className={`font-semibold text-charcoal-black dark:text-pure-white ${textClassName}`}>{title}</span>
      <span className={`text-charcoal-black dark:text-pure-white ${textClassName}`}>{children}</span>
    </div>
  );
}
