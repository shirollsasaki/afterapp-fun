'use client';
import { useEffect, useRef } from 'react';

export default function CursorFollower() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        border: '1px solid rgba(255,255,255,0.3)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 100,
        mixBlendMode: 'exclusion',
        transition: 'width 0.3s ease, height 0.3s ease',
      }}
    />
  );
}
