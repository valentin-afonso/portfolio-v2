import { getLocales } from "@/utils/getLocales";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { createClient } from "@/prismicio";
import ToggleDarkMode from "@/components/ToggleDarkMode";
import SvgWave from "@/components/svg/SvgWave";

export default async function HeaderSettings({ lang }: { lang: string }) {
  const client = createClient();
  const home = await client.getByUID("page", "home", {
    lang,
  });
  const locales = await getLocales(home, client);
  return (
    <div className="relative min-h-[72px] px-4 border-x border-border/15 dark:border-border flex items-center gap-4 overflow-hidden">
      <LanguageSwitcher locales={locales} />
      <ToggleDarkMode />
      <SvgWave additional_class="absolute top-[-7rem] left-[-5rem] w-[345px] h-auto" />
    </div>
  );
}
