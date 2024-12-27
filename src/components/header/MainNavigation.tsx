import { createClient } from "@/prismicio";
import NavLink from "@/components/header/NavLink";

export async function MainNavigation() {
  const client = createClient();
  const navigation = await client.getByUID("navigation", "main_navigation");
  return (
    <nav>
      <ul className="flex items-center gap-4">
        {navigation.data.slices.map((slice) =>
          slice.primary.link.map((link, key) => (
            <li>
              <NavLink key={key} link={link} />
            </li>
          ))
        )}
      </ul>
    </nav>
  );
}
