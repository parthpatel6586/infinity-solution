// We already have AnimatedCounter component, but if needed as a hook:
"use client";

import { useState, useEffect } from 'react';

export function useAnimatedCounter(end: number, duration: number = 2000, startInView: boolean = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startInView) return;
    
    let start = 0;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, startInView]);

  return count;
}
