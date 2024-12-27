import { createClient } from "@/prismicio";
import ProjectItem from "@/components/ProjectItem";

export default async function BlocProjects() {
  const client = createClient();
  const projects = await client.getByUID("prpjects", "projects");
  return (
    <div>
      {projects.data.slices.map((slice) => (
        <ProjectItem key={slice.id} slice={slice} />
      ))}
    </div>
  );
}
