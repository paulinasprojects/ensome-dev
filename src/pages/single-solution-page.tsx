import Cta from "@/components/cta"
import Newsletter from "@/components/newsletter"
import SingleSolutionsContent from "@/components/single-solutions-content"
import TopHeroWithBreadcrumb from "@/components/top-hero-with-breadcrumb"

const SingleSolutionPage = () => {
  return (
    <div>
      <TopHeroWithBreadcrumb
        breadcrumbHref="/solutions/1"
        breadcrumbTitle="Data Visualization"
        topHeroDescription="Here is an example of Single Solution Content."
        topHeroTitle="Data Visualization"
      />
      <SingleSolutionsContent/>
      <Cta/>
      <Newsletter/>
    </div>
  )
}

export default SingleSolutionPage