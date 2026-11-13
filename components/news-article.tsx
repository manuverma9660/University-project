import Link from "next/link";
import styles from "./news-article.module.css";

type Article = { title: string; date: string; dateLabel: string; html: string };

export function NewsArticle({ article }: { article: Article }) {
  return <main id="main-content" className={styles.page}>
    <article className={styles.article}>
      <h1>{article.title}</h1>
      <div className={styles.metadata}>
        <Link href="/about/" className={styles.author}><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="9" r="3"/><path d="M6 19v-2a6 6 0 0 1 12 0v2"/></svg>ITHS</Link>
        <span><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="16" rx="1"/><path d="M8 2v6m8-6v6M4 10h16"/></svg><time dateTime={article.date}>{article.dateLabel}</time></span>
      </div>
      {/* Static, sanitised article markup with all image URLs stored locally. */}
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: article.html }} />
    </article>
  </main>;
}
