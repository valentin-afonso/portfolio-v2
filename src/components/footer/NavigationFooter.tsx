import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

export default function NavigationFooter({ slice }: any) {
  return (
    <div>
      <PrismicRichText field={slice.primary.title} />
      <ul>
        {slice.primary.links.map((item: any) => (
          <li key={item.id}>
            <PrismicNextLink field={item.link} />
          </li>
        ))}
      </ul>
    </div>
  );
}
