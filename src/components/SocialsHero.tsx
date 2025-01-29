import SocialHeroLink from "@/components/SocialHeroLink";

export default function SocialsHero({ socials }: any) {
  return (
    <div className="relative pt-24 lg:pt-0">
      <div className="hidden md:block absolute top-[-40px] right-[-140px] w-[15rem] h-[1px] bg_h_line"></div>
      <div className="hidden md:block absolute top-[-90px] right-[-40px] h-[10rem] w-[1px] bg_v_line"></div>
      <ul className="flex flex-wrap justify-center lg:grid lg:grid-cols-2 gap-6 lg:justify-end items-end align-bottom ">
        {socials.map((item: any) => (
          <li key={item.id_social} className="last:col-start-2">
            <SocialHeroLink social={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
