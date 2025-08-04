import { DotFilledIcon } from "@radix-ui/react-icons"

const SectionTtitle = ({title}: {title: string}) => {
  return (
    <h2 className="flex items-center text-lg text-gray-700 font-semibold mb-8 pb-8 border-b border-gray-200"><DotFilledIcon className="text-theme w-10 h-10" />{title}</h2>
  )
}

export default SectionTtitle