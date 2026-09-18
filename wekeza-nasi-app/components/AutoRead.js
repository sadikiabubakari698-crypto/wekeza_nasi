"use client";
import { useEffect } from "react";
import { markByLink } from "../lib/notifications";

export default function AutoRead({ link }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!link) return;
    // Baada ya sekunde 1 — mark notification yoyote inayohusiana na link hii kama read
    const timer = setTimeout(() => {
      markByLink(link);
    }, 1000);
    return () => clearTimeout(timer);
  }, [link]);

  return null;
}
