"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS = "!<>-_\\/[]{}=+*^?#0123456789ABCDEF";

export function Scramble({ text, className }) {
  const [out, setOut] = useState(text);
  const raf = useRef(0);

  const run = () => {
    const start = performance.now();
    const dur = 900;
    const per = text.split("").map(() => ({ 
      delay: Math.random() * 400, 
      settle: 200 + Math.random() * 300 
    }));

    const tick = (now) => {
      const t = now - start;
      let done = true;

      const chars = text.split("").map((ch, i) => {
        if (ch === " ") return " ";
        
        const c = per[i];
        
        if (t < c.delay) {
          done = false;
          return GLYPHS[(Math.floor(t / 40) + i) % GLYPHS.length];
        }
        
        if (t < c.delay + c.settle) {
          done = false;
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
        
        return ch;
      });

      setOut(chars.join(""));
      
      if (!done && t < dur + 500) {
        raf.current = requestAnimationFrame(tick);
      } else {
        setOut(text);
      }
    };

    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    run();
    return () => cancelAnimationFrame(raf.current);
  }, [text]);

  return (
    <span 
      onMouseEnter={run} 
      className={`font-mono cursor-pointer whitespace-pre ${className || ""}`}
    >
      {out}
    </span>
  );
}
