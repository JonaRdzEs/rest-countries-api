import NextLink from "next/link"
import type { ReactNode } from "react";

interface Props {
  className?: string,
  path: string,
  children: ReactNode,
}

export function Link({ children, path, className = "" }: Props) {
  return (
    <NextLink href={path} className={`shadow-md rounded-md flex justify-center items-center text-charcoal-black bg-pure-white ${className} hover:bg-light-hover dark:text-pure-white dark:bg-deep-navy dark:hover:bg-dark-hover`}>
      {children}
    </NextLink>
  );
}