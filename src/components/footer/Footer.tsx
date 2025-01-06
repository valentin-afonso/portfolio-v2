import { createClient } from "@/prismicio";

import Logo from "@/components/Logo";
import GridLayout from "../GridLayout";
import SvgWaveXl from "@/components/svg/SvgWaveXl";

import ToTop from "@/components/footer/ToTop";
import FooterComponents from "@/components/footer/FooterComponents";

export default async function Footer() {
  const client = createClient();
  const footer = await client.getByUID("footer", "footer");

  return (
    <footer className="mb-8">
      <GridLayout additional_class="relative py-24 border border-[#D4D4D4] dark:border-border rounded-xl overflow-hidden">
        <SvgWaveXl additional_class="absolute top-[-27rem] left-[-14rem] w-[1714px] h-auto" />
        <div className="flex gap-16 px-8 w-full">
          <Logo />
          {footer.data.slices.map((silce) => (
            <FooterComponents key={silce.id} slice={silce} />
          ))}
        </div>

        <ToTop />
      </GridLayout>
    </footer>
  );
}
