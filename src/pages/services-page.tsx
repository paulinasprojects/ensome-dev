import Cta from "@/components/cta"
import EnsomeInNumber from "@/components/ensome-in-numbers"
import MainServices from "@/components/main-services"
import Newsletter from "@/components/newsletter"
import TopHeroWithBreadcrumb from "@/components/top-hero-with-breadcrumb"

const ServicesPage = () => {
  return (
    <div>
      <TopHeroWithBreadcrumb
        breadcrumbHref="/services"
        breadcrumbTitle="Services"
        topHeroTitle="Services"
        topHeroDescription="Here you can find more about what services we provide to our customers."
      />
      <MainServices/>
      <EnsomeInNumber/>
      <Cta isServicesPage className="service-background"/>
      <Newsletter/>
    </div>
  )
}

export default ServicesPage