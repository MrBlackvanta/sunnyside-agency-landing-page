import { SiteHeader } from "@/components/layout";
import { FeatureRows, Hero, ServicePanels } from "@/views/home";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <FeatureRows />
        <ServicePanels />
      </main>
    </>
  );
}
