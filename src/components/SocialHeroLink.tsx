import Link from "next/link";
import IconX from "@/components/svg/socials/IconX";
import IconLinkedin from "@/components/svg/socials/IconLinkedin";
import IconGithub from "@/components/svg/socials/IconGithub";
import IconLeetcode from "@/components/svg/socials/IconLeetcode";
import IconExternLink from "@/components/svg/IconExternLink";
import SvgWave from "@/components/svg/SvgWave";
export default function SocialHeroLink({ social }: any) {
  const getIcon = () => {
    if (social.id_social === "github") {
      return <IconGithub />;
    } else if (social.id_social === "linkedin") {
      return <IconLinkedin />;
    } else if (social.id_social === "leetcode") {
      return <IconLeetcode />;
    } else if (social.id_social === "x") {
      return <IconX />;
    } else {
      return <IconX />;
    }
  };
  const icon = getIcon();
  return (
    <>
      <Link
        href={social.link.url}
        target="_blank"
        className="relative w-40 h-32 p-3 flex flex-col justify-between border border-border rounded-xl overflow-hidden"
      >
        <SvgWave additional_class="absolute top-[-7rem] left-[-5rem]" />
        {icon}
        <span className="flex items-center gap-1 justify-end text-right text-black/65 text-xs">
          {social.link.text}
          <IconExternLink />
        </span>
      </Link>
    </>
  );
}
