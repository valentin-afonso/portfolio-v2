import Skills from "@/components/Skills";
import IconCertification from "@/components/svg/IconCertification";

export default function DegreeItem({ slice }: any) {
  const is_certif = slice.primary.is_certification;
  const text_top = is_certif ? "certification" : slice.primary.date;
  return (
    <div className="bg-black text-white p-4">
      <div className="flex items-center gap-2">
        {is_certif && <IconCertification />} <span>{text_top}</span>
      </div>
      <p>{slice.primary.intitule}</p>
      {is_certif && <p>{slice.primary.certification_desc}</p>}
      {!is_certif && <p>At {slice.primary.school}</p>}
      <Skills skills={slice.primary.skills} />
    </div>
  );
}
