import { generalAccordionData } from "@/lib/data";
import FaqAccordion from "./faq-accordion";

const GeneralAccordion = () => {
  return (
    <div className="general-faq-main-container">
      {generalAccordionData.map((data) => (
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

export default GeneralAccordion