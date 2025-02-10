import "@/styles/second-top-hero.scss";
import { IoPlayCircleOutline } from "react-icons/io5";

const SecondTopHero = () => {
  return (
    <div className="second-top-hero-main-container">
      <div className="second-top-hero-main-content-container">
        <div className="second-top-hero-content">
          <h3>Find true power in your <br /> data with ensome</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudantium, totam <br /> rem aperiam, eaque ipsa quae ab illo inventore veritatis et <br /> quasi architecto beatae vitae dicta sunt explicabo.</p>
          <div className="second-top-hero-button-container">
            <button className="second-top-hero-learn-more-button">Learn more</button>
            <button className="second-top-hero-watch-demp-button">
              <IoPlayCircleOutline className="second-top-hero-play-icon"/>
              Watch the demo
            </button>
          </div>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1739175756/001_illustration_gtmoxo.png" alt=""  className="second-top-hero-image"/>
        </div>
      </div>
    </div>
  )
}

export default SecondTopHero