import SingleSolutionTopHero from "@/components/single-solution-top-hero"
import SingleSolutionsContent from "@/components/single-solutions-content"
import TopHeroWithBreadcrumb from "@/components/top-hero-with-breadcrumb"

const SingleSolutionPage = () => {
  return (
    <div>
      {/* <SingleSolutionTopHero/> */}
      <TopHeroWithBreadcrumb
        breadcrumbHref="/solutions/1"
        breadcrumbTitle="Data Visualization"
        topHeroDescription="Here is an example of Single Solution Content."
        topHeroTitle="Data Visualization"
      />
      <SingleSolutionsContent/>
    </div>
  )
}

export default SingleSolutionPage