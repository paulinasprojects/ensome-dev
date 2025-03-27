import { motion } from "framer-motion"
import "@/styles/top-hero.scss";
import { IoPlayCircleOutline } from "react-icons/io5";



const TopHero = () => {
  return (
    <motion.div 
      className="top-hero-main-container"
      initial={{ opacity: 0, y: 21 }}
      transition={{ duration: 0.5, ease: "circInOut" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div className="top-hero-content-container">
        <div>
          <h1 className="top-hero-content-title">Find true power in your <br /> data with Ensome</h1>
        </div>
        <div className="top-hero-content">
          <p className="top-hero-content-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque laudantium, totam rem aperiam, <br /> eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
          <div className="top-hero-button-container">
            <button className="top-hero-learn-more-button">Learn more</button>
            <button className="top-hero-watch-demo-button">
              <IoPlayCircleOutline className="top-hero-play-icon"/>
              Watch the demo
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default TopHero