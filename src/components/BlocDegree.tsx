import { createClient } from "@/prismicio";
import DegreeItem from "@/components/DegreeItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselProgress,
} from "@/components/ui/carousel";

export default async function BlocDegree() {
  const client = createClient();
  const degree = await client.getByUID("degree", "degree");
  return (
    <>
      <Carousel>
        <CarouselContent className="-ml-1">
          {degree.data.slices.map((slice) => (
            <CarouselItem key={slice.id} className="basis-1/2 pl-1">
              <DegreeItem slice={slice} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="control flex items-center gap-4 mt-4">
          <CarouselPrevious />
          <CarouselProgress />
          <CarouselNext />
        </div>
      </Carousel>
    </>
  );
}
