import { motion } from "framer-motion"
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoMdPin } from "react-icons/io";
import classNames from "@/lib/utils";
import CtaForm from "./cta-form";

import "@/styles/cta.scss";

interface CTAProps {
  className?: string | undefined;
  isServicesPage?: boolean;
}

const Cta = ({ className, isServicesPage }: CTAProps) => {
  return (
    <div
      className={classNames(isServicesPage ? className : "cta-main-container")}> 
      <div className="cta-content-container">
        <motion.div 
          className="cta-contact-us-container"
          initial={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
        >
          <div>
            <h3 className="cta-contact-us-title">Contact information</h3>
            <hr className="cta-hr" />
          </div>
          <div>
            <span className="cta-contact-us-descr">Fill up the form and our Team will get back <br /> to you with 25 hours.</span>
          </div>
          <div className="cta-contact-us-links">
            <span className="cta-contact-us-link">
              <IoMail className="cta-contact-us-icon"/>
              ensome@info.co.us
            </span>
            <span className="cta-contact-us-link">
              <FaPhone className="cta-contact-us-icon"/>
              +1 601-201-5580
            </span>
            <span className="cta-contact-us-link">
              <IoMdPin className="cta-contact-us-icon"/>
              1642 Washington Ave, Jackson, MS
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
        >
          <CtaForm/>
        </motion.div>
      </div>
    </div>
  )
}

export default Cta