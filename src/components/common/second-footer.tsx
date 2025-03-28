import { motion } from "framer-motion";
import logo from '/ensome-blue-logo.svg';
import SecondFooterLinks from "../second-footer-links";
import SecondFooterContactInfo from "../second-footer-contact-info";
import SecondFooterSocialLinks from "../second-footer-social-links";
import SecondFooterTerms from "../second-footer-terms";
import "@/styles/second-footer.scss";

const SecondFooter = () => {
  return (
    <footer className="second-footer-main-container"
    >
      <motion.div 
        className="second-footer-first-main-container"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} 
      >
        <img src={logo} alt="" />
        <div className="">
          <SecondFooterLinks/>
        </div>
      </motion.div>
      <hr className="second-footer-hr" />
      <motion.div 
        className="second-footer-second-main-container"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 2.0, ease: "easeIn" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} 
      >
        <SecondFooterContactInfo/>
        <SecondFooterSocialLinks/>
      </motion.div>
      <hr className="second-footer-second-hr" />
      <SecondFooterTerms/>
    </footer>
  )
}

export default SecondFooter