import type { ReactNode } from "react";
import localFont from "next/font/local";
import { Providers } from "@/components";
import "./globals.css";

const nunitoSans = localFont({
  src: "../fonts/NunitoSansVariable.ttf",
  style: "normal",
  display: "swap",
});

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunitoSans.className} antialiased bg-cloud-white dark:bg-midnight-blue`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
