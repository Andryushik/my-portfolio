"use client";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    // New storage key: the old site saved the system theme under "theme" as
    // if the visitor had picked it, which would pin the theme for them.
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      storageKey="color-theme"
    >
      {children}
    </ThemeProvider>
  );
}
