"use client";

import { useState, useEffect, useRef } from "react";

interface AnimatedNumberProps {
  target: number;
  suffix?: string;
}

export default function AnimatedNumber({ target, suffix = "" }: AnimatedNumberProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const step = Math.max(1, Math.floor(target / 40));
          let current = 0;
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              setValue(target);
              clearInterval(interval);
            } else {
              setValue(current);
            }
          }, 25);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}
