import SocialHeroLink from "@/components/SocialHeroLink";

export default function SocialsHero({ socials }: any) {
  return (
    <ul>
      {socials.map((item: any) => (
        <li key={item.id_social}>
          <SocialHeroLink social={item} />
        </li>
      ))}
    </ul>
  );
}
