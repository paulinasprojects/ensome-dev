import "@/styles/our-solutions.scss";
import ProvidingYears from "./providing-years";
import SolutionsCards from "./solutions-cards";
import EnsomeInNumber from "./ensome-in-numbers";
import WhatOurCustomersSay from "./what-our-customers-say";
import Cta from "./cta";
import Newsletter from "./newsletter";

const OurSolutions = () => {
  return (
    <div className="our-solutions-main-container">
      <ProvidingYears/>
      <SolutionsCards/>
      <EnsomeInNumber/>
      <WhatOurCustomersSay/>
      <Cta/>
      <Newsletter/>
    </div>
  )
}

export default OurSolutions