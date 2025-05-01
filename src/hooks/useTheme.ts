"use client";

import { useState, useEffect } from "react";

const getInitialMode = ():string => {
  if(typeof window === "undefined") return "";
  const currentMode = window.localStorage.getItem("theme");
  if(currentMode) return currentMode;
  return (window.matchMedia && window.matchMedia("(prefers-color-scheme): dark").matches) ? "dark" : "light";
};

export function useTheme():{ mode: string, onChangeMode: () => void } {
  const [mode, setMode] = useState<string>(getInitialMode());

  const onChangeMode = ():void => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      window.localStorage.setItem("theme", newMode);
      return newMode;
    });
  }

  useEffect(() => {
    window.addEventListener("storage", onChangeMode);
    return () => {
      window.removeEventListener("storage", onChangeMode);
    };
  }, []);

  useEffect(() => {
    if(mode === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [mode]);

  return { mode, onChangeMode };
}