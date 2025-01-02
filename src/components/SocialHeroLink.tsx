import Link from "next/link";
export default function SocialHeroLink({ social }: any) {
  return (
    <>
      <Link
        href={social.link.url}
        target="_blank"
        className="w-40 h-32 p-3 flex flex-col justify-between border border-border rounded-xl"
      >
        <span>icon</span>
        <span className="text-right text-black/65 text-xs">
          {social.link.text}
        </span>
      </Link>
    </>
  );
}
