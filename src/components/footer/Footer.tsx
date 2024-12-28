import { createClient } from "@/prismicio";

import Logo from "@/components/Logo";
import GridLayout from "../GridLayout";

import ToTop from "@/components/footer/ToTop";
import FooterComponents from "@/components/footer/FooterComponents";

export default async function Footer() {
  const client = createClient();
  const footer = await client.getByUID("footer", "footer");
  console.log(footer.data.slices);

  return (
    <footer>
      <GridLayout>
        <Logo />
        {footer.data.slices.map((silce) => (
          <FooterComponents key={silce.id} slice={silce} />
        ))}
        <ToTop />
      </GridLayout>
    </footer>
  );
}
