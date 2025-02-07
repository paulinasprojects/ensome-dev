import "@/styles/main-hero.scss"
import heroOne from '/hero-one.png';
import heroTwo from '/hero-two.png';

const MainHero = () => {
  return (
    <div className="main-hero-main-container">
      <div className="main-hero-content-container">
        {/* Top */}
        <div className="main-hero-top-container">
          <div className="main-hero-top-content-container">
            <h3 className="main-hero-top-title">The newest business <br /> analytics platform</h3>
            <hr className="main-hero-top-hr" />
            <p className="main-hero-top-description">Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudantium, totam <br /> rem aperiam, eaque ipsa quae ab illo inventore veritatis et <br /> quasi architecto beatae vitae dicta sunt explicabo.</p>
            <button className="main-hero-top-button">Learn more</button>
          </div>
          <div>
            <img src={heroOne} alt="" className="main-hero-top-image" />
          </div>
        </div>
        {/* Bottom */}
        <div className="main-hero-bottom-container">
          <div className="main-hero-bottom-image-container">
            <img src={heroTwo} alt="" className="main-hero-bottom-image" />
          </div>
          <div className="main-hero-bottom-content-container">
            <h3 className="main-hero-bottom-title">Radically new solutions <br /> for data</h3>
            <hr className="main-hero-bottom-hr" />
            <p className="main-hero-bottom-description">Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudantium, totam <br /> rem aperiam, eaque ipsa quae ab illo inventore veritatis et <br /> quasi architecto beatae vitae dicta sunt explicabo.</p>
            <button className="main-hero-bottom-button">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHero