import Skills from "@/components/Skills";
import IconCertification from "@/components/svg/IconCertification";
import Slide from "@/components/Slide";

export default function DegreeItem({ slice }: any) {
  const is_certif = slice.primary.is_certification;
  const text_top = is_certif ? "certification" : slice.primary.date;
  return (
    <Slide>
      <div className="flex items-center gap-2 text-white/75">
        {is_certif && <IconCertification />}
        <span className="text-base xl:text-xl font-bold">{text_top}</span>
      </div>
      <p className="text-2xl xl:text-3xl font-bold">{slice.primary.intitule}</p>
      {is_certif && (
        <p className="text-xl font-medium pb-16">
          {slice.primary.certification_desc}
        </p>
      )}
      {!is_certif && (
        <p className="text-base xl:text-xl font-medium pb-16">
          At {slice.primary.school}
        </p>
      )}
      <div className="absolute right-5 bottom-5">
        <Skills skills={slice.primary.skills} />
      </div>
    </Slide>
  );
}
