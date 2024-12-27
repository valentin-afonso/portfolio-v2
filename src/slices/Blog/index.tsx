import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import GridLayout from "@/components/GridLayout";
import Link from "next/link";
import BlocArticles from "@/components/BlocArticles";
/**
 * Props for `Blog`.
 */
export type BlogProps = SliceComponentProps<Content.BlogSlice>;

/**
 * Component for "Blog" Slices.
 */
const Blog = ({ slice }: BlogProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <GridLayout>
        <PrismicRichText field={slice.primary.title} />
        <Link href={slice.primary.link.url} target="_blank">
          {slice.primary.link.text}
        </Link>
        <BlocArticles />
      </GridLayout>
    </section>
  );
};

export default Blog;