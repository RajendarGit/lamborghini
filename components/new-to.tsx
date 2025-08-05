import Image from "next/image"
import Container from "./container"
import SectionTtitle from "./section-title"

const NewTo = () => {
  return (
    <div className="bg-gray-900">
      <Container className="py-20">
        <h2 className="text-6xl text-gray-500 mb-4 text-center">
              New to <span className="text-gray-50">Lamborghini?</span>{" "}
              <br /><span className="text-gray-50">We&apos;ve got you.</span>
            </h2>
            <p className="mb-8 text-gray-400 text-center">
              Lorem ipsum dolor sit, amet consectetur.
            </p>
            <div className="flex flex-row gap-5">
<Image src="/assets/images/banner1.jpg" alt="Banner 1" width={700} height={400} className="rounded-lg object-cover flex-1 h-200" />
<div className="relative">
<Image src="/assets/images/banner2.jpg" alt="Banner 1" width={700} height={400} className="rounded-lg object-cover flex-1/2 h-200" />
<div>sfgsg</div>
</div>
            </div>
        </Container>
        </div>
  )
}

export default NewTo