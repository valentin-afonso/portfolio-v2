import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { GeistMono } from "geist/font/mono";
import "@/app/globals.css";
import Header from "@/components/header/Header";

type LayoutType = {
  children: React.ReactNode;
  params: { lang: string };
};

export default function RootLayout({ children, params }: LayoutType) {
  return (
    <html lang="en" className={GeistMono.className}>
      <body>
        <Header lang={params.lang} />
        {children}
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
