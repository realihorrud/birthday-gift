"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const nameLetters = "Наташа".split("");

interface GalleryPhoto {
  id: number;
  src: string;
  alt: string;
  desktopClass: string;
  imageClass: string;
}

const galleryPhotos: GalleryPhoto[] = [
  {
    id: 1,
    src: "/natasha/1.jpg",
    alt: "Natasha smiling at golden hour",
    desktopClass: "md:col-span-4 md:row-span-2",
    imageClass: "saturate-110",
  },
  {
    id: 2,
    src: "/natasha/natasha-valik.JPG",
    alt: "Natasha laughing during a candid moment",
    desktopClass: "md:col-span-5 md:row-span-3",
    imageClass: "contrast-110",
  },
  {
    id: 3,
    src: "/natasha/3.jpg",
    alt: "Natasha in a cozy evening atmosphere",
    desktopClass: "md:col-span-3 md:row-span-2",
    imageClass: "brightness-110",
  },
  {
    id: 4,
    src: "/natasha/4.jpg",
    alt: "Natasha captured in a travel memory",
    desktopClass: "md:col-span-3 md:row-span-2",
    imageClass: "saturate-105",
  },
  {
    id: 5,
    src: "/natasha/5.jpg",
    alt: "Natasha with a bright city backdrop",
    desktopClass: "md:col-span-4 md:row-span-2",
    imageClass: "contrast-105",
  },
  {
    id: 6,
    src: "/natasha/6.jpg",
    alt: "Natasha sharing a calm, peaceful moment",
    desktopClass: "md:col-span-5 md:row-span-2",
    imageClass: "brightness-105",
  },
  {
    id: 7,
    src: "/natasha/8.jpeg",
    alt: "Natasha dressed up for a special day",
    desktopClass: "md:col-span-7 md:row-span-4",
    imageClass: "saturate-110",
  },
  {
    id: 8,
    src: "/natasha/2.jpg",
    alt: "Natasha in a close-up portrait",
    desktopClass: "md:col-span-5 md:row-span-4",
    imageClass: "contrast-110",
  },
];

const memoryHighlights = [
  {
    title: "Midnight talks",
    text: "Conversations with you make hours feel like minutes.",
  },
  {
    title: "Big-hearted chaos",
    text: "You bring fun, warmth, and fearless honesty everywhere.",
  },
  {
    title: "Future looks bright",
    text: "This next chapter has your name all over it.",
  },
];

const stars = Array.from({ length: 26 }, (_, index) => {
  const left = (index * 37) % 100;
  const top = (index * 53 + 11) % 100;

  return {
    id: index,
    left: `${left}%`,
    top: `${top}%`,
    size: 2 + (index % 3),
    duration: 3.4 + (index % 5),
    delay: (index % 6) * 0.35,
  };
});

interface OpeningConfettiPiece {
  id: number;
  x: number;
  y: number;
  drift: number;
  rotate: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
  shape: "circle" | "rect";
}

function pseudoRandom(seed: number) {
  const value = Math.sin(seed * 874.77) * 43758.5453123;
  return value - Math.floor(value);
}

const confettiPalette = [
  "#FFBCCD",
  "#FF9CB5",
  "#FFC9D7",
  "#FFAAC1",
  "#FFDCE6",
  "#FFB1C6",
  "#FFC5D4",
  "#FF8EAE",
];

const openingConfetti: OpeningConfettiPiece[] = Array.from(
  { length: 96 },
  (_, index) => {
    const angle = (index / 96) * Math.PI * 2 + pseudoRandom(index + 3) * 0.5;
    const distance = 110 + pseudoRandom(index + 41) * 320;
    const lift = 90 + pseudoRandom(index + 77) * 220;

    return {
      id: index,
      x: Math.cos(angle) * distance,
      y: -Math.abs(Math.sin(angle) * lift),
      drift: -24 + pseudoRandom(index + 97) * 48,
      rotate: -220 + pseudoRandom(index + 131) * 440,
      size: 6 + Math.floor(pseudoRandom(index + 151) * 8),
      delay: pseudoRandom(index + 181) * 0.28,
      duration: 2.1 + pseudoRandom(index + 211) * 1.3,
      color: confettiPalette[index % confettiPalette.length],
      shape: index % 3 === 0 ? "circle" : "rect",
    };
  }
);

