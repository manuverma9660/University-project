import type { Metadata } from "next";
import { NewsArticle } from "@/components/news-article";
import articles from "@/lib/news-articles.json";

export const metadata: Metadata = {
  title: articles.orientation.title,
  description: "ITHS welcomes its new batch at Rayat Bahra University with the Orientation cum Induction Programme 2026, laboratory exposure and student engagement sessions.",
};

export default function OrientationPage() {
  return <NewsArticle article={articles.orientation} />;
}
