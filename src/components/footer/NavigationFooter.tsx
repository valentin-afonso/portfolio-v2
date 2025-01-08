import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

export default function NavigationFooter({ slice }: any) {
  return (
    <div>
      <PrismicRichText field={slice.primary.title} />
      <ul>
        {slice.primary.links.map((item: any) => (
          <li key={item.id}>
            <PrismicNextLink
              field={item.link}
              className="opacity-80 hover:opacity-100 transition-all"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
