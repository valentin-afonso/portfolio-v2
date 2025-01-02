import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import GridLayout from "@/components/GridLayout";
import BlocCareers from "@/components/BlocCareers";
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
      className="pb-44"
    >
      <GridLayout>
        <PrismicRichText field={slice.primary.title} />
        <BlocCareers />
      </GridLayout>
    </section>
  );
};

export default CareerSection;
