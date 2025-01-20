import "../styles/top-hero.scss";
import { IoPlayCircleOutline } from "react-icons/io5";


const TopHero = () => {
  return (
    <div className="top-hero-main-container">
      <div className="top-hero-content-container">
        <div>
          <p className="top-hero-content-title">Find true power in your <br /> data with Ensome</p>
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
      </div>
    </div>
  )
}

export default TopHero