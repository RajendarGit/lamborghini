import React from 'react'
import Container from './container'
import SectionTtitle from './section-title'
import { Button } from '@radix-ui/themes'
import Image from 'next/image'

const UseCases = () => {
  return (
    <div className="bg-gray-100">
      <Container className="py-20">
        <SectionTtitle title="Features" />
        <h2 className="text-6xl text-gray-500 mb-4">
          Built for <span className="text-gray-800">real life.</span>
        </h2>
        <p className="mb-8 text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
          iste.
        </p>
        <Button size="4" color="gray" highContrast>
          Explore All Use Case
        </Button>
      </Container>
      <div className="flex w-full overflow-hidden">
        <Image
          src="/assets/images/banner1.jpg"
          alt=""
          width={1000}
          height={400}
          className="object-cover"
        />
        <Image
          src="/assets/images/banner2.jpg"
          alt=""
          width={1000}
          height={400}
          className="object-cover"
        />
        <Image
          src="/assets/images/banner3.jpg"
          alt=""
          width={1000}
          height={400}
          className="object-cover"
        />
        <Image
          src="/assets/images/banner1.jpg"
          alt=""
          width={1000}
          height={400}
          className="object-cover"
        />
        <Image
          src="/assets/images/banner2.jpg"
          alt=""
          width={1000}
          height={400}
          className="object-cover"
        />
        <Image
          src="/assets/images/banner3.jpg"
          alt=""
          width={1000}
          height={400}
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default UseCases