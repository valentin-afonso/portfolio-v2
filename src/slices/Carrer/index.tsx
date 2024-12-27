import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Carrer`.
 */
export type CarrerProps = SliceComponentProps<Content.CarrerSlice>;

/**
 * Component for "Carrer" Slices.
 */
const Carrer = ({ slice }: CarrerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for carrer (variation: {slice.variation}) Slices
    </section>
  );
};

export default Carrer;
