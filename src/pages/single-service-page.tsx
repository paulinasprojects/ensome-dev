import SingleMainService from "@/components/single-main-service"
import TopHeroWithBreadcrumb from "@/components/top-hero-with-breadcrumb"

const SingleServiceDetailsPage = () => {
  return (
    <div>
      {/* <SingleServiceTopHero/> */}
      <TopHeroWithBreadcrumb
        breadcrumbHref="/services/1"
        breadcrumbTitle="Access Control"
        topHeroTitle="Access control"
        topHeroDescription="Here you can find more about the specific service that we provide"
      />
      <SingleMainService/>
    </div>
  )
}

export default SingleServiceDetailsPage