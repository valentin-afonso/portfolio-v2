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
      <GridLayout>
        <PrismicRichText field={slice.primary.title} />
        <BlocProjects />
      </GridLayout>
    </section>
  );
};

export default Projects;
