import type { ReactNode } from "react";
import { Header } from "@/components";

interface Props {
  children: ReactNode
}

export default function HomeLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="container mx-auto p-2 px-4">
        {children}
      </main>
    </>
  )
}