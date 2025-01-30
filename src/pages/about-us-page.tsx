import AboutEnsome from "@/components/about-ensome"
import Cta from "@/components/cta"
import EnsomeAchievements from "@/components/ensome-achievements"
import EnsomeHistory from "@/components/ensome-history"
import Newsletter from "@/components/newsletter"
import TopHeroWithBreadcrumb from "@/components/top-hero-with-breadcrumb"

const AboutUsPage = () => {
  return (
    <div>
      <TopHeroWithBreadcrumb
        breadcrumbHref="/about-us"
        breadcrumbTitle="About Us"
        topHeroTitle="About our company"
        topHeroDescription="Here you can find more about our company and what we offer."
      />
      <AboutEnsome/>
      <EnsomeHistory/>
      <EnsomeAchievements/>
      <Cta/>
      <Newsletter/>
    </div>
  )
}

export default AboutUsPage