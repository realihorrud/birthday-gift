"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Balloon {
  id: number;
  x: number;
  color: string;
  delay: number;
  duration: number;
  size: number;
}

const balloonColors = [
  "#FF6B6B",
  "#4ECDC4",
  "#FFE66D",
  "#FF9A8B",
  "#AA96DA",
  "#F38181",
  "#88D8B0",
  "#FCBAD3",
];

export default function FloatingBalloons() {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    const newBalloons: Balloon[] = [];
    for (let i = 0; i < 12; i++) {
      newBalloons.push({
        id: i,
        x: 5 + Math.random() * 90,
        color: balloonColors[Math.floor(Math.random() * balloonColors.length)],
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 6,
        size: 40 + Math.random() * 30,
      });
    }
    setBalloons(newBalloons);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          className="absolute"
          style={{
            left: `${balloon.x}%`,
            bottom: -100,
          }}
          initial={{ y: 0 }}
          animate={{
            y: "-120vh",
            x: [0, 20, -20, 10, -10, 0],
          }}
          transition={{
            y: {
              duration: balloon.duration,
              delay: balloon.delay,
              repeat: Infinity,
              ease: "linear",
            },
            x: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          {/* Balloon */}
          <div
            className="relative"
            style={{
              width: balloon.size,
              height: balloon.size * 1.2,
            }}
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{
                backgroundColor: balloon.color,
                boxShadow: `inset -${balloon.size / 5}px -${balloon.size / 5}px ${balloon.size / 3}px rgba(0,0,0,0.1), inset ${balloon.size / 8}px ${balloon.size / 8}px ${balloon.size / 4}px rgba(255,255,255,0.3)`,
              }}
            />
            {/* Balloon knot */}
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                bottom: -6,
                width: 8,
                height: 8,
                backgroundColor: balloon.color,
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              }}
            />
            {/* String */}
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                bottom: -60,
                width: 1,
                height: 50,
                backgroundColor: "#888",
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
