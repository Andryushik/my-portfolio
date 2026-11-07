"use client";
import { ThemeProvider } from "next-themes";
import { MotionConfig } from "motion/react";

export default function Providers({ children }) {
  return (
    // New storage key: the old site saved the system theme under "theme" as
    // if the visitor had picked it, which would pin the theme for them.
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      storageKey="color-theme"
    >
      {/* With "reduce motion" on in the OS, movement jumps straight to its end
          (opacity still fades). Scroll-linked effects are handled where used. */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeProvider>
  );
}
