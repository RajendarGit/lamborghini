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
        <div className="my-20 md:flex md:gap-10 lg:gap-50">
          <div className="bg-gradient-to-b from-gray-400 to-yellow-800/50 md:w-1/2 h-auto py-20 flex justify-center items-center rounded-4xl mb-10 md:mb-0">
            <Image
              src="/assets/images/mobile-app.png"
              alt="Mobile App Screenshot 1"
              width={400}
              height={600}
              className="rounded-lg object-cover w-auto md:h-[600px]"
            />
          </div>
          <div className='flex flex-col justify-center items-start'>
            <h2 className="text-5xl lg:text-6xl text-gray-500 mb-4">
              Built for <span className="text-gray-800">real life.</span>
            </h2>
            <p className="mb-8 text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Possimus, iste.
            </p>
            <Button size="4" color="gray" highContrast>
              Explore All Use Case
            </Button>
            <div className='mt-10'>
              <p className="mb-8 text-gray-500 text-xl border-b border-gray-300 pb-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Possimus, iste.
            </p>
            <p className="mb-8 text-gray-500 text-xl border-b border-gray-300 pb-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Possimus, iste.
            </p>
            <p className="mb-8 text-gray-500 text-xl border-b border-gray-300 pb-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Possimus, iste.
            </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PowerfullMobileApp