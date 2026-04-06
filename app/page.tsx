import Link from "next/link";
import { getAllPeopleSlugs, people } from "./_lib/people";

export default function Home() {
  const slugs = getAllPeopleSlugs();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex flex-col items-center justify-center p-4">
      <main className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          🎂 Birthday Celebrations 🎂
        </h1>
        <p className="text-white/80 text-lg mb-8">
          Click on a name to view their special birthday page!
        </p>

        <div className="grid gap-4 max-w-md mx-auto">
          {slugs.map((slug) => {
            const person = people[slug];
            return (
              <Link
                key={slug}
                href={`/${slug}`}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-2xl p-6 text-white font-semibold text-xl hover:scale-105 shadow-lg"
              >
                🎉 {person.name}&apos;s Birthday
              </Link>
            );
          })}
        </div>

        <p className="text-white/60 text-sm mt-8">
          Made with 💖
        </p>
      </main>
    </div>
  );
}
