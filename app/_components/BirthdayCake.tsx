"use client";

import { motion } from "framer-motion";

interface BirthdayCakeProps {
  className?: string;
}

export default function BirthdayCake({ className = "" }: BirthdayCakeProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ scale: 0, rotate: -10 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", duration: 0.8, delay: 0.5 }}
    >
      <svg viewBox="0 0 200 180" className="w-full h-full">
        {/* Candle flames */}
        {[60, 100, 140].map((x, i) => (
          <motion.g key={i}>
            <motion.ellipse
              cx={x}
              cy="25"
              rx="8"
              ry="12"
              fill="url(#flameGradient)"
              animate={{
                scaleY: [1, 1.2, 0.9, 1.1, 1],
                scaleX: [1, 0.9, 1.1, 0.95, 1],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
            <rect x={x - 3} y="35" width="6" height="25" fill="#FFE4B5" />
          </motion.g>
        ))}

        {/* Top layer - pink */}
        <motion.path
          d="M30 60 Q30 50 40 50 L160 50 Q170 50 170 60 L170 90 L30 90 Z"
          fill="#FF9ECE"
          stroke="#FF69B4"
          strokeWidth="2"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.3 }}
        />

        {/* Middle layer - cream */}
        <motion.path
          d="M20 90 L180 90 L180 130 L20 130 Z"
          fill="#FFF5E1"
          stroke="#FFD700"
          strokeWidth="2"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.2 }}
        />

        {/* Bottom layer - chocolate */}
        <motion.path
          d="M10 130 L190 130 L190 170 Q190 175 185 175 L15 175 Q10 175 10 170 Z"
          fill="#8B4513"
          stroke="#654321"
          strokeWidth="2"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.1 }}
        />

        {/* Frosting decorations */}
        <motion.path
          d="M30 90 Q40 100 50 90 Q60 80 70 90 Q80 100 90 90 Q100 80 110 90 Q120 100 130 90 Q140 80 150 90 Q160 100 170 90"
          fill="none"
          stroke="#FF69B4"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />

        {/* Sprinkles */}
        {[
          { x: 40, y: 70, color: "#FF6B6B" },
          { x: 60, y: 75, color: "#4ECDC4" },
          { x: 90, y: 68, color: "#FFE66D" },
          { x: 120, y: 73, color: "#AA96DA" },
          { x: 150, y: 70, color: "#88D8B0" },
        ].map((s, i) => (
          <motion.circle
            key={i}
            cx={s.x}
            cy={s.y}
            r="4"
            fill={s.color}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + i * 0.1 }}
          />
        ))}

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="flameGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FF6B35" />
            <stop offset="50%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFF9E3" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
