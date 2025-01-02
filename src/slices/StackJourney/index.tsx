import { Content } from "@prismicio/client";
import GridLayout from "@/components/GridLayout";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import Skills from "@/components/Skills";

/**
 * Props for `StackJourney`.
 */
export type StackJourneyProps = SliceComponentProps<Content.StackJourneySlice>;

/**
 * Component for "StackJourney" Slices.
 */
const StackJourney = ({ slice }: StackJourneyProps): JSX.Element => {
  const class_raw = "flex grid grid-cols-2 min-h-[370px]";
  const class_container_skills = "p-6 flex justify-end items-end h-full w-full";
  const class_container_text = "pt-6 w-[425px] max-w-full";
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pb-44"
    >
      <GridLayout additional_class="">
        <div className={class_raw}>
          <div className={class_container_text}>
            <PrismicRichText field={slice.primary.favorite_stack} />
          </div>
          <div className={class_container_skills}>
            <Skills skills={slice.primary.skills} />
          </div>
        </div>
        <div className={class_raw}>
          <div className={class_container_skills}>
            <Skills skills={slice.primary.skills_next} />
          </div>
          <div className={class_container_text}>
            <PrismicRichText field={slice.primary.next_stack} />
          </div>
        </div>
        <div className={class_raw}>
          <div className={class_container_text}>
            <PrismicRichText field={slice.primary.other} />
          </div>
          <div className={class_container_skills}>
            <Skills skills={slice.primary.skills_other} />
          </div>
        </div>
      </GridLayout>
    </section>
  );
};

export default StackJourney;
