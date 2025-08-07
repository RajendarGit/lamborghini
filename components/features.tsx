import React from "react";
import Container from "./container";
import SectionTtitle from "./section-title";
import { Button } from "@radix-ui/themes";
import FeaturesCard from "./features-card";
import { DesktopIcon, LightningBoltIcon, MixerVerticalIcon, MixIcon } from "@radix-ui/react-icons";

const Features = () => {
  return (
    <>
      <Container className="py-20">
        <SectionTtitle title="Features" />
        <div className="lg:w-1/2 mx-auto my-20">
          <h2 className="text-5xl lg:text-6xl text-gray-500 mb-2">Built for real life.</h2>
          <h2 className="text-5xl lg:text-6xl text-gray-900 mb-8">Families and creators.</h2>
          <p className="mb-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
            iste.
          </p>
          <Button color="gray" highContrast size="4">
            Shop Portable Kit
          </Button>
        </div>
        <div className="md:flex gap-4">
            <FeaturesCard title="Solar Anywhere" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis saepe repellat consequatur laborum" Icon={MixIcon} />
            <FeaturesCard title="Multiple Outputs" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis saepe repellat consequatur laborum" Icon={MixerVerticalIcon} />
            <FeaturesCard title="Fast Charging" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis saepe repellat consequatur laborum" Icon={DesktopIcon} />
            <FeaturesCard title="Tough & Travel-Ready" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." Icon={LightningBoltIcon} />
        </div>
      </Container>
    </>
  );
};

export default Features;
