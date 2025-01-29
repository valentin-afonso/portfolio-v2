import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import GridLayout from "@/components/GridLayout";
import LinesPlus from "@/components/LinesPlus";
import BlocDegree from "@/components/BlocDegree";

/**
 * Props for `DegreeSection`.
 */
export type DegreeSectionProps =
  SliceComponentProps<Content.DegreeSectionSlice>;

/**
 * Component for "DegreeSection" Slices.
 */
const DegreeSection = ({ slice }: DegreeSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pt-24 max-w-[100vw] overflow-x-hidden"
      id="degree"
    >
      <GridLayout additional_class="relative">
        <LinesPlus position="top" />
        <PrismicRichText field={slice.primary.title} />
        <BlocDegree />
        <LinesPlus position="bottom" />
      </GridLayout>
    </section>
  );
};

export default DegreeSection;
