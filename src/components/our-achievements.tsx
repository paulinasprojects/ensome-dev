import { ourAchievementsData } from "@/lib/data";
import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "@/lib/constants";
import TitleHeading from "./title-heading";
import "@/styles/ensome-achievements.scss";

const OurAchievements = () => {
  return (
    <motion.div       
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.4}}
      variants={containerVariants}>
      <TitleHeading
        title="Our achievements"
      />
      <div className="our-achievemenets-content-container">
        {ourAchievementsData.map((data) => (
          <motion.div className="our-achievements-content" key={data.id}  variants={itemVariants}>
            <span>{data.number}</span>
            <p>{data.title}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default OurAchievements