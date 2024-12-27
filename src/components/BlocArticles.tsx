import { performRequest } from "@/lib/datocms";
import { queryArticles } from "@/cms/query/queryBlog";
import ArticleTeaser from "./ArticleTeaser";

export default async function BlocArticles() {
  const { allArticles } = await performRequest({ query: queryArticles });
  if (!allArticles) return;
  const list_articles = allArticles.map((article: any) => (
    <ArticleTeaser key={article.id} article={article} />
  ));
  return <div className="flex gap-4">{list_articles}</div>;
}
