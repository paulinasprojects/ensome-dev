import { motion } from "framer-motion"
import "@/styles/providing-years.scss";
import { useNavigate } from "react-router-dom";

const ProvidingYears = () => {
  const navigate = useNavigate();

  const scrollToPricing = () => {
    navigate("/")
    setTimeout(() => {
      const section = document.getElementById("pricing-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },500)
  }

  return (
    <motion.div 
      className="providing-years-main-container"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} 
    >
      <div className="providing-years-content-container">
          <div className="providing-years-main-container-container">
            <span className="providing-years-number">15 <span className="providing-years-text">years <br /> experience <br /> in data</span></span>
            <p className="providing-years-descr">Years of providing <br /> quality on the market</p>
          </div>
        <div>
          <div className="providing-years-technology-container">
            <span>Technology doesn't just help businesses</span>
            <p>Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula.</p>
            <div className="providing-years-main-button-container">
              <button className="providing-years-see-pricing-button" onClick={scrollToPricing}>See pricing</button>
              <button className="providing-years-contact-us-button" onClick={() => navigate("/contact-us")}>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProvidingYears