import SocialsFooter from "@/components/footer/SocialsFooter";
import NavigationFooter from "@/components/footer/NavigationFooter";

export default function FooterComponents({ slice }: any) {
  if (!slice) return null;
  if (slice.slice_type === "navigation") {
    return <NavigationFooter slice={slice} />;
  }
  if (slice.slice_type === "socials") {
    return <SocialsFooter slice={slice} />;
  }
}
