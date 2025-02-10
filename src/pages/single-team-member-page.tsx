import Newsletter from "@/components/newsletter"
import SingleTeamMemberContent from "@/components/single-team-member-content"
import TopHeroWithBreadcrumb from "@/components/top-hero-with-breadcrumb"

const SingleTeamMemberPage = () => {
  return (
    <div>
      <TopHeroWithBreadcrumb
        breadcrumbHref="/our-team"
        breadcrumbTitle="Our Team"
        isTeamMemberPage
        secondHref="/our-team/member/1"
        teamMemberTitle="Bagrat Leo"
        topHeroTitle="Bagrat Leo"
        topHeroDescription="Here you can find more about Bagrat Leo"
      />
      <SingleTeamMemberContent/>
      <Newsletter/>
    </div>
  )
}

export default SingleTeamMemberPage