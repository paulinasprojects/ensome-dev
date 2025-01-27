import { MdOutlineArrowRightAlt } from "react-icons/md";
import { servicesData } from "@/lib/data";
import IconComponent from "./icon";
import "@/styles/main-services.scss";
import { useNavigate } from "react-router-dom";

const MainServices = () => {
  const navigate = useNavigate()

  return (
    <div className="main-services-content-container">
      {servicesData.map((data) => (
        <div key={data.id} className="main-services-main-content-container">
          <div className="main-services-content">
            <IconComponent icon={data.icon}/>
            <span className="main-services-content-title">{data.title}</span>
            <span className="main-services-content-description">{data.description}</span>
            <button onClick={() => navigate("/services/1")} className="main-services-content-button">Read more <MdOutlineArrowRightAlt className="main-services-icon"/></button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MainServices