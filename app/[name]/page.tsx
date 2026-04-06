import { notFound } from "next/navigation";
import { getPersonBySlug, getAllPeopleSlugs } from "../_lib/people";
import BirthdayPageClient from "./BirthdayPageClient";

interface PageProps {
  params: Promise<{ name: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPeopleSlugs();
  return slugs.map((slug) => ({ name: slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { name } = await params;
  const person = getPersonBySlug(name);

  if (!person) {
    return {
      title: "Birthday Celebration",
    };
  }

  return {
    title: `Happy Birthday ${person.name}! 🎉`,
    description: `A special birthday celebration for ${person.name}`,
  };
}

export default async function BirthdayPage({ params }: PageProps) {
  const { name } = await params;
  const person = getPersonBySlug(name);

  if (!person) {
    notFound();
  }

  return <BirthdayPageClient person={person} />;
}
