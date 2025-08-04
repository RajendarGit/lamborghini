import Features from "@/components/features";
import Hero from "@/components/hero";
import InNumbers from "@/components/in-numbers";
import PowerfullMobileApp from "@/components/powerfull-mobile-app";
import PriceContent from "@/components/price-content";
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
    </main>
  );
}
