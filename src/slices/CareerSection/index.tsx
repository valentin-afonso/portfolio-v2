import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import GridLayout from "@/components/GridLayout";
import BlocCareers from "@/components/BlocCareers";
import LinesPlus from "@/components/LinesPlus";
/**
 * Props for `CareerSection`.
 */
export type CareerSectionProps =
  SliceComponentProps<Content.CareerSectionSlice>;

/**
 * Component for "CareerSection" Slices.
 */
const CareerSection = ({ slice }: CareerSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pt-24 pb-24 max-w-[100vw] overflow-x-hidden"
      id="career"
    >
      <GridLayout additional_class="relative overflow-visible">
        <PrismicRichText field={slice.primary.title} />
        <LinesPlus position="top" />
        <BlocCareers />
        <LinesPlus position="bottom" />
      </GridLayout>
    </section>
  );
};

export default CareerSection;
