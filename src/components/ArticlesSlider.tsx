import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ArticleTeaser from "./ArticleTeaser";

export default function ArticlesSlider({ allArticles }: any) {
  const list_articles = allArticles.map((article: any) => (
    <CarouselItem
      key={article.id}
      className="basis-1/2 md:basis-1/3 lg:basis-1/4 pl-[16px]"
    >
      <ArticleTeaser article={article} />
    </CarouselItem>
  ));
  return (
    <>
      <Carousel className="slider_visible noselect">
        <CarouselContent className="ml-[-16px]">
          {list_articles}
        </CarouselContent>
      </Carousel>
    </>
  );
}
