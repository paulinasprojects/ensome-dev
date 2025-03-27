import { motion } from "framer-motion";
import { IoIosCheckmark } from "react-icons/io";
import "@/styles/single-service-content.scss";


const SingleServiceContent = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 70 }}
    transition={{ duration: 0.5, ease: "easeIn" }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }} 
    >
      <div className="single-service-content-main-container">
        <div className="single-service-content-customer-container">
          <span>Customer</span>
          <p>Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat <br /> felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, <br /> consequat et dolor vel.</p>
          <img src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1737986775/single-service_gppjmn.png" alt="" />
        </div>
        <div className="single-service-content-customer-container">
          <span>Challenge</span>
          <p>Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat <br /> felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, <br /> consequat et dolor vel. Morbi urna massa, imperdiet in mauris et, euismod vestibulum <br /> lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci.</p>
        </div>
        <div className="single-service-content-solution-container">
          <span>Solution</span>
          <p>Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat <br /> felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, <br /> consequat et dolor vel.</p>
          <div className="single-service-solutions-image-content-container">
            <img src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1737986826/single-service-2_tamqnw.png" alt="" />
            <div className="single-service-solutions-content">
              <span>
                <IoIosCheckmark className="single-service-solution-icon"/>
                Hid mobile access 
              </span>
              <span>
                <IoIosCheckmark className="single-service-solution-icon"/>
                Location services
              </span>
              <span>
                <IoIosCheckmark className="single-service-solution-icon"/>
                Visitor management
              </span>
              <span>
                <IoIosCheckmark className="single-service-solution-icon"/>
                Cybersecurity coordination
              </span>
            </div>
          </div>
        </div>
        <div className="single-service-content-customer-container">
          <span>Results</span>
          <p>Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat <br /> felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, <br /> consequat et dolor vel. Morbi urna massa, imperdiet in mauris et, euismod vestibulum <br /> lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci.</p>
        </div>
        <div className="single-service-content-customer-container">
          <span>Technologies</span>
          <p>Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat <br /> felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, <br /> consequat et dolor vel.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default SingleServiceContent