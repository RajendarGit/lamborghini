import { Button } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

const PriceContent = () => {
  return (
    <div className="relative">
      <Image
        src="/assets/images/price-banner.jpg"
        alt="price"
        width={1000}
        height={1000}
        className="w-full h-auto object-cover"
      />
      <div className="absolute top-0 right-0 w-[40%] h-auto text-white p-10">
        <Image
          src="/assets/images/engine.jpg"
          alt="price"
          width={500}
          height={400}
          className="w-full h-full object-cover rounded-2xl shadow-2xl"
        />
      </div>

      <div className="absolute bottom-0 right-0 w-[40%] h-auto text-white p-10">
        <div className="bg-gradient-to-r from-gray-400/50 to-yellow-800/50 rounded-2xl text-center p-10 shadow-2xl">
          <p className="text-4xl mb-4">Lambohini <span className="text-yellow-200">Core 1000W</span></p>
          <p className="text-gray-100/70 mb-4">
            Lamborghini Core 1000W is a 1000W powertrain that is designed for
            performance and reliability.
          </p>
          <p className="mb-4">Price start from</p>
          <p className="text-6xl border-b-2 border-gray-100/20 pb-5 mb-5">
            $1,299.00
          </p>
          <Button size="4" color="gray" highContrast>
            Add to cart
          </Button>{" "}
          <Button size="4" color="gray">
            View specs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PriceContent;
