import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import GridLayout from "@/components/GridLayout";

/**
 * Props for `FloatingText`.
 */
export type FloatingTextProps = SliceComponentProps<Content.FloatingTextSlice>;

/**
 * Component for "FloatingText" Slices.
 */
const FloatingText = ({ slice }: FloatingTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pb-44"
    >
      <GridLayout>
        <PrismicRichText field={slice.primary.text} />
      </GridLayout>
    </section>
  );
};

export default FloatingText;
