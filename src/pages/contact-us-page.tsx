import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/constants";
import ContactUsBreacrumb from "@/components/contact-us-breadcrumb";
import ContactUsForm from "@/components/contact-us-form";
import ContactUsInfo from "@/components/contact-us-info";
import "@/styles/contact-us.scss";

const ContactUsPage = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.2}}
      variants={containerVariants}
    >
    <div className='contact-us-main-container'
    >
      <motion.div className="contact-us-content-container" variants={itemVariants}>
       <div className="contact-us-title-container">
        <ContactUsBreacrumb/>
        <span className="contact-us-title">
          Contact Us
        </span>
       </div>
       <div>
        <ContactUsForm/>
       </div>
      </motion.div>
    </div>
    <motion.div variants={itemVariants}>
      <ContactUsInfo/>
    </motion.div>
    </motion.div>
  )
}

export default ContactUsPage