import { pricingAccordionData } from "@/lib/data"
import FaqAccordion from "./faq-accordion"

const PricingAccordion = () => {
  return (
    <div className="general-faq-main-container">
      {pricingAccordionData.map((data) => (
        <FaqAccordion
          key={data.id}
          accordionTitle={data.title}
          accordionContent={data.content}
          defaultOpen={data.defaultOpen}
        />
      ))}
    </div>
  )
}

export default PricingAccordion