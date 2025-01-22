import { TestimonialsData } from "@/lib/data";
import "@/styles/what-our-customers-say.scss";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import TestimonialCard from "./testimonial-card";


const WhatOurCustomersSay = () => {
  return (
    <div className="what-our-customers-say-main-container">
      <div className="what-our-customers-say-main-content-container">
        <div className="what-our-customers-say-container">
          <div>
              <p className="customers-says-main-content-title">What our customers say</p>
              <hr className="customers-says-hr" />
          </div>
          <div className="customers-say-button-container">
            <button className="customers-say-button">
              <HiArrowLongLeft className="customers-says-arrow-icon"/>
            </button>
            <button className="customers-say-button">
              <HiArrowLongRight className="customers-says-arrow-icon"/>
            </button>
          </div>
        </div>
      </div>
      {/* Testimonial Data Here */}
      <div className="customer-says-testimonial-card">
        {TestimonialsData.map((data) => (
          <TestimonialCard
            key={data.id}
            image={data.image}
            name={data.name}
            position={data.position}
          />
        ))}
      </div>
    </div>
  )
}

export default WhatOurCustomersSay