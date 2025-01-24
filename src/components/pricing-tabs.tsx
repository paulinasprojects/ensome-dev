import { useState } from 'react';
import Tabs from './tabs';
import PricingContent from './pricing-content';
import '@/styles/pricing-tabs.scss';
import MonthlyPricing from './monthly-pricing';
import YearlyPricing from './yearly-pricing';

const PricingTabs = () => {
  const [toggleTab, setToggleTab] = useState<number>(1);

  const getContent = () => {
    switch (toggleTab) {
      case 1: 
      return <MonthlyPricing/>;
      case 2: 
      return <YearlyPricing/>;
      default:
        return null;
    }
  };

  return (
    <>
    <div className='pricing-tabs'>
      <div className="">
        <span className='our-pricing-title'>Our pricing</span>
        <hr className='our-pricing-hr' />
      </div>
      <div className='pricing-tab-container'>
      <Tabs
        label='Monthly'
        isActive={toggleTab === 1}
        onClick={() => setToggleTab(1)}
      />
      <Tabs
        label='Yearly'
        isActive={toggleTab === 2}
        onClick={() => setToggleTab(2)}
      />
      </div>
    </div>
    <div className='pricing-content'>
      <PricingContent content={getContent()}/>
    </div>
    </>
  )
}

export default PricingTabs