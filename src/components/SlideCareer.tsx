import SvgWave from "@/components/svg/SvgWave";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Skills from "@/components/Skills";
import Close from "@/components/svg/Close";
import ArrowUpRight from "@/components/svg/ArrowUpRight";

type SlideType = {
  children: React.ReactNode;
  slice: any;
};

export default function SlideCareer({ children, slice }: SlideType) {
  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <div className="group/slide relative h-full slide_gradient text-white/95 p-10 rounded-xl overflow-hidden cursor-pointer">
            <div className="absolute right-0 top-0 w-[170px] h-full border-white/20 dark:border-border border-l overflow-hidden">
              <SvgWave additional_class="absolute top-[-11rem] left-[-16rem] w-[895px] h-auto rotate-[-20deg]" />
            </div>
            <div className="svg_career_arrow absolute bottom-3 right-3">
              <ArrowUpRight />
            </div>

            {children}
          </div>
        </DrawerTrigger>
        <DrawerContent className="dark:bg-secondary mb-4">
          <div className="flex gap-4 w-full">
            <div className="p-8 border-r border-border dark:border-white/15">
              <p className="text-black/75 dark:text-white/75 font-bold text-xl">
                {slice.primary.date}
              </p>
              <DrawerTitle className="font-bold text-3xl">
                {slice.primary.job_title}
              </DrawerTitle>

              <p className="font-medium text-xl mb-4">
                {slice.primary.company}, {slice.primary.location}
              </p>
              <span className="py-[4px] px-4 rounded-sm bg-black text-white dark:bg-white dark:text-black text-xs font-medium">
                {slice.primary.job_status}
              </span>
            </div>
            <div className="flex items-end relative p-8 grow">
              <Skills skills={slice.primary.skills} isLight />
              <DrawerClose className="absolute bottom-4 right-4">
                <Close />
              </DrawerClose>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
