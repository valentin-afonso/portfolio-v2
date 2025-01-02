import { MainNavigation } from "./MainNavigation";
import Logo from "@/components/Logo";
import HeaderSettings from "@/components/header/HeaderSettings";
import GridLayout from "@/components/GridLayout";

export default function Header({ lang }: { lang: string }) {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 border-b-2 border-border/15">
      <GridLayout additional_class="flex items-center justify-between min-h-[72px]">
        <Logo />
        <div className="flex items-center gap-4">
          <MainNavigation />
          <HeaderSettings lang={lang} />
        </div>
      </GridLayout>
    </header>
  );
}
