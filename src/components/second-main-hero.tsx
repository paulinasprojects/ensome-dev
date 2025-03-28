import { motion } from "framer-motion";
import { MainHeroTitle, MainHeroDescription, MainHeroButton, MainHeroImage } from "./ui/main-hero-card";
import "@/styles/second-main-hero.scss";

const SecondMainHero = () => {
  return (
    <div className="second-main-hero-container">
      <div className="second-main-hero-content-container">
        {/* Top */}
        <motion.div 
          className="second-main-hero-top-container"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} 
        >
          <div className="second-main-hero-top-content-container">
            <MainHeroTitle className="second-main-hero-top-title">The newest business <br /> analytics platform</MainHeroTitle>
            <MainHeroDescription className="second-main-hero-top-description">Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudantium, totam <br /> rem aperiam, eaque ipsa quae ab illo inventore veritatis et <br /> quasi architecto beatae vitae dicta sunt explicabo.</MainHeroDescription>
            <MainHeroButton className="second-main-hero-top-button">Learn more</MainHeroButton>
          </div>
          <div>
            <MainHeroImage
              src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1739175781/002_illustration_oc3mo3.png"
              className="second-main-hero-top-image"
            />
          </div>
        </motion.div>
        {/* Bottom */}
        <motion.div 
          className="second-main-hero-bottom-container"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 2.0, ease: "easeIn" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} 
        >
          <div className="second-hero-bottom-image-container">
            <MainHeroImage
              src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1739175807/003_llustration_s2ryjm.png"
              className="second-main-hero-bottom-image"
            />
          </div>
          <div>
            <MainHeroTitle className="second-main-hero-bottom-title">Radically new solutions <br /> for data</MainHeroTitle>
            <MainHeroDescription className="second-main-hero-bottom-description">Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudantium, totam <br /> rem aperiam, eaque ipsa quae ab illo inventore veritatis et <br /> quasi architecto beatae vitae dicta sunt explicabo.</MainHeroDescription>
            <MainHeroButton className="second-main-hero-bottom-button">Learn more</MainHeroButton>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SecondMainHero