interface PhotoFrameProps {
  photo: GalleryPhoto;
  className: string;
  sizes: string;
  index: number;
  reduceMotion: boolean;
}

function PhotoFrame({
  photo,
  className,
  sizes,
  index,
  reduceMotion,
}: PhotoFrameProps) {
  const [src, setSrc] = useState(photo.src);

  return (
    <motion.article
      className={`group relative overflow-hidden rounded-[1.6rem] border border-[#FF9CB5]/55 bg-white/52 shadow-[0_16px_34px_rgba(166,73,107,0.22)] ${className}`}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
    >
      <Image
        src={src}
        alt={photo.alt}
        fill
        sizes={sizes}
        onError={() => {
          if (src !== "/photo.avif") {
            setSrc("/photo.avif");
          }
        }}
        className={`object-cover transition-transform duration-500 group-hover:scale-[1.04] ${photo.imageClass}`}
      />
    </motion.article>
  );
}

function OpeningConfettiBurst({ reduceMotion }: { reduceMotion: boolean }) {
  if (reduceMotion) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
    >
      {openingConfetti.map((piece) => (
        <motion.span
          key={piece.id}
          className="absolute left-1/2 top-[34%]"
          style={{
            width: piece.size,
            height: piece.shape === "circle" ? piece.size : piece.size * 1.35,
            backgroundColor: piece.color,
            borderRadius: piece.shape === "circle" ? 999 : 2,
            boxShadow: "0 0 14px rgba(255,255,255,0.18)",
          }}
          initial={{ x: 0, y: 0, opacity: 0, rotate: 0, scale: 0.6 }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: [0, piece.x, piece.x + piece.drift],
            y: [0, piece.y, piece.y + 280],
            rotate: [0, piece.rotate, piece.rotate * 1.35],
            scale: [0.7, 1, 0.9, 0.7],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      ))}
    </div>
  );
}

