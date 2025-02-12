import GladWereHere from "@/components/glad-were-here"
import OurClients from "@/components/our-clients"
import SecondMainHero from "@/components/second-main-hero"
import SecondTopHero from "@/components/second-top-hero"
import Testimonials from "@/components/testimonials"
import WhyChooseUs from "@/components/why-choose-us"

const HomeV1Page = () => {
  return (
    <div>
      <SecondTopHero/>
      <OurClients isSecondHomePage/>
      <WhyChooseUs/>
      <SecondMainHero/>
      <GladWereHere/>
      <Testimonials/>
    </div>
  )
}

export default HomeV1Page