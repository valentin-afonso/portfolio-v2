import Link from "next/link";
export default function SocialHeroLink({ social }: any) {
  return (
    <>
      <Link href={social.link.url} target="_blank">
        {social.link.text}
      </Link>
    </>
  );
}
