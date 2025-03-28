import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/constants";
import { servicesData } from "@/lib/data";
import "@/styles/why-choose-us.scss";
import IconComponent from "./icon";

const WhyChooseUs = () => {
  return (
    <motion.div 
      className="why-choose-us-main-container"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.8}}
      variants={containerVariants}
    >
      <div className="why-choose-us-title-container">
        <h3>Why our clients choose Ensome</h3>
        <p>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore <br /> veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      </div>
      <div className="why-choose-us-content-container">
        {servicesData.slice(0, 3).map((data) => (
          <motion.div key={data.id} className="why-choose-us-advantages-content" variants={itemVariants}>
            <IconComponent icon={data.icon} className="why-choose-us-advantages-icon"/>
            <span>{data.title}</span>
            <p>{data.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default WhyChooseUs