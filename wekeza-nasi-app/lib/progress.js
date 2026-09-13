"use client";

const KEY = "wekeza_progress";

export function getProgress() {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function hasPassed(lessonId) {
  return getProgress().includes(lessonId);
}

export function markPassed(lessonId) {
  if (typeof window === "undefined") return;
  const progress = getProgress();
  if (!progress.includes(lessonId)) {
    progress.push(lessonId);
    localStorage.setItem(KEY, JSON.stringify(progress));
  }
}

// Somo 1 linafunguliwa daima.
// Somo N linafunguliwa tu kama Somo N-1 limepasi.
export function isLessonUnlocked(lessonId) {
  if (typeof window === "undefined") return false;
  if (lessonId === "somo1") return true;
  const num = parseInt(String(lessonId).replace("somo", ""));
  if (isNaN(num)) return true;
  if (num <= 1) return true;
  return hasPassed("somo" + (num - 1));
}
