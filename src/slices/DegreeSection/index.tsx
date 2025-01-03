import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import GridLayout from "@/components/GridLayout";
import BlocCareers from "@/components/BlocCareers";
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
      className="pb-44"
    >
      <GridLayout>
        <PrismicRichText field={slice.primary.title} />
        <BlocDegree />
      </GridLayout>
    </section>
  );
};

export default DegreeSection;
