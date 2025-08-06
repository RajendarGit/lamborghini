"use client";
import { cn } from "@/lib/utils";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Menu from "./menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Flex
      asChild
      align="center"
      justify="between"
      className={cn(
        "absolute top-5 left-5 right-5 z-20 bg-black/10 backdrop-blur-md p-5 rounded-2xl",
        scrolled && "fixed"
      )}
    >
      <header>
        <Flex align="center" gap="2">
          <Link href="/">
            <Image
              src="/assets/images/logo.png"
              alt="Vercel Logo"
              width={40}
              height={40}
            />
          </Link>
        </Flex>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="3"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <DotsVerticalIcon className="w-6 h-6 text-gray-400" />
          </Button>
        </div>

        <div className="hidden md:block">
          <Flex align="center" gap="6" asChild>
            <Menu />
          </Flex>
        </div>

        {menuOpen && (
          <div className="bg-white p-10 w-full h-auto absolute top-0 left-0 z-30 rounded-2xl shadow-2xl">
            <Menu menuCloseOnClick={() => setMenuOpen(false)} />
          </div>
        )}
      </header>
    </Flex>
  );
};

export default Navbar;
