import { motion} from "framer-motion"
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { servicesData } from "@/lib/data";
import IconComponent from "./icon";
import "@/styles/main-services.scss";

const MainServices = () => {
  const navigate = useNavigate()

  return (
    <motion.div 
      className="main-services-content-container"
      initial={{ opacity: 0, y: 70 }}
      transition={{ duration: 0.5, ease: "circInOut" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} 
    >
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
    </motion.div>
  )
}

export default MainServices