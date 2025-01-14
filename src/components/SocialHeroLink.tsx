import Link from "next/link";
import IconX from "@/components/svg/socials/IconX";
import IconLinkedin from "@/components/svg/socials/IconLinkedin";
import IconGithub from "@/components/svg/socials/IconGithub";
import IconLeetcode from "@/components/svg/socials/IconLeetcode";
import IconExternLink from "@/components/svg/IconExternLink";
import LeetcodeCounter from "@/components/LeetcodeCounter";
import GithubCounter from "@/components/GithubCounter";
import SvgWave from "@/components/svg/SvgWave";
import SkeletonLeetcode from "./SkeletonLeetcode";
import IconResume from "@/components/svg/socials/IconResume";
import LinkResume from "@/components/LinkResume";
import { Suspense } from "react";
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
      return <IconResume />;
    }
  };
  const icon = getIcon();
  if (social.id_social === "resume") {
    console.log(social);
    return (
      <LinkResume social={social}>
        <SvgWave additional_class="absolute top-[-7rem] left-[-5rem]" />
        {icon}
        <span className="flex items-center gap-1 justify-end text-right text-black/65 dark:text-white/65 text-xs z-[-1]">
          {social.link.text}
          <IconExternLink />
        </span>
      </LinkResume>
    );
  }

  return (
    <>
      <Link
        href={social.link.url}
        target="_blank"
        className="relative group/herolink w-40 h-32 p-3 flex flex-col justify-between border border-border hover:border-black/80 dark:hover:border-white/80 rounded-xl overflow-hidden"
      >
        <SvgWave additional_class="absolute top-[-7rem] left-[-5rem]" />
        {icon}
        {social.id_social === "github" && (
          <GithubCounter counter={social.counter} />
        )}

        {social.id_social === "leetcode" && (
          <Suspense fallback={<SkeletonLeetcode />}>
            <LeetcodeCounter counter={social.counter} />
          </Suspense>
        )}
        <span className="flex items-center gap-1 justify-end text-right text-black/65 dark:text-white/65 text-xs z-[-1]">
          {social.link.text}
          <IconExternLink />
        </span>
      </Link>
    </>
  );
}
