import SvgWave from "@/components/svg/SvgWave";

type SlideType = {
  children: React.ReactNode;
};

export default function Slide({ children }: SlideType) {
  return (
    <div className="relative h-full slide_gradient text-white/95 p-10 rounded-xl overflow-hidden">
      <div className="absolute right-0 top-0 w-[170px] h-full border-white/20 dark:border-border border-l overflow-hidden">
        <SvgWave additional_class="absolute top-[-11rem] left-[-16rem] w-[895px] h-auto rotate-[-20deg]" />
      </div>

      {children}
    </div>
  );
}
