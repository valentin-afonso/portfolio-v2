"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import Link from "next/link";
import SvgWave from "@/components/svg/SvgWave";

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
          <div className="relative group/herolink w-40 h-32 p-3 flex flex-col justify-between border border-border hover:border-black/80 dark:hover:border-white/80 rounded-xl cursor-pointer overflow-hidden">
            {children}
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{social.title_popup}</DialogTitle>
            <DialogDescription>{social.desc_popup}</DialogDescription>
          </DialogHeader>
          <div className="flex gap-4">
            <div className="w-1/2 p-4 border border-border dark:bg-white rounded-xl ">
              <Image
                src={`${social.qrcode.url}`}
                width={500}
                height={500}
                alt={`${social.qrcode.alt}`}
                className="bg-white p-4 rounded-xl overflow-hidden"
              />
            </div>

            <Link
              href={social.link.url}
              target="_blank"
              className="group/resume relative w-1/2 p-4 h-full rounded-xl overflow-hidden border border-border"
            >
              <div className="absolute right-0 top-0 w-[170px] h-full border-border border-l overflow-hidden">
                <SvgWave additional_class="absolute top-[-11rem] left-[-16rem] w-[895px] h-auto rotate-[-20deg]" />
              </div>
              <Image
                src={`${social.image_resume.url}`}
                width={960}
                height={720}
                alt={`${social.image_resume.alt}`}
                className="dark:brightness-90 left-[-10rem] bottom-[-24rem] max-w-none object-cover absolute group-hover/resume:translate-x-[-12px] group-hover/resume:translate-y-[-12px] transition-all"
              />
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
