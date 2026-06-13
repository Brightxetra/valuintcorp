import { MarketingPage, metadataFor } from "./marketing-page";

export const metadata = metadataFor("home");

export default function Home() {
  return <MarketingPage pageKey="home" />;
}
