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
  const class_raw = "flex";
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <GridLayout>
        <div className={class_raw}>
          <div>
            <PrismicRichText field={slice.primary.favorite_stack} />
          </div>
          <Skills skills={slice.primary.skills} />
        </div>
        <div className={class_raw}>
          <Skills skills={slice.primary.skills_next} />
          <div>
            <PrismicRichText field={slice.primary.next_stack} />
          </div>
        </div>
        <div className={class_raw}>
          <div>
            <PrismicRichText field={slice.primary.other} />
          </div>
          <Skills skills={slice.primary.skills_other} />
        </div>
      </GridLayout>
    </section>
  );
};

export default StackJourney;
