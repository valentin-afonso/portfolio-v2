import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { GeistMono } from "geist/font/mono";
import "@/app/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import NavMobile from "@/components/NavMobile";
import { ThemeProvider } from "@/app/theme-provider";

type LayoutType = {
  children: React.ReactNode;
  params: any;
};

export default async function RootLayout({ children, params }: LayoutType) {
  const { lang } = await params;
  return (
    <html
      lang="en"
      className={`${GeistMono.className} overflow-x-hidden max-w-[100vw]`}
      suppressHydrationWarning={process.env.NODE_ENV === "production"}
    >
      <body className="overflow-x-hidden max-w-[100vw]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header lang={lang} />
          {children}
          <NavMobile />
          <Footer />
        </ThemeProvider>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
