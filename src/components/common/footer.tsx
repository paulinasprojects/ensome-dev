import { motion } from "framer-motion"
import "@/styles/footer.scss"
import FooterLinks from "../footer-links"
import FooterSocials from "../footer-socials"
import FooterTerms from "../footer-terms"

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      whileInView={{ opacity: 1, y:  0}}
      viewport={{ once: true }} 
      className="footer-main-container"
    >
      <div className="footer-flex-container">
        {/* Left */}
        <FooterSocials/>
        {/* right */}
        <FooterLinks/>
      </div>
      <FooterTerms/>
    </motion.footer>
  )
}

export default Footer