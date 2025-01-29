import Link from "next/link";
import IconResume from "@/components/svg/socials/IconResume";
import IconSchool from "@/components/svg/nav/IconSchool";
import IconBlog from "@/components/svg/nav/IconBlog";
import IconCareer from "@/components/svg/nav/IconCareer";
import IconProjects from "@/components/svg/nav/IconProjects";

export default function NavLinkMobile({ link }: any) {
  if (!link) return null;
  console.log(link);
  const url = link && link.url ? link.url : "/";
  // const text = link && link.text ? link.text : "undefined";

  const getIcon = () => {
    if (link.url === "#career") {
      return <IconCareer />;
    } else if (link.url === "#projects") {
      return <IconProjects />;
    } else if (link.url === "#degree") {
      return <IconSchool />;
    } else if (link.url === "#blog") {
      return <IconBlog />;
    }
  };
  const icon = getIcon();
  return <Link href={url}>{icon}</Link>;
}
