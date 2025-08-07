import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12 lg:pt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
          <div>
            <div className="flex items-center mb-6 space-x-2">
              <div className="w-3 h-3 rounded-full bg-theme"></div>
              <span className="font-semibold text-lg">lamboghini</span>
            </div>
          </div>

          <div>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <button className="bg-white/10 text-white px-3 py-1.5 rounded-full">
                  Plans & Pricing
                </button>
              </li>
              <li><Link href="#">Products</Link></li>
              <li><Link href="#">Learn</Link></li>
              <li><Link href="#">SupportCompare Models</Link></li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3 text-sm text-white/80 mt-10 md:mt-0">
              <li><Link href="#">Company</Link></li>
              <li><Link href="#">Support</Link></li>
              <li><Link href="#">FAQ</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-5xl lg:text-6xl text-white">
            Power your life.
            <br />
            <span className="text-gray-400">Anywhere. Sustainably.</span>
          </h2>
          <button className="mt-6 bg-white text-black rounded-lg px-8 py-4 text-sm font-medium hover:bg-white/80">
            Shop Portable Kits
          </button>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/50 gap-4">
        <span className="text-white">Enter your location</span>
        <span>© 2025  | Designed by Rajendar</span>
        <div className="md:flex gap-6 hidden">
          <Link href="#" className="hover:text-white">
            State contractor
          </Link>
          <Link href="#" className="hover:text-white">
            Terms
          </Link>
          <Link href="#" className="hover:text-white">
            Privacy policy
          </Link>
          <Link href="#" className="hover:text-white lg:ml-20">
            Facebook
          </Link>
          <Link href="#" className="hover:text-white">
            X
          </Link>
          <Link href="#" className="hover:text-white">
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
