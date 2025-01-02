import SocialHeroLink from "@/components/SocialHeroLink";

export default function SocialsHero({ socials }: any) {
  return (
    <ul className="grid grid-cols-2 gap-6 justify-end items-end align-bottom ">
      {socials.map((item: any) => (
        <li key={item.id_social} className="last:col-start-2">
          <SocialHeroLink social={item} />
        </li>
      ))}
    </ul>
  );
}
