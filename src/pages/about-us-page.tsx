import AboutEnsome from "@/components/about-ensome"
import AboutUsTopHero from "@/components/about-us-top-hero"
import Cta from "@/components/cta"
import EnsomeAchievements from "@/components/ensome-achievements"
import EnsomeHistory from "@/components/ensome-history"
import Newsletter from "@/components/newsletter"

const AboutUsPage = () => {
  return (
    <div>
      <AboutUsTopHero/>
      <AboutEnsome/>
      <EnsomeHistory/>
      <EnsomeAchievements/>
      <Cta/>
      <Newsletter/>
    </div>
  )
}

export default AboutUsPage