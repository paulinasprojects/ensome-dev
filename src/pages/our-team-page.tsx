import OurTeam from "@/components/our-team"
import TopHeroWithBreadcrumb from "@/components/top-hero-with-breadcrumb"

const OurTeamPage = () => {
  return (
    <div>
      <TopHeroWithBreadcrumb
        breadcrumbHref="/our-team"
        breadcrumbTitle="Our Team"
        topHeroDescription="Here you can see our team members"
        topHeroTitle="Our Team"
      />
      <OurTeam/>
    </div>
  )
}

export default OurTeamPage