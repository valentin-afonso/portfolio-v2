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
      className="flex flex-col max-w-[100%] w-[200px] sm:w-[276px] min-h-[355px] rounded-xl border border-gray-stroke hover:border-gray-stroke-secondary shadow-light hover:shadow-md"
      target="_blank"
    >
      <Image
        src={image?.url}
        width={840}
        height={500}
        alt={alt}
        placeholder="blur"
        blurDataURL={image.blurUpThumb}
        className="rounded max-w-full"
      />
      <div className="flex flex-col grow justify-between p-4">
        <p className="font-medium text-base mb-2 sm:mb-3 text-text-light">
          {article.title}
        </p>
        <p className="text-sm text-text-light/65">{short_teaser}</p>
      </div>
    </Link>
  );
}
