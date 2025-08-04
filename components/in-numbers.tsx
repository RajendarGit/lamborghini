import React from "react";
import Container from "./container";
import SectionTtitle from "./section-title";
import InNumbersCard from "./in-numbers-card";

const InNumbers = () => {
  return (
    <div className="bg-gray-100">
    <Container className="py-20">
        <SectionTtitle title="In numbers" />
        <p className="text-gray-400 lg:w-1/3 mt-10 mb-10 lg:mb-30">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, doloribus nihil ipsum cupiditate architecto rem beatae reprehenderit incidunt reiciendis? Eius.
        </p>
      <div className="flex flex-col md:flex-row md:ml-[3rem]">
        <InNumbersCard
          title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis saepe repellat consequatur laborum"
          count={80}
          subtext="times"
        />
        <InNumbersCard
          color="black"
          className="md:ml-[-1.5rem]"
          title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis."
          count={85}
          subtext="%"
        />
        <InNumbersCard
          color="orange"
          className="md:ml-[-1.5rem]"
          title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          count={17}
          subtext="hours"
        />
      </div>
    </Container>
    </div>
  );
};

export default InNumbers;
