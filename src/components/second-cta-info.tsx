import { motion } from "framer-motion";
const SecondCtaInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} 
    >
      <h3 className="second-cta-info-title">Left questions? Contacts us now for a free consultation and free trial!</h3>
      <p className="second-cta-info-desc">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
      <div className="second-cta-info-content">
        <div>
          <span>Email Address</span>
          <p>ensome@info.co.us</p>
        </div>
        <div>
          <span>Phone number</span>
          <p>+1601-201-5580</p>
        </div>
        <div>
          <span>Address</span>
          <p>1642 Washington Avenue, Jackson, MS, Mississippi, 39201</p>
        </div>
      </div>
    </motion.div>
  )
}

export default SecondCtaInfo