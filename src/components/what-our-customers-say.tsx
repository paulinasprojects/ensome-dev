import "@/styles/what-our-customers-say.scss";
import TestimonialCarousel from "./testimonial-carousel";


const WhatOurCustomersSay = () => {
  return (
    <div className="what-our-customers-say-main-container">
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
    </div>
  )
}

export default WhatOurCustomersSay