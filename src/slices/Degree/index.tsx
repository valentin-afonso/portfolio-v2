import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Degree`.
 */
export type DegreeProps = SliceComponentProps<Content.DegreeSlice>;

/**
 * Component for "Degree" Slices.
 */
const Degree = ({ slice }: DegreeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for degree (variation: {slice.variation}) Slices
    </section>
  );
};

export default Degree;
