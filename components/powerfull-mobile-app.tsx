import React from 'react'
import Container from './container'
import SectionTtitle from './section-title'
import Image from 'next/image';
import { Button } from '@radix-ui/themes';

const PowerfullMobileApp = () => {
  return (
    <div className="bg-gray-100">
      <Container className="py-20">
        <SectionTtitle title="Powerfull mobile app" />
        <div className="my-20 flex gap-10">
          <div className="bg-gray-200 w-1/2 h-auto py-20 flex justify-center items-center rounded-2xl">
            <Image
              src="/assets/images/mobile-app.png"
              alt="Mobile App Screenshot 1"
              width={400}
              height={600}
              className="rounded-lg object-cover w-auto h-auto"
            />
          </div>
          <div>
            <h2 className="text-6xl text-gray-500 mb-4">
              Built for <span className="text-gray-800">real life.</span>
            </h2>
            <p className="mb-8 text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Possimus, iste.
            </p>
            <Button size="4" color="gray" highContrast>
              Explore All Use Case
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PowerfullMobileApp