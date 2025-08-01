import { Box, Button } from "@radix-ui/themes";
import Image from "next/image";
import Container from "./container";

const Hero = () => {
  return (
    <div className="relative w-full h-[700px]">
        <video src="/assets/images/video3.mp4" width={400} height={400} className="object-cover w-full absolute top-0 left-0" autoPlay loop preload="auto"
  muted
  playsInline />
      {/* <Image
        src="/assets/images/banner1.jpg"
        alt="Vercel Logo"
        width={1920}
        height={700}
        className="object-cover w-full h-full absolute top-0 left-0"
      /> */}
      <Container>
      <div className="flex gap-30 justify-between items-end h-full relative z-10 pt-50">
        <div className="flex-1">
        <p className="text-4xl lg:text-[3.5rem] bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
          Power Anywhere.
        </p>
        <p className="text-2xl lg:text-[3.5rem] text-white">Instantly.</p>
        <p className="text-4xl text-white">2</p>

        <p className="text-2xl text-white">Essential running</p>
        <p className="text-lg text-gray-400 mb-4">
          The Lamborghini Huracán Sterrato is a limited edition supercar
          designed for off-road performance, featuring a 5.2-liter V10 engine,
          all-wheel drive, and enhanced suspension.
        </p>
        <Button
          size="4"
          style={{ backgroundColor: "#ffffff", color: "#000000" }}
          mr="2"
        >
          Shop portable kits
        </Button>
        <Button size="4" color="gray">
          Compare power stations
        </Button>
      </div>

      <div className="flex gap-4 items-center justify-center h-full">
        <video width={400} height={400} className="object-contain w-[200px] rounded-2xl shadow-2xl" muted preload="auto" playsInline poster="/assets/images/banner1.jpg">
          <source src="/assets/images/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video width={400} height={400} className="object-contain w-[200px] rounded-2xl shadow-2xl" muted preload="auto" playsInline poster="/assets/images/banner2.jpg">
          <source src="/assets/images/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video width={400} height={400} className="object-contain w-[200px] rounded-2xl shadow-2xl" muted preload="auto" playsInline poster="/assets/images/banner1.jpg">
          <source src="/assets/images/video3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <Image 
          src="/assets/images/banner1.jpg"
          alt="Vercel Logo"
          width={500}
          height={500}
          className="object-contain w-1/3 rounded-2xl shadow-2xl"
        /> */}
        {/* <Image 
          src="/assets/images/banner2.jpg"
          alt="Vercel Logo"
          width={500}
          height={500}
          className="object-contain w-1/3 rounded-2xl shadow-2xl"
        />
        <Image 
          src="/assets/images/banner2.jpg"
          alt="Vercel Logo"
          width={500}
          height={500}
          className="object-contain w-1/3 rounded-2xl shadow-2xl"
        /> */}
      </div>
      </div>
      </Container>
    </div>
  );
};

export default Hero;
