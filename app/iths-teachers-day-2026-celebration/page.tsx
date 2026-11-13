import type { Metadata } from "next";
import { NewsArticle } from "@/components/news-article";
import articles from "@/lib/news-articles.json";

export const metadata: Metadata = {
  title: articles.teachersDay.title,
  description: "ITHS celebrated Teachers’ Day on 3 September 2026 with a student-organised programme of performances, a quiz, games and faculty appreciation.",
};

export default function TeachersDayPage() {
  return <NewsArticle article={articles.teachersDay} />;
}
