import OurClients from "@/components/our-clients"
import SecondMainHero from "@/components/second-main-hero"
import SecondTopHero from "@/components/second-top-hero"
import WhyChooseUs from "@/components/why-choose-us"

const HomeV1Page = () => {
  return (
    <div>
      <SecondTopHero/>
        <OurClients isSecondHomePage/>
        <WhyChooseUs/>
        <SecondMainHero/>
    </div>
  )
}

export default HomeV1Page