import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/constants";
import { gladWereHereData } from "@/lib/data";
import "@/styles/glad-were-here.scss";

const GladWereHere = () => {
  return (
    <motion.div 
      className="glad-were-here-main-container"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.3}}
      variants={containerVariants}
    >
      <h3 className="glad-were-here-title">Glad we're here to help you succeed</h3>
      <div className="glad-were-here-content-container">
        {gladWereHereData.map((data) => (
          <motion.div key={data.date} className="glad-were-here-content" variants={itemVariants}>
            <span>{data.date}</span>
            <h4>{data.title}</h4>
            <p>{data.content}</p>
            <div className="glad-were-here-extras">
              {data.extras.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="glad-were-here-button-container">
        <button className="glad-were-here-button">Learn more</button>
      </div>
    </motion.div>
  )
}

export default GladWereHere