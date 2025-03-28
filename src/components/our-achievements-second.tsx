import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "@/lib/constants";
import { ourAchievementsData } from "@/lib/data";
import "@/styles/our-achievements-second.scss";


const OurAchievementsSecond = () => {
  return (
    <motion.div 
      className="our-achievements-second-main-container"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.4}}
      variants={containerVariants}
    >
      <div className="our-achievements-second-content-container">
        {ourAchievementsData.map((data) => (
          <motion.div className="our-achievements-second-content" key={data.id} variants={itemVariants}>
            <span>{data.number}</span>
            <p>{data.title}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default OurAchievementsSecond