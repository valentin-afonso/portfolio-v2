import Skills from "@/components/Skills";
export default function CarrerItem({ slice }: any) {
  return (
    <div className="bg-black text-white p-4">
      <p>{slice.primary.date}</p>
      <p>{slice.primary.job_title}</p>
      <p>{slice.primary.job_status}</p>
      <p>{slice.primary.company}</p>
      <p>{slice.primary.location}</p>
      <Skills skills={slice.primary.skills} />
    </div>
  );
}
