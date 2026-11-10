"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// The page is built once: show the visitor's year, not the build's.
export default function CurrentYear({ initialYear }) {
  return useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => initialYear
  );
}
