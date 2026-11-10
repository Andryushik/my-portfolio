"use client";
import { ThemeProvider } from "next-themes";
import { MotionConfig } from "motion/react";

export default function Providers({ children }) {
  return (
    // Not "theme": the old site saved the system theme there as if picked.
    <ThemeProvider attribute="class" storageKey="color-theme">
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeProvider>
  );
}
