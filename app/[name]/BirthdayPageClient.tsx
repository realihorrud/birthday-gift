"use client";

import { motion } from "framer-motion";
import Confetti from "../_components/Confetti";
import FloatingBalloons from "../_components/FloatingBalloons";
import SparkleEffect from "../_components/SparkleEffect";
import BirthdayCake from "../_components/BirthdayCake";
import { PersonData } from "../_lib/people";
import { use } from "react";

interface BirthdayPageClientProps {
  person: PersonData;
}

export default function BirthdayPageClient({
  person,
}: BirthdayPageClientProps) {
  const theme = person.theme || {
    primaryColor: "#FF6B6B",
    secondaryColor: "#4ECDC4",
    gradientFrom: "#667eea",
    gradientTo: "#764ba2",
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${theme.gradientFrom} 0%, ${theme.gradientTo} 100%)`,
      }}
    >
      {/* Background animations */}
      <Confetti />
      <FloatingBalloons />
      <SparkleEffect />

      {/* Main content */}
      <main className="relative z-30 min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:py-12">
        {/* Hero section with main photo and age */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 mb-6 sm:mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
        >
          {/* Main photo */}
          {person.mainPhoto && (
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring" }}
            >
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-white/50 shadow-2xl">
                <img
                  src={person.mainPhoto}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring animation */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-white/30"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          )}

          {/* Big age number */}
          {person.turningAge && (
            <motion.div
              className="text-center"
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", delay: 0.4, duration: 0.8 }}
            >
              <motion.div
                className="text-8xl sm:text-9xl md:text-[10rem] font-black leading-none"
                style={{
                  background: "linear-gradient(135deg, #FFD700 0%, #FFF 30%, #FFD700 60%, #FFA500 100%)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 4px 20px rgba(255, 215, 0, 0.5))",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                {person.turningAge}
              </motion.div>
              <motion.p
                className="text-xl sm:text-2xl text-white font-semibold mt-2"
                style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                years young! 🎂
              </motion.p>
            </motion.div>
          )}
        </motion.div>

        {/* Birthday greeting header */}
        <motion.div
          className="text-center mb-6 sm:mb-8"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-2 sm:mb-4"
            style={{
              textShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🎉 Happy Birthday! 🎉
          </motion.h1>

          <motion.h2
            className="text-3xl sm:text-5xl md:text-6xl font-bold"
            style={{
              background: `linear-gradient(90deg, #FFD700, #FFF, #FFD700)`,
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "none",
            }}
            animate={{
              backgroundPosition: ["0% 0%", "200% 0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {person.name}!
          </motion.h2>

          {person.birthDate && (
            <motion.p
              className="text-lg sm:text-xl text-white/80 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              🎂 {person.birthDate}
            </motion.p>
          )}
        </motion.div>

        {/* Birthday cake */}
        <motion.div
          className="w-40 sm:w-52 md:w-64 mb-6 sm:mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.3 }}
        >
          <BirthdayCake />
        </motion.div>

        {/* Message card */}
        <motion.div
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 0.5 }}
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
            <div className="text-center mb-4 sm:mb-6">
              <motion.span
                className="text-4xl sm:text-5xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💌
              </motion.span>
            </div>

            <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-center sm:text-left">
                {person.message}
              </p>
            </div>

            {/* Image gallery */}
            {person.images && person.images.length > 0 && (
              <motion.div
                className="mt-6 sm:mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                  ✨ Memories ✨
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {person.images.map((img, index) => (
                    <motion.div
                      key={index}
                      className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-lg ring-2 ring-white/50"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                    >
                      <img
                        src={img}
                        alt={`Memory ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="mt-6 sm:mt-8 flex gap-3 sm:gap-4 text-3xl sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {["🎈", "🎁", "🎊", "✨", "🥳"].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>

        {/* Footer wish */}
        <motion.p
          className="mt-6 sm:mt-8 text-white/70 text-xs sm:text-sm text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Made with 💖 especially for you
        </motion.p>
      </main>
    </div>
  );
}
