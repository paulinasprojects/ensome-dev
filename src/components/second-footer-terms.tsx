import { motion } from "framer-motion";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const SecondFooterTerms = () => {
  return (
    <motion.div 
      className="second-footer-terms-main-container"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 2.0, ease: "easeIn" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} 
    >
      <div className="second-footer-terms-main-content-container">
        <div className="second-footer-terms-container">
          <Link to="#" className="second-footer-terms-link">Privacy policy <MdArrowRightAlt className="second-footer-terms-icon"/></Link>
          <Link to="#" className="second-footer-terms-link">Terms of use <MdArrowRightAlt className="second-footer-terms-icon"/></Link>
        </div>
          <p className="second-footer-copyright">© 2025 Ensome. All Rights Reserved.</p>
      </div>
    </motion.div>
  )
}

export default SecondFooterTerms