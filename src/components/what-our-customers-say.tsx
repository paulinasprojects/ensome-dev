import { motion } from "framer-motion";
import "@/styles/what-our-customers-say.scss";
import TestimonialCarousel from "./testimonial-carousel";


const WhatOurCustomersSay = () => {
  return (
    <motion.div 
      className="what-our-customers-say-main-container" 
      initial={{ opacity: 0, y: 120 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{ once: true }} 
    >
      <div className="what-our-customers-say-main-content-container">
        <div className="what-our-customers-say-container">
          <div>
              <h3 className="customers-says-main-content-title">What our customers say</h3>
              <hr className="customers-says-hr" />
          </div>
        </div>
      </div>
      <div className="customer-says-testimonial-card">
        <TestimonialCarousel/>
      </div>
    </motion.div>
  )
}

export default WhatOurCustomersSay