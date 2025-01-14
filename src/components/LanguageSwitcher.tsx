import { PrismicNextLink } from "@prismicio/next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Language from "@/components/svg/Language";
import { Check, ChevronDown, Globe } from "lucide-react";
interface LanguageSwitcherProps {
  locales: {
    lang: string;
    lang_name: string;
    url: string;
  }[];
}
const localeLabels = {
  "en-us": "EN",
  "fr-fr": "FR",
};

export const LanguageSwitcher = ({ locales }: LanguageSwitcherProps) => (
  <>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-background z-[1] max-w-[45px]"
          aria-label="switch language"
        >
          <Language />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-10">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale.lang}
            className="cursor-pointer first:font-semibold"
          >
            <PrismicNextLink
              href={locale.url}
              locale={locale.lang}
              aria-label={`Change language to ${locale.lang_name}`}
            >
              {localeLabels[locale.lang as keyof typeof localeLabels] ||
                locale.lang}
            </PrismicNextLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  </>
);
