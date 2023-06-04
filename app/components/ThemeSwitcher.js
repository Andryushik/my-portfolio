"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

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
    <button
      className="cursor-pointer align-middle"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <BsFillMoonStarsFill className="text-2xl" />
      ) : (
        <BsFillSunFill className="text-2xl" />
      )}
    </button>
  );
}
