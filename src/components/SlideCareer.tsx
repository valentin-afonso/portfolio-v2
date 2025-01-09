import SvgWave from "@/components/svg/SvgWave";
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
        <DrawerContent className="dark:bg-secondary mb-4 dark:border-white/15">
          <div className="flex gap-4 w-full border-t border-b border-border/50 dark:border-white/15 ">
            <div className="relative p-8 pb-16 border-r border-border/50 dark:border-white/15 ">
              <div className="absolute left-0 top-0 w-1/2 h-full border-r border-border/20 dark:border-white/15 overflow-hidden">
                <SvgWave additional_class="absolute top-[-7rem] left-[-4rem] w-[510px] h-auto" />
              </div>

              <p className="text-black/75 dark:text-white/75 font-bold text-xl">
                {slice.primary.date}
              </p>
              <DrawerTitle className="font-bold text-3xl mb-2">
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
