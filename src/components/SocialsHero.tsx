import SocialHeroLink from "@/components/SocialHeroLink";

export default function SocialsHero({ socials }: any) {
  return (
    <div className="relative">
      <div className="absolute top-[-40px] right-[-140px] w-[15rem] h-[1px] bg_h_line"></div>
      <div className="absolute top-[-90px] right-[-40px] h-[10rem] w-[1px] bg_v_line"></div>
      <ul className="grid grid-cols-2 gap-6 justify-end items-end align-bottom ">
        {socials.map((item: any) => (
          <li key={item.id_social} className="last:col-start-2">
            <SocialHeroLink social={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
