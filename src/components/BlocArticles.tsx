import { performRequest } from "@/lib/datocms";
import { queryArticles } from "@/cms/query/queryBlog";
import ArticleTeaser from "./ArticleTeaser";
import ArticlesSlider from "./ArticlesSlider";

export default async function BlocArticles() {
  const { allArticles } = await performRequest({ query: queryArticles });
  if (!allArticles) return;
  return (
    <>
      <ArticlesSlider allArticles={allArticles} />
    </>
  );
}
