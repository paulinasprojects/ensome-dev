import OurClients from "@/components/our-clients"
import SecondTopHero from "@/components/second-top-hero"

const HomeV1Page = () => {
  return (
    <div>
      <SecondTopHero/>
      <div className="">
        <OurClients isSecondHomePage/>
      </div>
    </div>
  )
}

export default HomeV1Page