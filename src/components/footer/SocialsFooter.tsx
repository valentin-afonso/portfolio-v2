import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import IconX from "@/components/svg/socials/IconX";
import IconLinkedin from "@/components/svg/socials/IconLinkedin";
import IconGithub from "@/components/svg/socials/IconGithub";

export default function SocialsFooter({ slice }: any) {
  return (
    <div className="socials">
      <PrismicRichText field={slice.primary.title} />
      <ul className="flex items-center gap-8">
        {slice.primary.social.map((item: any) => (
          <li key={item.id}>
            <Link
              href={item.link.url}
              target="_blank"
              className="opacity-80 hover:opacity-100 transition-all"
              aria-label={item.id_social}
            >
              {item.id_social === "github" && <IconGithub />}
              {item.id_social === "linkedin" && <IconLinkedin />}
              {item.id_social === "x" && <IconX />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
