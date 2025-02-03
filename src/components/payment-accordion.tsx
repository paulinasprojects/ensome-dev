import { paymentAccordionData } from "@/lib/data";
import FaqAccordion from "./faq-accordion";

const PaymentAccordion = () => {
  return (
    <div className="general-faq-main-container">
      {paymentAccordionData.map((data) => (
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

export default PaymentAccordion