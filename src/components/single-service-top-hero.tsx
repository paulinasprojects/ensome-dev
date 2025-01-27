import Breadcrumb from "./breadcrumb"
import "@/styles/single-service-top-hero.scss";

const SingleServiceTopHero = () => {
  return (
    <div className="single-service-top-hero-container">
      <Breadcrumb href="/services/1" title="Access Control"/>
      <div className="single-service-top-hero-title-container">
        <h1>Access Control</h1>
        <span>Sed ut perspiciatis unde omnis iste natus error volupta <br /> accusantium doloremque laudantium, totam remiga <br /> aperiam, eaque ipsa.</span>
      </div>
    </div>
  )
}

export default SingleServiceTopHero