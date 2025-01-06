import { createClient } from "@/prismicio";
import CarrerItem from "@/components/CarrerItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselProgress,
} from "@/components/ui/carousel";

export default async function BlocCareers() {
  const client = createClient();
  const career = await client.getByUID("skill", "career");
  return (
    <>
      <Carousel
        className="slider_visible noselect"
        opts={{
          dragFree: false,
          slidesToScroll: 2,
        }}
      >
        <CarouselContent className="ml-[-100px]">
          {career.data.slices.map((slice) => (
            <CarouselItem key={slice.id} className="basis-1/2 pl-[100px]">
              <CarrerItem slice={slice} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="control w-full flex justify-end items-center gap-4 mt-7">
          <CarouselPrevious className="rounded-[6px] stroke-border" />
          <CarouselProgress />
          <CarouselNext className="rounded-[6px] stroke-border" />
        </div>
      </Carousel>
    </>
  );
}
