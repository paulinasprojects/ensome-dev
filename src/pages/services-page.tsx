import Cta from "@/components/cta"
import EnsomeInNumber from "@/components/ensome-in-numbers"
import MainServices from "@/components/main-services"
import Newsletter from "@/components/newsletter"
import ServicesTopHero from "@/components/services-top-hero"

const ServicesPage = () => {
  return (
    <div>
      <ServicesTopHero/>
      <MainServices/>
      <EnsomeInNumber/>
      <Cta isServicesPage className="service-background"/>
      <Newsletter/>
    </div>
  )
}

export default ServicesPage