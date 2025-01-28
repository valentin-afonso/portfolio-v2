import { Content } from "@prismicio/client";
import GridLayout from "@/components/GridLayout";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import Skills from "@/components/Skills";
import SvgWave from "@/components/svg/SvgWave";

/**
 * Props for `StackJourney`.
 */
export type StackJourneyProps = SliceComponentProps<Content.StackJourneySlice>;

/**
 * Component for "StackJourney" Slices.
 */
const StackJourney = ({ slice }: StackJourneyProps): JSX.Element => {
  const class_raw =
    "flex flex-col gap-4 even:flex-col-reverse mxs:gap-0 mxs:grid mxs:grid-cols-2 min-h-none mxs:min-h-[450px] md:min-h-[370px]";
  const class_container_skills =
    "relative p-6 flex justify-end items-end h-full w-full border border-border overflow-hidden";
  const class_container_text = "pt-8 w-[425px] max-w-full";
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pb-4"
    >
      <GridLayout additional_class="relative">
        <div className="absolute top-[-40px] left-[-140px] w-4/12 h-[1px] bg_h_line"></div>
        <div className="absolute top-[-90px] left-[-40px] h-[10rem] w-[1px] bg_v_line"></div>

        <div className="absolute top-[-40px] right-[-140px] w-4/12 h-[1px] bg_h_line"></div>
        <div className="absolute top-[-90px] right-[-40px] h-[10rem] w-[1px] bg_v_line"></div>
        <div className={class_raw}>
          <div className={`${class_container_text} pr-4`}>
            <PrismicRichText field={slice.primary.favorite_stack} />
          </div>
          <div className={class_container_skills}>
            <SvgWave additional_class="absolute top-[-16.5rem] left-[-12rem] w-[956px] h-auto rotate-[66deg]" />
            <Skills skills={slice.primary.skills} isLight />
          </div>
        </div>
        <div className={class_raw}>
          <div className={class_container_skills}>
            <SvgWave additional_class="absolute top-[-16.5rem] left-[-12rem] w-[956px] h-auto rotate-[66deg]" />
            <Skills skills={slice.primary.skills_next} isLight />
          </div>
          <div className={`mxs:pl-8 ${class_container_text}`}>
            <PrismicRichText field={slice.primary.next_stack} />
          </div>
        </div>
        <div className={class_raw}>
          <div className={`${class_container_text} pr-4`}>
            <PrismicRichText field={slice.primary.other} />
          </div>
          <div className={class_container_skills}>
            <SvgWave additional_class="absolute top-[-16.5rem] left-[-12rem] w-[956px] h-auto rotate-[66deg]" />
            <Skills skills={slice.primary.skills_other} isLight />
          </div>
        </div>
        <div className="absolute bottom-[-40px] left-[-140px] w-4/12 h-[1px] bg_h_line"></div>
        <div className="absolute bottom-[-90px] left-[-40px] h-[10rem] w-[1px] bg_v_line"></div>

        <div className="absolute bottom-[-40px] right-[-140px] w-4/12 h-[1px] bg_h_line"></div>
        <div className="absolute bottom-[-90px] right-[-40px] h-[10rem] w-[1px] bg_v_line"></div>
      </GridLayout>
    </section>
  );
};

export default StackJourney;
