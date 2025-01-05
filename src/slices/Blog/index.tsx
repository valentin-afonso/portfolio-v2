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
      className="pb-44"
    >
      <GridLayout>
        <div className="w-full items-center flex justify-between">
          <PrismicRichText field={slice.primary.title} />
          <Link
            href="https://www.staytuneed.com/blog/author/valentin-afonso"
            target="_blank"
          >
            {slice.primary.link.text}
          </Link>
        </div>
        <BlocArticles />
      </GridLayout>
    </section>
  );
};

export default Blog;
