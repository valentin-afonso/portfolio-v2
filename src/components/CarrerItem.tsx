import Skills from "@/components/Skills";
import SlideCareer from "@/components/SlideCareer";
import BtnDetailsCareer from "@/components/BtnDetailsCareer";
export default function CarrerItem({ slice }: any) {
  const arr_skills = slice.primary.skills;
  const is_to_long = arr_skills.length > 4;
  const count = arr_skills.length - 4;
  const first_skills = is_to_long ? arr_skills.slice(0, 4) : arr_skills;
  return (
    <SlideCareer slice={slice}>
      <p className="text-white/75 font-bold text-base xl:text-xl">
        {slice.primary.date}
      </p>
      <p className="font-bold text-2xl xl:text-3xl">
        {slice.primary.job_title}
      </p>
      <span className="absolute right-4 top-4 py-[2px] px-4 rounded-sm bg-white text-black text-xs font-medium">
        {slice.primary.job_status}
      </span>
      <p className="font-medium text-base xl:text-xl mb-16">
        {slice.primary.company}, {slice.primary.location}
      </p>
      <div className="flex items-center flex-wrap gap-2 xs:gap-4">
        <Skills skills={first_skills} />
        {is_to_long && <BtnDetailsCareer count={count} />}
      </div>
    </SlideCareer>
  );
}
