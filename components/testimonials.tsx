import Container from "./container"
import SectionTtitle from "./section-title"
import TestimonialGrid from "./testimonial-grid"

const Testimonials = () => {
  return (
    <>
      <Container className="py-20">
        <SectionTtitle title="Testimonials" />
        <h2 className="text-6xl text-gray-500 mb-4 lg:w-1/2">
          Trusted by adventures <span className="text-gray-800">families, and creators.</span>
        </h2>
        <p className="mb-10 text-gray-400 lg:mb-20">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
          iste.
        </p>
        <TestimonialGrid />
      </Container>
    </>
  )
}

export default Testimonials