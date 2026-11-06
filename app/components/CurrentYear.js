"use client";

import { useEffect, useState } from "react";

// The page is statically rendered at build time, so a year computed on the
// server is frozen until the next deploy. Start with the server value (keeps
// hydration consistent and the HTML non-empty), then switch to the visitor's
// current year after mount.
export default function CurrentYear({ initialYear }) {
  const [year, setYear] = useState(initialYear);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return year;
}
