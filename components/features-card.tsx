import { ArrowRightIcon, DotIcon } from "@radix-ui/react-icons";
import { FC } from "react";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import Link from "next/link";

interface FeaturesCardProps {
  title?: string;
  description?: string;
  Icon?: FC<IconProps>;
}

const FeaturesCard: FC<FeaturesCardProps> = ({
  title,
  description,
  Icon = DotIcon,
}) => {
  return (
    <Link
      href="/"
      className="group border-2 border-gray-200 hover:border-theme rounded-2xl p-8 bg-white shadow-lg hover:shadow-2xl hover:shadow-amber-700 min-h-120 relative flex flex-row justify-around items-center w-1/2"
    >
      <div className="bg-gray-200 group-hover:bg-theme p-5 rounded-full absolute top-5 left-5">
        <Icon className="w-10 h-10" />
      </div>

      <div>
        <h3 className="text-2xl mb-4 text-gray-800">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
      </div>

      <div className="flex justify-between items-center border-t border-gray-400 pt-4 absolute bottom-5 right-8 left-8 text-gray-800">
        <p>More</p>
        <ArrowRightIcon className="w-6 h-6 text-black" />
      </div>
    </Link>
  );
};

export default FeaturesCard;
