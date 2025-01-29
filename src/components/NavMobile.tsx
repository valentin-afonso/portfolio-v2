import { createClient } from "@/prismicio";
import NavLinkMobile from "@/components/NavLinkMobile";

export default async function NavMobile() {
  const client = createClient();
  const navigation = await client.getByUID("navigation", "main_navigation");

  return (
    <nav className="z-50 block sm:hidden fixed bottom-4 left-0 w-full px-3">
      <ul className="bg_blur w-full flex justify-center items-center gap-5 border-2 border-border/15 rounded-full">
        {navigation.data.slices.map((slice) => (
          <li key={slice.id} className="py-4 px-2">
            <NavLinkMobile link={slice.primary.link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
