import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Socials`.
 */
export type SocialsProps = SliceComponentProps<Content.SocialsSlice>;

/**
 * Component for "Socials" Slices.
 */
const Socials = ({ slice }: SocialsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for socials (variation: {slice.variation}) Slices
    </section>
  );
};

export default Socials;
