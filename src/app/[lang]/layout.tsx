// import type { Metadata } from "next";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { GeistMono } from "geist/font/mono";
import "@/app/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/app/theme-provider";

type LayoutType = {
  children: React.ReactNode;
  params: any;
};

/*
export const metadata: Metadata = {
  title: "valentin.afso",
  description: "Welcome on my portfolio !",
  openGraph: {
    title: "valentin.afso",
    description: "Welcome on my portfolio !",
    type: "article",
    url: "https://valentinafso.vercel.app/",
    images: [
      {
        url: "https://valentinafso.vercel.app/images/twitter-image.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "valentin.afso",
    description: "Welcome on my portfolio !",
    creator: "@valentinafso",
    images: [
      {
        url: "https://valentinafso.vercel.app/images/twitter-image.jpg",
        width: 1200,
        height: 630,
        alt: "twitter image protfolio",
      },
    ],
  },
};
*/

export default async function RootLayout({ children, params }: LayoutType) {
  const { lang } = await params;
  return (
    <html
      lang="en"
      className={GeistMono.className}
      suppressHydrationWarning={process.env.NODE_ENV === "production"}
    >
      <body className="overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header lang={lang} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
