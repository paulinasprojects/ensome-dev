import Cta from "@/components/cta"
import EnsomeBenefits from "@/components/ensome-benefits"
import EnsomeInNumber from "@/components/ensome-in-numbers"
import MainHero from "@/components/main-hero"
import OurClients from "@/components/our-clients"
import OurPricing from "@/components/our-pricing"
import TopHero from "@/components/top-hero"
import WhatOurCustomersSay from "@/components/what-our-customers-say"

const HomePage = () => {
  return (
    <>
      <TopHero/>
      <MainHero/>
      <EnsomeInNumber/>
      <EnsomeBenefits/>
      <WhatOurCustomersSay/>
      <OurPricing/>
      <OurClients/>
      <Cta/>
    </>
  )
}

export default HomePage