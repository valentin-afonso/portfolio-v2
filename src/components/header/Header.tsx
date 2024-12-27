import { MainNavigation } from "./MainNavigation";
import Logo from "@/components/Logo";
import HeaderSettings from "@/components/header/HeaderSettings";
import GridLayout from "@/components/GridLayout";

export default function Header({ lang }: { lang: string }) {
  return (
    <header>
      <GridLayout additional_class="flex items-center justify-between min-h-[72px]">
        <Logo />
        <div className="flex items-center">
          <MainNavigation />
          <HeaderSettings lang={lang} />
        </div>
      </GridLayout>
    </header>
  );
}
