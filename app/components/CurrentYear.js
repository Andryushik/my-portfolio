"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// The page is statically rendered at build time, so a year computed on the
// server is frozen until the next deploy. Server render and hydration use the
// build-time year; the client then switches to the visitor's current year.
export default function CurrentYear({ initialYear }) {
  return useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => initialYear
  );
}
