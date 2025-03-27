import { AnimatePresence, motion } from 'framer-motion';
import { useMediaQuery } from 'usehooks-ts';
import { useState } from 'react';
import Tabs from './tabs';
import PricingContent from './pricing-content';
import MonthlyPricing from './monthly-pricing';
import YearlyPricing from './yearly-pricing';
import '@/styles/pricing-tabs.scss';
import { containerVariants, itemVariants } from '@/lib/constants';

const PricingTabs = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
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
    <AnimatePresence initial={isMobile ? false : true}>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.4}}
      variants={containerVariants}
    >
    <div className='pricing-tabs'>
      <motion.div  variants={itemVariants}>
        <h3 className='our-pricing-title'>Our pricing</h3>
        <hr className='our-pricing-hr' />
      </motion.div>
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
    <motion.div
      className='pricing-content'
        variants={itemVariants}
      >
      <PricingContent content={getContent()}/>
    </motion.div>
    </motion.div>
    </AnimatePresence>
  )
}

export default PricingTabs