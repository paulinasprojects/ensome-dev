import { careersAccordionData } from "@/lib/data"
import FaqAccordion from "./faq-accordion"

const CareersAccordion = () => {
  return (
    <div className="general-faq-main-container">
      {careersAccordionData.map((data) => (
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

export default CareersAccordion