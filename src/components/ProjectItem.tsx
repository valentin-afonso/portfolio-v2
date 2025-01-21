import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import Skills from "@/components/Skills";
import ArrowUpRight from "@/components/svg/ArrowUpRight";
import ProjectTrigger from "@/components/ProjectTrigger";
import Image from "next/image";

export default function ProjectItem({ slice }: any) {
  const arr_skills = slice.primary.skills;
  const is_to_long = arr_skills.length > 5;
  const count = arr_skills.length - 5;
  const first_skills = is_to_long ? arr_skills.slice(0, 5) : arr_skills;
  const image_exist = slice.primary.images.length > 0;
  if (!image_exist) return null;
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
      <div
        className={`relative bg-slate-300 dark:bg-white/10 h-full w-[555px] overflow-hidden ${slice.primary.custom_class}`}
      >
        {slice.primary.images?.map((item: any) => (
          <Image
            key={item.image.id}
            src={`${item.image.url}`}
            width={552}
            height={324}
            alt={`${item.image.alt}`}
            className="absolute max-w-none right-[-5rem] top-[-3px] dark:brightness-90"
          />
        ))}
      </div>
    </ProjectTrigger>
  );
}
