import { Link } from "react-router-dom"

const SecondFooterLinks = () => {
  return (
    <div className="second-footer-links-main-container">
      <div className="second-footer-about-links">
        <span>About</span>
        <Link to="#">Home</Link>
        <Link to="#">About Us</Link>
        <Link to="#">Services</Link>
        <Link to="#">Solutions</Link>
      </div>
      <div className="second-footer-about-links">
        <span>Information</span>
        <Link to="#">Contacts</Link>
        <Link to="#">Our team</Link>
        <Link to="#">Blog</Link>
        <Link to="#">FAQ</Link>
      </div>
      <div className="second-footer-about-links">
        <span>Service</span>
        <Link to="#">Pages</Link>
        <Link to="#">Elements</Link>
        <Link to="#">Site map</Link>
        <Link to="#">Pricing</Link>
        <Link to="#">FAQ</Link>
      </div>
    </div>
  )
}

export default SecondFooterLinks