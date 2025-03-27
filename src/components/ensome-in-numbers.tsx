import { motion } from "framer-motion"
import "@/styles/ensone-in-numbers.scss";

const EnsomeInNumber = () => {
  return (
    <motion.div 
      className="ensone-in-numbers-main-container"
      initial={{ opacity: 0, y: 120 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} 
    >
      <div className="ensome-main-content-container">
        <div>
          <h3 className="ensome-content-title">Ensome in numbers</h3>
          <hr className="ensome-in-numbers-hr" />
          <div className="ensome-main-content-numbers-container">
            <div className="ensome-main-content-numbers">
              <span className="ensome-main-content-title">Data analytics perfomed by <br /> Ensome</span>
              <span className="ensome-main-content-number">220</span>
            </div>
            <div className="ensome-main-content-numbers">
              <span className="ensome-main-content-title">Data management perfomed by <br /> Ensome</span>
              <span className="ensome-main-content-number">390</span>
            </div>
            <div className="ensome-main-content-numbers">
              <span className="ensome-main-content-title">Customers satisfied with <br /> Ensome's work</span>
              <span className="ensome-main-content-number">834+</span>
            </div>
            <div className="ensome-main-content-numbers">
              <span className="ensome-main-content-title">Projects implemented by <br /> Ensome</span>
              <span className="ensome-main-content-number">1830+</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default EnsomeInNumber