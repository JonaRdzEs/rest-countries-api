"use client";

import { useState, useEffect } from "react";
import { useTheme, } from "@/hooks";
import { Moon } from "../icons/Moon";
import { Sun } from "../icons/Sun";

export function ThemeButton() {
  const [loaded, setLoaded]  = useState(false);
  const { mode, onChangeMode } = useTheme();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return loaded && (
    <button onClick={onChangeMode} className="flex justify-center items-center gap-2 text-xs sm:text-base">
      { mode === "light" ? <Moon /> : <Sun />}
      <span className="font-semibold">
        {`${mode === "light" ? "Dark" : "Light"} Mode`}
      </span>
    </button>
  );
}