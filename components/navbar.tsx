import { Box, Button, Flex } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <Flex
      asChild
      align="center"
      justify="between"
      className="absolute top-5 left-5 right-5 z-10 bg-black/30 backdrop-blur-md p-5 rounded-2xl"
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

        <Flex align="center" gap="6" asChild>
          <Box>
            <nav className="text-white tracking-widest flex gap-4 text-md">
              <Link href="#">Models</Link>
              <Link href="#">Custom solution</Link>
              <Link href="#">Ownership</Link>
              <Link href="#">Motorsport</Link>
            </nav>
            <Button size="3" color="gray" highContrast>
              Get a quote
            </Button>
          </Box>
        </Flex>
      </header>
    </Flex>
  );
};

export default Navbar;
