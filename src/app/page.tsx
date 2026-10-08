import { SiteHeader } from "@/components/layout";
import { FeatureRows, Hero } from "@/views/home";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <FeatureRows />
      </main>
    </>
  );
}
