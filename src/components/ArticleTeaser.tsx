import React from "react";
import Link from "next/link";
//import Tags from "@/ui/Tags";
//import ReadingTime from "@/ui/ReadingTime";
import Image from "next/image";
export default function ArticleTeaser({ article }: any) {
  const image = article?.image;
  const max_length = 75;
  let suffix = "";
  if (article.teaser.length > max_length) {
    suffix = "...";
  }
  const short_teaser = article.teaser.substring(0, max_length) + suffix;
  const alt = image?.alt ? image?.alt : "article staytuneed";
  return (
    <Link
      href={`https://www.staytuneed.com//blog/${article.slug}`}
      className="group bg-secondary flex flex-col max-w-[100%] w-[200px] sm:w-[276px] min-h-[355px] rounded-xl border border-[#E9E9E9] dark:border-[#393939] hover:border-[#d3d2d2] dark:hover:border-[#575757] shadow-light hover:shadow-md"
      target="_blank"
    >
      <Image
        src={image?.url}
        width={840}
        height={500}
        alt={alt}
        placeholder="blur"
        blurDataURL={image.blurUpThumb}
        className="rounded max-w-full brightness-95 dark:brightness-75 group-hover:brightness-100 transition-all"
      />
      <div className="flex flex-col grow justify-between p-4">
        <p className="font-bold text-base mb-2 sm:mb-3 text-black dark:text-white/95">
          {article.title}
        </p>
        <p className="text-sm text-black/60 dark:text-white/55">
          {short_teaser}
        </p>
      </div>
    </Link>
  );
}
