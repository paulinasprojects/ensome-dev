import FaqTabs from "@/components/faq-tabs"
import TopHeroWithBreadcrumb from "@/components/top-hero-with-breadcrumb"

const FaqPage = () => {
  return (
    <div>
      <TopHeroWithBreadcrumb
        breadcrumbHref="/faq"
        breadcrumbTitle="FAQs"
        topHeroTitle="FAQs"
        topHeroDescription="Here you can find the answers to the most frequently asked questions"
      />
      <FaqTabs/>
    </div>
  )
}

export default FaqPage