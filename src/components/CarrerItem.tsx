import Skills from "@/components/Skills";
import Slide from "@/components/Slide";
export default function CarrerItem({ slice }: any) {
  return (
    <Slide>
      <p className="text-white/75 font-bold text-xl">{slice.primary.date}</p>
      <p className="font-bold text-3xl">{slice.primary.job_title}</p>
      <span className="absolute right-4 top-4 py-[2px] px-4 rounded-sm bg-white text-black text-xs font-medium">
        {slice.primary.job_status}
      </span>
      <p className="font-medium text-xl mb-16">
        {slice.primary.company}, {slice.primary.location}
      </p>
      <Skills skills={slice.primary.skills} />
    </Slide>
  );
}
