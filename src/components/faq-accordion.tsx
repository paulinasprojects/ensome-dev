import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { FaChevronDown, FaChevronUp  } from "react-icons/fa";
import "@/styles/faq-accordion.scss";

interface Props {
  accordionTitle: string;
  accordionContent: string;
  defaultOpen?: boolean;
};


const FaqAccordion = ({ accordionContent, accordionTitle, defaultOpen }: Props) => {
  return (
    <div className='faq-accordion-main-container'>
      <Disclosure as="div" className="faq-accordion-container" defaultOpen={defaultOpen}>
        {({open}) => (
          <>
            <DisclosureButton className="faq-accordion-button">
              <span>{accordionTitle}</span>
              {open ? (
                <FaChevronUp className='faq-accordion-chevron'/>
              ): (
              <FaChevronDown className='faq-accordion-chevron'/>
              )}
            </DisclosureButton>
            <DisclosurePanel className="faq-accordion-content">
              {accordionContent}
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default FaqAccordion;