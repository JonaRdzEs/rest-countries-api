import type { ReactNode } from "react";
import { Header } from "@/components";

interface Props {
  children: ReactNode
}

export default function HomeLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}