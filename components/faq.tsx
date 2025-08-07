import { Button } from "@radix-ui/themes";
import Container from "./container";
import SectionTtitle from "./section-title";
import FeaturesAccordion from "./features-accordion";

const Faq = () => {
  return (
    <div className="bg-gray-100">
      <Container className="py-20">
        <SectionTtitle title="FAQ" />
        <div className="md:flex md:flex-row gap-10 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <h2 className="text-5xl lg:text-6xl text-gray-500 mb-4">
              New to <span className="text-gray-800">Lamborghini?</span>{" "}
              <br /><span className="text-gray-800">We&apos;ve got you.</span>
            </h2>
            <p className="mb-8 text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Possimus, iste.
            </p>
            <Button size="4" color="gray" highContrast>
              Visit the learning hub
            </Button>
          </div>
          <div className="w-full lg:w-1/2 mt-20 md:mt-0">
          <FeaturesAccordion />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
