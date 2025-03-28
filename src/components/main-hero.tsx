import { motion } from "framer-motion"
import "@/styles/main-hero.scss"
import heroOne from '/hero-one.png';
import heroTwo from '/hero-two.png';
import { MainHeroTitle, MainHeroDescription, MainHeroButton, MainHeroImage } from "./ui/main-hero-card";


const MainHero = () => {
  return (
    <motion.div 
      className="main-hero-main-container"
    >
      <div className="main-hero-content-container">
        {/* Top */}
        <motion.div 
          className="main-hero-top-container"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "circInOut" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} 
        >
          <div className="main-hero-top-content-container">
            <MainHeroTitle className="main-hero-top-title">The newest business <br /> analytics platform</MainHeroTitle>
              <hr className="main-hero-top-hr" />
              <MainHeroDescription className="main-hero-top-description">Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudantium, totam <br /> rem aperiam, eaque ipsa quae ab illo inventore veritatis et <br /> quasi architecto beatae vitae dicta sunt explicabo.</MainHeroDescription>
              <MainHeroButton className="main-hero-top-button">Learn more</MainHeroButton>
          </div>
          <div>
            <MainHeroImage
              src={heroOne}
              className="main-hero-top-image"
            />
          </div>
        </motion.div>
        {/* Bottom */}
        <motion.div className="main-hero-bottom-container"  
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 2.2, ease: "circInOut" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} 
        >
          <div className="main-hero-bottom-image-container">
            <MainHeroImage
              src={heroTwo}
              className="main-hero-bottom-image"
            />
          </div>
          <div className="main-hero-bottom-content-container">
            <MainHeroTitle className="main-hero-bottom-title">Radically new solutions <br /> for data</MainHeroTitle>
            <hr className="main-hero-bottom-hr" />
            <MainHeroDescription className="main-hero-bottom-description">Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudantium, totam <br /> rem aperiam, eaque ipsa quae ab illo inventore veritatis et <br /> quasi architecto beatae vitae dicta sunt explicabo.</MainHeroDescription>
            <MainHeroButton className="main-hero-bottom-button">Learn more</MainHeroButton>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default MainHero