"use client";

import { Box, Button } from "@radix-ui/themes";
import Link from "next/link";
import GetQuote from "./get-quote";
import { Cross2Icon } from "@radix-ui/react-icons";
import { FC } from "react";

type MenuProps = {
  menuCloseOnClick?: () => void;
};

const Menu: FC<MenuProps> = ({ menuCloseOnClick }) => {
  return (
    <Box className="relative">
      {/* Header with Close Button */}
      <div className="md:hidden flex justify-between items-center mb-8 border-b-2 border-gray-200 pb-4">
        <p className="text-gray-700 text-4xl">Menu</p>
        <Button onClick={menuCloseOnClick} variant="ghost" size="4">
          <Cross2Icon className="w-6 h-6 text-gray-400" />
        </Button>
      </div>

      {/* Navigation Links */}
      <nav className="text-gray-500 md:text-white tracking-widest flex flex-col md:flex-row md:items-center gap-6 text-2xl md:text-[1rem]">
        <Link href="#">Models</Link>
        <Link href="#">Custom Solution</Link>
        <Link href="#">Ownership</Link>
        <Link href="#">Motorsport</Link>
        <GetQuote />
      </nav>
    </Box>
  );
};

export default Menu;
