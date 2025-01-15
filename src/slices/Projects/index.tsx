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
        <div className="absolute top-[-40px] left-[-40px] w-[1px] h-[90%] bg_v_line"></div>
        <div className="absolute top-[-40px] right-[-40px] w-[1px] h-[90%] bg_v_line"></div>
        <PrismicRichText field={slice.primary.title} />
        <BlocProjects />
        <div className="absolute bottom-[-40px] left-0 w-[80%] h-[1px] bg_h_line"></div>

        <div className="absolute bottom-[-40px] left-[-140px] w-4/12 h-[1px] bg_h_line"></div>
        <div className="absolute bottom-[-90px] left-[-40px] h-[10rem] w-[1px] bg_v_line"></div>

        <div className="absolute bottom-[-40px] right-[-140px] w-4/12 h-[1px] bg_h_line"></div>
        <div className="absolute bottom-[-90px] right-[-40px] h-[10rem] w-[1px] bg_v_line"></div>
      </GridLayout>
    </section>
  );
};

export default Projects;
