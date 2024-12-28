import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { GeistMono } from "geist/font/mono";
import "@/app/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/app/theme-provider";

type LayoutType = {
  children: React.ReactNode;
  params: { lang: string };
};

export default function RootLayout({ children, params }: LayoutType) {
  return (
    <html
      lang="en"
      className={GeistMono.className}
      suppressHydrationWarning={process.env.NODE_ENV === "production"}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header lang={params.lang} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
