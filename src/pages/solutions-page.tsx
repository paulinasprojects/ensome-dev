import OurSolutions from "@/components/our-solutions"
import TopHeroWithBreadcrumb from "@/components/top-hero-with-breadcrumb"

const SolutionsPage = () => {
  return (
    <div>
      <TopHeroWithBreadcrumb
        breadcrumbHref="/solutions"
        breadcrumbTitle="Solutions"
        topHeroDescription="Here you can find what kind of solutions we offer to our customers."
        topHeroTitle="Solutions"
      />
      <OurSolutions/>
    </div>
  )
}

export default SolutionsPage