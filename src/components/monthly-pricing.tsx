import { MonthlyPricingData } from "@/lib/data";
import { IoIosCheckmark } from "react-icons/io";

import '@/styles/monthly-pricing.scss';

const MonthlyPricing = () => {
  return (
    <div className="pricing-card-container">
      {MonthlyPricingData.map((pricing) => (
      <div className="monthly-pricing-card-container" key={pricing.id}>
        <div className="monthly-pricing-card-content-container">
          <span className="monthly-pricing-card-tier">{pricing.tier}</span>
          <span className="monthly-pricing-card-price">${pricing.price}
            <span className="monthly-pricing-card-price-desc">{pricing.perUser}</span>
          </span>
          <span className="monthly-pricing-card-price-users">{pricing.users}</span>
        </div>
        <div className="monthly-pricing-items-content-container">
          <button className="monthly-pricing-button">Get started</button>
          {pricing.items.map((item) => (
            <li className="monthly-pricing-item" key={item}>
              <IoIosCheckmark className="montly-pricing-check-icon" />
              {item}
            </li>
          ))}
        </div>
      </div>
      ))}
    </div>
  )
}

export default MonthlyPricing