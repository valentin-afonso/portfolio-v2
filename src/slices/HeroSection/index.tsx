import type { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import StatusPro from "@/components/StatusPro";
import SocialsHero from "@/components/SocialsHero";
import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
} from "@prismicio/react";
import SvgWave from "@/components/svg/SvgWave";
import GridLayout from "@/components/GridLayout";
import Avatar from "@/components/Avatar";

const components: JSXMapSerializer = {
  hyperlink: ({ node, children }) => {
    return <PrismicNextLink field={node.data}>{children}</PrismicNextLink>;
  },
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return (
        <code className="relative inline-block mx-3 overflow-hidden p-[3px]  bg_gradient_colorfull rounded-[8px]">
          <span className="relative block bg-white overflow-hidden rounded-[6px] py-1 px-4 leading-normal text-xl font-bold">
            <SvgWave additional_class="absolute left-[-11rem] top-[-12rem]" />
            {children}
          </span>
        </code>
      );
    }
  },
  paragraph: ({ children }) => {
    return <p className="text-lg text-red">{children}</p>;
  },
};

/**
 * Props for `HeroSection`.
 */
export type HeroSectionProps = SliceComponentProps<Content.HeroSectionSlice>;

/**
 * Component for "HeroSection" Slices.
 */

const HeroSection = ({ slice }: HeroSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <GridLayout additional_class="flex justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 ">
            <Avatar img={slice.primary.profil} />
            <StatusPro status={slice.primary.status} />
          </div>
          <PrismicRichText field={slice.primary.text} components={components} />
        </div>
        <SocialsHero socials={slice.primary.socials} />
      </GridLayout>
    </section>
  );
};

export default HeroSection;