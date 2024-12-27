import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import Skills from "@/components/Skills";

export default function ProjectItem({ slice }: any) {
  return (
    <div>
      <p>{slice.primary.title}</p>
      <div className="flex gap-4">
        <Link href={slice.primary.repo_git.url} target="_blank">
          {slice.primary.repo_git.text}
        </Link>
        <Link href={slice.primary.url.url} target="_blank">
          {slice.primary.url.text}
        </Link>
      </div>
      <PrismicRichText field={slice.primary.description} />
      <Skills skills={slice.primary.skills} />
    </div>
  );
}
