import { getLocales } from "@/utils/getLocales";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { createClient } from "@/prismicio";
import ToggleDarkMode from "@/components/ToggleDarkMode";

export default async function HeaderSettings({ lang }: { lang: string }) {
  const client = createClient();
  const home = await client.getByUID("page", "home", {
    lang,
  });
  const locales = await getLocales(home, client);
  return (
    <div className="flex items-center gap-4">
      <LanguageSwitcher locales={locales} />
      <ToggleDarkMode />
    </div>
  );
}
