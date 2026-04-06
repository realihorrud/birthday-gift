export interface PersonData {
  name: string;
  slug: string;
  birthDate?: string;
  turningAge?: number;
  mainPhoto?: string;
  message: string;
  images?: string[];
  theme?: {
    primaryColor: string;
    secondaryColor: string;
    gradientFrom: string;
    gradientTo: string;
  };
}

// Default theme for birthday pages
const defaultTheme = {
  primaryColor: "#FF6B6B",
  secondaryColor: "#4ECDC4",
  gradientFrom: "#667eea",
  gradientTo: "#764ba2",
};

// Person data - add new people here
export const people: Record<string, PersonData> = {
  georgina: {
    name: "Georgina",
    slug: "georgina",
    birthDate: "January 15",
    turningAge: 25,
    mainPhoto: "https://picsum.photos/seed/georgina-main/600/600",
    message: `Dear Georgina,

On this special day, I want you to know how incredibly amazing you are! Your smile lights up every room, and your kindness touches everyone around you.

May this year bring you endless joy, exciting adventures, and all the happiness your heart can hold. You deserve nothing but the best!

Wishing you the most wonderful birthday filled with love, laughter, and beautiful memories.

With all my love,
Your Friend 💕`,
    images: [
      "https://picsum.photos/seed/georgina1/400/400",
      "https://picsum.photos/seed/georgina2/400/400",
      "https://picsum.photos/seed/georgina3/400/400",
      "https://picsum.photos/seed/georgina4/400/400",
      "https://picsum.photos/seed/georgina5/400/400",
      "https://picsum.photos/seed/georgina6/400/400",
    ],
    theme: defaultTheme,
  },
  natasha: {
    name: "Natasha",
    slug: "natasha",
    birthDate: "Coming soon",
    turningAge: 30,
    mainPhoto: "https://picsum.photos/seed/natasha-main/600/600",
    message: `Dear Natasha,

Happy Birthday! 🎉

Your birthday message will be added here soon. Stay tuned for something special!

With love ❤️`,
    images: [
      "https://picsum.photos/seed/natasha1/400/400",
      "https://picsum.photos/seed/natasha2/400/400",
      "https://picsum.photos/seed/natasha3/400/400",
      "https://picsum.photos/seed/natasha4/400/400",
      "https://picsum.photos/seed/natasha5/400/400",
      "https://picsum.photos/seed/natasha6/400/400",
    ],
    theme: {
      primaryColor: "#E91E63",
      secondaryColor: "#9C27B0",
      gradientFrom: "#f093fb",
      gradientTo: "#f5576c",
    },
  },
};

export function getPersonBySlug(slug: string): PersonData | undefined {
  return people[slug.toLowerCase()];
}

export function getAllPeopleSlugs(): string[] {
  return Object.keys(people);
}
