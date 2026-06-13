import { MarketingPage, metadataFor } from "../marketing-page";

export const metadata = metadataFor("insight");

export default function InsightPage() {
  return <MarketingPage pageKey="insight" />;
}
