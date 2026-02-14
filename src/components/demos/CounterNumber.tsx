'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CounterNumberProps {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function CounterNumber({
  target,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = '',
}: CounterNumberProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const steps = 60;
    const stepValue = target / steps;
    const interval = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString('es-ES')}{suffix}
    </span>
  );
}
