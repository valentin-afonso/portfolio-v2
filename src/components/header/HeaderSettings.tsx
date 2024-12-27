import { getLocales } from "@/utils/getLocales";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { createClient } from "@/prismicio";

export default async function HeaderSettings({ lang }: { lang: string }) {
  const client = createClient();
  const home = await client.getByUID("page", "home", {
    lang,
  });
  const locales = await getLocales(home, client);
  return (
    <div>
      <LanguageSwitcher locales={locales} />
    </div>
  );
}
