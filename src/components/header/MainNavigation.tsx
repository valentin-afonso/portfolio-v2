import { createClient } from "@/prismicio";
import NavLink from "@/components/header/NavLink";

export async function MainNavigation() {
  const client = createClient();
  const navigation = await client.getByUID("navigation", "main_navigation");
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-4">
        {navigation.data.slices.map((slice) => (
          <li key={slice.id}>
            <NavLink link={slice.primary.link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
