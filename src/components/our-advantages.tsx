import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "@/lib/constants";
import { servicesData } from "@/lib/data"
import TitleHeading from "./title-heading"
import IconComponent from "./icon"

import "@/styles/our-advantages.scss";

const OurAdvantages = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.4}}
      variants={containerVariants}
    >
      <TitleHeading
        title="Our advantages"
      />
      <div className="our-advantages-content-container">
        {servicesData.slice(0, 3).map((data) => (
          <motion.div key={data.id} className="our-advantages-content"  variants={itemVariants}>
            <IconComponent icon={data.icon} className="our-advantages-icon"/>
            <span>{data.title}</span>
            <p>{data.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default OurAdvantages