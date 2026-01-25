"use client";

import { useState, useEffect, useCallback } from "react";

export function useParallax(speed = 0.3) {
  const [offset, setOffset] = useState(0);
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px) and (orientation: landscape)");
    setIsWideScreen(mediaQuery.matches);

    const handler = (e) => setIsWideScreen(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleScroll = useCallback(() => {
    if (isWideScreen) return; // Skip parallax on wide screens
    requestAnimationFrame(() => {
      setOffset(window.scrollY * speed);
    });
  }, [speed, isWideScreen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return isWideScreen ? 0 : offset;
}
