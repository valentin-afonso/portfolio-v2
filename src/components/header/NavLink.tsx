import Link from "next/link";

export default function NavLink({ link }: any) {
  if (!link) return null;
  const url = link && link.url ? link.url : "/";
  const text = link && link.text ? link.text : "undefined";
  return <Link href={url}>{text}</Link>;
}
