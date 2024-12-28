import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

export default function SocialsFooter({ slice }: any) {
  return (
    <div>
      <PrismicRichText field={slice.primary.title} />
      <ul>
        {slice.primary.social.map((item: any) => (
          <li key={item.id}>
            <PrismicNextLink field={item.link} />
          </li>
        ))}
      </ul>
    </div>
  );
}
