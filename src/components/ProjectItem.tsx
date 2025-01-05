import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import Skills from "@/components/Skills";

export default function ProjectItem({ slice }: any) {
  return (
    <div className="bg-[#F6F7FA] dark:bg-[#161B22] rounded-xl border border-border/25 dark:border-transparent">
      <div className="p-6 w-[577px]">
        <div className="flex justify-between items-center mb-8">
          <p className="font-bold text-xl">{slice.primary.title}</p>
          <div className="flex gap-4">
            <Link href={slice.primary.repo_git.url} target="_blank">
              {slice.primary.repo_git.text}
            </Link>
            <Link href={slice.primary.url.url} target="_blank">
              {slice.primary.url.text}
            </Link>
          </div>
        </div>
        <PrismicRichText field={slice.primary.description} />
        <Skills skills={slice.primary.skills} />
      </div>
    </div>
  );
}
