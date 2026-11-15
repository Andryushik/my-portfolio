"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function Home() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = reduceMotion ? null : new Lenis({ autoRaf: true });

    // On this page the address bar never shows #section: links to /#section
    // scroll here, and a hash that arrives anyway (an old link, typed in, a link
    // from another page) goes once the browser jumped.
    const onClick = (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest('a[href*="#"]');
      if (!link || link.origin !== location.origin || link.pathname !== location.pathname) return;
      const target = document.getElementById(link.hash.slice(1));
      if (!target) return;
      event.preventDefault();
      if (lenis) lenis.scrollTo(target);
      else target.scrollIntoView();
      target.setAttribute("tabindex", "-1");
      target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true });
      target.focus({ preventScroll: true });
    };
    const dropHash = () => {
      if (location.hash) history.replaceState(null, "", location.pathname + location.search);
    };
    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", dropHash);
    // Wait for Next to patch history.replaceState (a parent effect, so it runs
    // after this one); a direct call leaves Next's URL stale and it puts the hash back.
    const dropOnLoad = setTimeout(dropHash);

    return () => {
      clearTimeout(dropOnLoad);
      window.removeEventListener("hashchange", dropHash);
      document.removeEventListener("click", onClick);
      lenis?.destroy();
    };
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
