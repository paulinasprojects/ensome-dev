import AboutEnsome from "@/components/about-ensome"
import AboutUsTopHero from "@/components/about-us-top-hero"
import EnsomeAchievements from "@/components/ensome-achievements"
import EnsomeHistory from "@/components/ensome-history"

const AboutUsPage = () => {
  return (
    <div>
      <AboutUsTopHero/>
      <AboutEnsome/>
      <EnsomeHistory/>
      <EnsomeAchievements/>
    </div>
  )
}

export default AboutUsPage