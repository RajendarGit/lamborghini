import Faq from "@/components/faq";
import Features from "@/components/features";
import Hero from "@/components/hero";
import InNumbers from "@/components/in-numbers";
import NewTo from "@/components/new-to";
import PowerfullMobileApp from "@/components/powerfull-mobile-app";
import PriceContent from "@/components/price-content";
import Testimonials from "@/components/testimonials";
import UseCases from "@/components/use-cases";

export default function Home() {
  return (
    <main>
      <Hero />
      <InNumbers />
      <Features />
      <UseCases />
      <PowerfullMobileApp />
      <PriceContent />
      <Testimonials />
      <Faq />
      <NewTo />
    </main>
  );
}