export default function NatashaCelebration() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className="relative min-h-screen overflow-hidden text-[#7D3A4F]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(255,201,215,0.88),transparent_42%),radial-gradient(circle_at_86%_10%,rgba(255,156,181,0.7),transparent_40%),radial-gradient(circle_at_60%_88%,rgba(255,188,205,0.72),transparent_48%),linear-gradient(160deg,#FFF4F7_0%,#FFC9D7_55%,#FFBCCD_100%)]" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-28 -top-28 h-[30rem] w-[30rem] rounded-full bg-[#FFC9D7]/72 blur-3xl"
          animate={
            reduceMotion
              ? { opacity: 0.5 }
              : {
                  x: [0, 70, -20, 0],
                  y: [0, 30, -25, 0],
                  scale: [1, 1.22, 0.95, 1],
                }
          }
          transition={{
            duration: 26,
            repeat: reduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-24 right-[-5rem] h-[26rem] w-[26rem] rounded-full bg-[#FF9CB5]/65 blur-3xl"
          animate={
            reduceMotion
              ? { opacity: 0.45 }
              : {
                  x: [0, -80, 15, 0],
                  y: [0, -35, 25, 0],
                  scale: [1, 1.15, 0.9, 1],
                }
          }
          transition={{
            duration: 28,
            repeat: reduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />

        {stars.map((star) => (
          <motion.span
            key={star.id}
            className="absolute rounded-full bg-pink-100/90"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              boxShadow: "0 0 14px rgba(251, 207, 232, 0.8)",
            }}
            animate={
              reduceMotion
                ? { opacity: 0.7 }
                : { opacity: [0.2, 1, 0.2], scale: [0.8, 1.25, 0.8] }
            }
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: reduceMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <OpeningConfettiBurst reduceMotion={reduceMotion} />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-16 pt-12 sm:gap-20 sm:px-8 sm:pt-16 lg:px-10">
        <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <motion.p
              className="inline-block rounded-full border border-[#FF9CB5]/70 bg-white/55 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#8C3F58] sm:text-sm"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              18 April
            </motion.p>

            <motion.h1
              className="text-4xl font-semibold leading-tight text-[#8C3F58] sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              З Днем Народження! 🥳
            </motion.h1>

            <motion.div
              className="flex flex-wrap gap-2 sm:gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {nameLetters.map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  className="rounded-2xl border border-[#FF9CB5]/70 bg-white/60 px-3 py-2 text-2xl font-bold text-[#A3395D] shadow-[0_10px_24px_rgba(166,73,107,0.24)] sm:px-4 sm:text-4xl"
                  animate={
                    reduceMotion
                      ? { opacity: 1 }
                      : { y: [0, -8, 0], rotate: [0, 2, 0] }
                  }
                  transition={{
                    duration: 2.6,
                    delay: 0.45 + index * 0.12,
                    repeat: reduceMotion ? 0 : Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              className="max-w-xl text-base leading-relaxed text-[#8F5167] sm:text-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              Привіт! Сьогодні твій день, і це мій подарунок для тебе. Я намагався якнайкраще зробити цю сторінку,
              щоб додати ще одну приємність до цього дня, тому щиро вітаю з Днем Народження, бажаю лише всього найкращого в житті, і нехай ця сторінка буде
              такою ж чудовою як і ти 🥳🎂
            </motion.p>
          </div>

          <motion.div
            className="mx-auto w-full max-w-sm rounded-[2rem] border border-[#FF9CB5]/70 bg-white/55 p-4 backdrop-blur-xl shadow-[0_20px_44px_rgba(166,73,107,0.25)]"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <Image
                src="/natasha-5.jpg"
                alt="Natasha portrait"
                width={720}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#BF6B87]/36 via-transparent to-[#FFE4EC]/48" />
            </div>
            <motion.div
              className="mt-4 rounded-2xl border border-[#FF9CB5]/65 bg-white/58 px-4 py-3 text-sm text-[#8C3F58]"
              animate={
                reduceMotion
                  ? { opacity: 1 }
                  : {
                      boxShadow: [
                        "0 0 0 rgba(255,255,255,0)",
                        "0 0 34px rgba(255,156,181,0.7)",
                        "0 0 0 rgba(255,255,255,0)",
                      ],
                    }
              }
              transition={{ duration: 3.5, repeat: reduceMotion ? 0 : Infinity }}
            >
              27 років - це лише початок твого неймовірного росту та здійснення найзавітніших мрій ✨
            </motion.div>
          </motion.div>
        </section>

        <section className="rounded-[2rem] border border-[#FF9CB5]/70 bg-white/52 px-4 py-7 backdrop-blur-xl sm:px-7 sm:py-9">
          <motion.h2
            className="text-center text-2xl font-semibold text-[#8C3F58] sm:text-3xl"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Що за гарні люди 😍
          </motion.h2>

          <p className="mt-3 text-center text-xs text-[#9A5A71]/90 sm:text-sm">
            Свайпай на мобайлі • насолоджуйся повним розміром колажу на десктопі
          </p>

          <div className="-mx-4 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:hidden">
            {galleryPhotos.map((photo, index) => (
              <PhotoFrame
                key={`mobile-${photo.id}`}
                photo={photo}
                className="aspect-[4/5] min-w-[74vw] snap-center"
                sizes="(max-width: 767px) 74vw, 1px"
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>

          <div className="mt-8 hidden gap-4 md:grid md:grid-cols-12 md:auto-rows-[88px] lg:auto-rows-[105px]">
            {galleryPhotos.map((photo, index) => (
              <PhotoFrame
                key={`desktop-${photo.id}`}
                photo={photo}
                className={`${photo.desktopClass} min-h-[12rem]`}
                sizes="(max-width: 1279px) 30vw, 24vw"
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </section>

        <motion.footer
          className="text-center text-sm text-[#9A5A71]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Made with 💙 by Ihor Rud
        </motion.footer>
      </main>
    </div>
  );
}
