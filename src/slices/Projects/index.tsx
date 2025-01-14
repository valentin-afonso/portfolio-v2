import { Content } from "@prismicio/client";
import GridLayout from "@/components/GridLayout";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import BlocProjects from "@/components/BlocProjects";

/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects = ({ slice }: ProjectsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pt-24 pb-4"
      id="projects"
    >
      <GridLayout additional_class="relative">
        <PrismicRichText field={slice.primary.title} />
        <BlocProjects />
        <div className="absolute bottom-[-40px] left-0 w-full h-[1px] bg_h_line"></div>
      </GridLayout>
    </section>
  );
};

export default Projects;
