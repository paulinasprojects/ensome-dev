import "@/styles/our-solutions.scss";
import ProvidingYears from "./providing-years";
import SolutionsCards from "./solutions-cards";
import EnsomeInNumber from "./ensome-in-numbers";
import WhatOurCustomersSay from "./what-our-customers-say";

const OurSolutions = () => {
  return (
    <div className="our-solutions-main-container">
      <ProvidingYears/>
      <SolutionsCards/>
      <EnsomeInNumber/>
      <WhatOurCustomersSay/>
    </div>
  )
}

export default OurSolutions