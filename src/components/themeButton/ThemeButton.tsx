"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes"; 
import { Moon } from "../icons/Moon";
import { Sun } from "../icons/Sun";

export function ThemeButton() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const onChangeMode = () => {
    if(resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light")
    }
  };

  if(!mounted) {
    return (
      <div className="w-[86px] h-4 animate-pulse bg-light-hover rounded-md sm:w-[107px] sm:h-6 dark:bg-dark-hover" />
    )
  }

  return (
    <button onClick={onChangeMode} className="flex justify-center items-center gap-2 text-charcoal-black text-xs sm:text-base dark:text-pure-white">
      { resolvedTheme === "light" ? <Moon /> : <Sun />}
      <span className="font-semibold">
        {`${resolvedTheme === "light" ? "Dark" : "Light"} Mode`}
      </span>
    </button>
  );
}