"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";

type Type = {
  children: React.ReactNode;
  social: any;
};
//https://images.prismic.io/valafso-portfolio/Z4beeZbqstJ99dwc_porfolio-qrcode-1-.png?auto=format,compress

export default function LinkResume({ children, social }: Type) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative group/herolink w-40 h-32 p-3 flex flex-col justify-between border border-border hover:border-black/80 dark:hover:border-white/80 rounded-xl overflow-hidden">
            {children}
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{social.title_popup}</DialogTitle>
            <DialogDescription>
              <PrismicRichText field={social.desc_popup} />
            </DialogDescription>
          </DialogHeader>
          <div className="flex">
            <div className="w-1/2 p-4">
              <Image
                src={`${social.qrcode.url}`}
                width={75}
                height={112}
                alt={`${social.qrcode.alt}`}
                className="dark:brightness-90"
              />
            </div>
            <div className="w-1/2 p-4">
              <PrismicNextLink field={social.link} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
