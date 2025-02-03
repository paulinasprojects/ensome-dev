import { useState } from "react";
import FaqTab from "./faq-tab";
import FaqContent from "./faq-content";
import GeneralAccordion from "./general-accordion";
import PricingAccordion from "./pricing-accordion";
import PaymentAccordion from "./payment-accordion";
import RefundAccordion from "./refund-accordion";
import CareersAccordion from "./careers-accordion";

import "@/styles/faq-tabs.scss";

const FaqTabs = () => {
  const [toggleTab, setToggleTab] = useState<number>(1);

  const getContent = () => {
    switch(toggleTab) {
      case 1: 
      return <GeneralAccordion/>
      case 2: 
      return <PricingAccordion/>;
      case 3: 
      return <PaymentAccordion/>;
      case 4: 
      return <RefundAccordion/>;
      case 5: 
      return <CareersAccordion/>;
      default: 
      return null;
    };
  };

  return (
    <div className="faq-tabs-main-container">
      <div className="faq-tabs-container">
        <FaqTab
          label="General"
          isActive={toggleTab === 1}
          onClick={() => setToggleTab(1)}
        />
        <FaqTab
          label="Pricing"
          isActive={toggleTab === 2}
          onClick={() => setToggleTab(2)}
        />
        <FaqTab
          label="Payment"
          isActive={toggleTab === 3}
          onClick={() => setToggleTab(3)}
        />
        <FaqTab
          label="Refund"
          isActive={toggleTab === 4}
          onClick={() => setToggleTab(4)}
        />
        <FaqTab
          label="Careers"
          isActive={toggleTab === 5}
          onClick={() => setToggleTab(5)}
        />
        </div>
        <div>
          <FaqContent content={getContent()}/>
        </div>
    </div>
  );
};

export default FaqTabs