import { SiteHeader } from "@/components/layout";
import {
  FeatureRows,
  Gallery,
  Hero,
  ServicePanels,
  Testimonials,
} from "@/views/home";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <FeatureRows />
        <ServicePanels />
        <Testimonials />
        <Gallery />
      </main>
    </>
  );
}
