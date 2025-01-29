import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { OtherServicesData } from "@/lib/data";
import "@/styles/other-services.scss";

const OtherServices = () => {
  return (
    <div>
      <div className="other-services-input-container">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
        <div className="other-services-main-title-container">
          <span className="other-services-main-title">Services</span>
          <div className="other-services-link-container">
            {OtherServicesData.map((service) => (
              <Link to="/services/1" key={service.id} className="other-services-link">
                {service.name} <MdKeyboardArrowRight className="other-services-link-icon" />
              </Link>
            ))}
          </div>
        </div>
    </div>
  )
}

export default OtherServices