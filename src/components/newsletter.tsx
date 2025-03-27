import { motion } from "framer-motion";
import classNames from "@/lib/utils";
import "@/styles/newsletter.scss";

interface Props {
  isSecondHomePage?: boolean;
}


const Newsletter = ({ isSecondHomePage }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} 
      className={classNames(isSecondHomePage ? 
        "second-newsletter-main-container":
        "newsletter-main-container"
        )}
      >
      <div className="newsletter-content-container">
        <div className="newsletter-title-container">
          <h3 className="newsletter-title">Subscribe to our newsletter</h3>
          <span className="newsletter-description">Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudantium.</span>
        </div>
        <div className="">
          <input type="text" className="newsletter-input" placeholder="Your email" />
          <button className="newsletter-send-button">Send</button>
        </div>
      </div>
    </motion.div>
  )
}

export default Newsletter