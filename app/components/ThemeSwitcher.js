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
  const { resolvedTheme, theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="cursor-pointer flex items-center justify-between p-1 w-14 h-8 border border-slate-500 rounded-full relative transition ease-in-out duration-500"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      name="Change theme"
    >
      <BsFillMoonStarsFill className="text-xl" />
      <BsFillSunFill className="text-xl" />
      {theme === "light" ? (
        <BsFillCircleFill className="text-2xl absolute left-1 text-text-head" />
      ) : (
        <BsFillCircleFill className="text-2xl absolute right-1 text-text-head" />
      )}
    </div>
  );
}
