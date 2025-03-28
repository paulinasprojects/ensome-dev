import { motion } from "framer-motion";
import ContactUsBreacrumb from "@/components/contact-us-breadcrumb";
import ContactUsForm from "@/components/contact-us-form";
import ContactUsInfo from "@/components/contact-us-info";
import "@/styles/contact-us.scss";

const ContactUsPage = () => {
  return (
    <>
    <div className='contact-us-main-container'>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        whileInView={{ opacity: 1, y: 20}}
        viewport={{ once: true }} 
        className="contact-us-content-container"
      >
       <div className="contact-us-title-container">
        <ContactUsBreacrumb/>
        <span className="contact-us-title">
          Contact Us
        </span>
       </div>
       <motion.div
        initial={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} 
      >
        <ContactUsForm/>
       </motion.div>
      </motion.div>
    </div>
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }} 
    >
      <ContactUsInfo/>
    </motion.div>
    </>
  )
}

export default ContactUsPage