"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@radix-ui/themes";
import Container from "./container";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import classNames from "classnames";
import { Cross2Icon, PlayIcon } from "@radix-ui/react-icons";

const contents = [
  {
    title: "Huracán Sterrato",
    number: "1",
    description:
      "The Lamborghini Huracán Sterrato is a limited edition supercar designed for off-road performance, featuring a 5.2-liter V10 engine, all-wheel drive, and enhanced suspension.",
    video: "/assets/images/video1.mp4",
    poster: "/assets/images/banner1.jpg",
  },
  {
    title: "Super Sterrato",
    number: "2",
    description:
      "The Lamborghini Super Sterrato is a limited edition supercar designed for off-road performance, featuring a 5.2-liter V10 engine, all-wheel drive, and enhanced suspension.",
    video: "/assets/images/video2.mp4",
    poster: "/assets/images/banner2.jpg",
  },
  {
    title: "Master Sterrato",
    number: "3",
    description:
      "The Lamborghini Master Sterrato is a limited edition supercar designed for off-road performance, featuring a 5.2-liter V10 engine, all-wheel drive, and enhanced suspension.",
    video: "/assets/images/video3.mp4",
    poster: "/assets/images/banner3.jpg",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState("");

  // Fade transition between texts every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % contents.length);
        setFade(true);
      }, 500);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleThumbnailClick = (videoUrl: string) => {
    setModalVideo(videoUrl);
    setModalOpen(true);
  };

  return (
    <div className="relative w-full h-[700px]">
      <video
        src="/assets/images/video3.mp4"
        className="object-cover w-full absolute top-0 left-0 h-full"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <Container>
        <div className="relative z-10 pt-50">
          <p className="text-6xl lg:text-[3.5rem] bg-gradient-to-r from-gray-500 to-yellow-500 bg-clip-text text-transparent">
            Power Anywhere.
          </p>
          <p className="text-6xl lg:text-[3.5rem] text-white mb-8">
            Instantly.
          </p>
        </div>
        <div className="gap-10 justify-between items-end h-full relative z-10 hidden lg:flex">
          <div
            className="flex-1 transition-opacity duration-500"
            style={{ opacity: fade ? 1 : 0 }}
          >
            <div>
              <p className="text-4xl text-white mb-2">
                {contents[activeIndex].number}
              </p>
              <p className="text-2xl text-white mb-2">
                {contents[activeIndex].title}
              </p>
              <p className="text-lg text-gray-400 mb-4">
                {contents[activeIndex].description}
              </p>
            </div>
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

          {/* Thumbnails */}
          <div
            className="flex gap-4 items-center justify-center h-full"
            data-area="video-content"
          >
            {contents.map((item, index) => (
              <div
                key={index}
                className={classNames(
                  "cursor-pointer transition-all rounded-xl overflow-hidden relative",
                  activeIndex === index
                    ? "ring-4 ring-[#ffffff]/80 scale-105 shadow-2xl"
                    : "opacity-70 hover:opacity-100"
                )}
                onClick={() => handleThumbnailClick(item.video)}
              >
                <PlayIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-8 h-8 z-10" />
                <video
                  className="object-cover w-[200px] h-[120px]"
                  muted
                  playsInline
                  preload="auto"
                  poster={item.poster}
                >
                  <source src={item.video} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-black p-0 rounded-xl overflow-hidden max-w-5xl mx-auto w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
          <DialogClose asChild>
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-400 focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon className="w-6 h-6" />
            </button>
          </DialogClose>
          <VisuallyHidden>
            <DialogTitle>My Dialog Title</DialogTitle>
          </VisuallyHidden>
          {modalVideo && (
            <video
              src={modalVideo}
              className="w-full h-auto"
              autoPlay
              controls
              muted={false}
              playsInline
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Hero;
