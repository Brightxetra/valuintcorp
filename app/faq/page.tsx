import { MarketingPage, metadataFor } from "../marketing-page";

export const metadata = metadataFor("faq");

export default function FaqPage() {
  return <MarketingPage pageKey="faq" />;
}
