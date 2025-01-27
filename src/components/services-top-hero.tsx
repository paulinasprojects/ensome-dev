import Breadcrumb from "./breadcrumb"
import "@/styles/services-top-hero.scss";

const ServicesTopHero = () => {
  return (
    <div className="services-top-hero-container">
      <Breadcrumb
        href="/services"
        title="Services"
      />
      <div className="services-top-hero-title-container">
        <h1>Services</h1>
        <span>Sed ut perspiciatis unde omnis iste natus error volupta <br /> accusantium doloremque laudantium, totam remiga <br /> aperiam, eaque ipsa.</span>
      </div>
    </div>
  )
}

export default ServicesTopHero