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
      className="pb-24 md:pb-64 text-center text-3xl"
    >
      <GridLayout additional_class="relative py-8 md:py-16">
        <div className="absolute top-[-40px] left-0 md:left-[-140px] w-4/12 h-[1px] bg_h_line"></div>
        <div className="absolute top-[-90px] left-8 md:left-[-40px] h-32 md:h-[10rem] w-[1px] bg_v_line"></div>

        <div className="absolute top-[-40px] right-0 md:right-[-140px] w-4/12 h-[1px] bg_h_line"></div>
        <div className="absolute top-[-90px] right-8 md:right-[-40px] h-32 md:h-[10rem] w-[1px] bg_v_line"></div>
        <PrismicRichText field={slice.primary.text} />
        <div className="absolute bottom-[-40px] left-0 md:left-[-140px] w-4/12 h-[1px] bg_h_line"></div>
        <div className="absolute bottom-[-90px] left-8 md:left-[-40px] h-32 md:h-[10rem] w-[1px] bg_v_line"></div>

        <div className="absolute bottom-[-40px] right-0 md:right-[-140px] w-4/12 h-[1px] bg_h_line"></div>
        <div className="absolute bottom-[-90px] right-8 md:right-[-40px] h-32 md:h-[10rem] w-[1px] bg_v_line"></div>
      </GridLayout>
    </section>
  );
};

export default FloatingText;
