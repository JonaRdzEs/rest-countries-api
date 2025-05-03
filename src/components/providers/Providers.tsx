"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

interface Props {
  children: ReactNode,
};

export function Providers({ children }: Props) {
  return (
    <ThemeProvider storageKey="theme" defaultTheme="system" attribute="class" enableSystem>
      {children}
    </ThemeProvider>
  )
}
