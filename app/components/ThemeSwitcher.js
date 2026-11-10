"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  BsFillMoonStarsFill,
  BsFillSunFill,
  BsFillCircleFill,
} from "react-icons/bs";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- next-themes "mounted" pattern
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      className="cursor-pointer flex items-center justify-between p-1 w-14 h-8 border border-slate-500 dark:border-slate-400 rounded-full relative transition ease-in-out duration-500"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      aria-label="Dark mode"
      // The server doesn't know the theme; the knob is placed by CSS instead.
      aria-pressed={mounted ? resolvedTheme === "dark" : undefined}
    >
      <BsFillMoonStarsFill className="text-xl hover:scale-110 duration-500" />
      <BsFillSunFill className="text-xl hover:scale-110 duration-500" />
      <BsFillCircleFill className="text-2xl absolute text-text-head hover:scale-110 duration-500 left-1 dark:left-auto dark:right-1" />
    </button>
  );
}
