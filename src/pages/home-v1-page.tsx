import GladWereHere from "@/components/glad-were-here"
import Newsletter from "@/components/newsletter"
import OurAchievementsSecond from "@/components/our-achievements-second"
import OurClients from "@/components/our-clients"
import SecondCTA from "@/components/second-cta"
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
      <OurAchievementsSecond/>
      <SecondCTA/>
      <Newsletter isSecondHomePage/>
    </div>
  )
}

export default HomeV1Page