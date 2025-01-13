import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import Skills from "@/components/Skills";
import ArrowUpRight from "@/components/svg/ArrowUpRight";
import ProjectTrigger from "@/components/ProjectTrigger";

export default function ProjectItem({ slice }: any) {
  const arr_skills = slice.primary.skills;
  const is_to_long = arr_skills.length > 5;
  const count = arr_skills.length - 5;
  const first_skills = is_to_long ? arr_skills.slice(0, 5) : arr_skills;
  return (
    <ProjectTrigger slice={slice}>
      <div className="flex flex-col gap-4 p-6 w-[577px] h-full">
        <div className="flex justify-between items-center pb-4">
          <p className="project_title font-bold text-xl">
            {slice.primary.title}
          </p>
          <div className="flex gap-4">
            <Link
              href={slice.primary.repo_git.url}
              target="_blank"
              className="group flex items-center gap-2 text-sm opacity-90 hover:opacity-100 transition-all"
            >
              {slice.primary.repo_git.text}
              <ArrowUpRight />
            </Link>
            <Link
              href={slice.primary.url.url}
              target="_blank"
              className="group flex items-center gap-2 text-sm  opacity-90 hover:opacity-100 transition-all"
            >
              {slice.primary.url.text}
              <ArrowUpRight />
            </Link>
          </div>
        </div>
        <PrismicRichText field={slice.primary.description} />
        <div className="flex items-center gap-4 mt-auto">
          <Skills skills={first_skills} isLight />
          {is_to_long && <p className="font-black">+{count}</p>}
        </div>
      </div>
      <div className="bg-slate-300 dark:bg-white/10 h-full w-[555px]"></div>
    </ProjectTrigger>
  );
}
