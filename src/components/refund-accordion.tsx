import { refundAccordionData } from "@/lib/data"
import FaqAccordion from "./faq-accordion"

const RefundAccordion = () => {
  return (
    <div className="general-faq-main-container">
      {refundAccordionData.map((data) => (
        <FaqAccordion
          key={data.id}
          accordionTitle={data.title}
          accordionContent={data.content}
          defaultOpen={data.defaultOpen}
        />
      ))}
    </div>
  );
};

export default RefundAccordion