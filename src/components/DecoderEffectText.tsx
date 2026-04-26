"use client";

import { useEffect, useState, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export function DecoderEffectText({ text }: { text: string }) {
  const [chars, setChars] = useState(() => text.split("").map(() => " "));
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startEffect = () => {
    if (isPlaying) return;

    setIsPlaying(true);
    setChars(text.split("").map(() => " "));

    let frame = 0;
    const speed = 35;
    const settleEvery = 3;

    intervalRef.current = setInterval(() => {
      setChars(
        text.split("").map((char, index) => {
          if (char === " ") return " ";

          const settledIndex = Math.floor(frame / settleEvery);

          if (index <= settledIndex) {
            return char;
          }

          return randomChar();
        })
      );

      frame += 1;

      if (Math.floor(frame / settleEvery) >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setChars(text.split(""));
        setIsPlaying(false);
      }
    }, speed);
  };

  useEffect(() => {
    startEffect();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]);

  return (
    <h1
      className="flex justify-center gap-[0.04em] font-mono text-[clamp(1.8rem,6vw,5rem)] tracking-[0.04em] uppercase cursor-default"
      aria-label={text}
      onMouseEnter={startEffect}
    >
      {chars.map((char, index) => (
        <span key={index} className="inline-block min-w-[0.65em] text-center" aria-hidden="true">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}