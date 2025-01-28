import type { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import StatusPro from "@/components/StatusPro";
import SocialsHero from "@/components/SocialsHero";
import SvgHello from "@/components/svg/SvgHello";
import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
} from "@prismicio/react";
import SvgWave from "@/components/svg/SvgWave";
import GridLayout from "@/components/GridLayout";
import Avatar from "@/components/Avatar";
import Skills from "@/components/Skills";

const components: JSXMapSerializer = {
  hyperlink: ({ node, children }) => {
    return <PrismicNextLink field={node.data}>{children}</PrismicNextLink>;
  },
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return (
        <code className="relative inline-block mx-3 overflow-hidden p-[3px]  bg_gradient_colorfull rounded-[8px] font-geist">
          <span className="relative block bg-white dark:bg-black overflow-hidden rounded-[6px] py-1 px-4 leading-normal text-sm xs:text-base sm:text-xl font-bold">
            <SvgWave additional_class="absolute left-[-11rem] top-[-12rem]" />
            {children}
          </span>
        </code>
      );
    }
  },
  paragraph: ({ children }) => {
    return <p className="text-lg">{children}</p>;
  },
  heading1: ({ children }) => {
    return (
      <h1 className="flex items-center justify-center sm:justify-start gap-4 text-xl xxs:text-3xl md:text-4xl font-bold mb-4">
        <SvgHello /> {children}
      </h1>
    );
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
      <GridLayout additional_class="flex flex-col lg:flex-row justify-between items-center min-h-screen pt-[130px] lg:pt-[74px]">
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-center justify-center sm:justify-start gap-4 ">
            <Avatar img={slice.primary.profil} />
            <StatusPro status={slice.primary.status} />
          </div>
          <PrismicRichText field={slice.primary.text} components={components} />
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-2 hero_tech mt-8">
            <p className="text-lg">{slice.primary.last_text}</p>
            <Skills skills={slice.primary.skills} isLight />
          </div>
        </div>
        <SocialsHero socials={slice.primary.socials} />
      </GridLayout>
    </section>
  );
};

export default HeroSection;
