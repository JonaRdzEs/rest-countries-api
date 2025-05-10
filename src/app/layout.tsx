import type { ReactNode } from "react";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.className} antialiased bg-cloud-white dark:bg-midnight-blue`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
