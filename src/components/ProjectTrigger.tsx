import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Skills from "@/components/Skills";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";

import ArrowUpRight from "@/components/svg/ArrowUpRight";

type ProjetTriggerType = {
  children: React.ReactNode;
  slice: any;
};

export default function ProjectTrigger({ children, slice }: ProjetTriggerType) {
  return (
    <>
      <Drawer>
        <DrawerTrigger
          className="project bg-secondary rounded-xl border border-border/25 hover:border-border dark:border-transparent hover:dark:border-white/20 cursor-pointer"
          asChild
        >
          <div>{children}</div>
        </DrawerTrigger>
        <DrawerContent className="drawer_project dark:bg-secondary mb-4 dark:border-white/15">
          <div className="flex w-full border-t border-b border-border/50 dark:border-white/15 ">
            <div className="min-w-96 bg-gray-50 dark:bg-white/15"></div>
            <div className="px-4 py-8 shrink border-r border-border/50 dark:border-white/15">
              <DrawerTitle className="project_title font-bold text-xl mb-4">
                {slice.primary.title}
              </DrawerTitle>

              <div className="flex gap-4 mb-4">
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
              <PrismicRichText field={slice.primary.description} />
            </div>
            <div className="p-8">
              <Skills skills={slice.primary.skills} isLight />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
