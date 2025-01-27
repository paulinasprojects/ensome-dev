import { footerServiceLinks } from "@/lib/data"
import { Link } from "react-router-dom";


import "@/styles/footer-quick-links.scss";

const FooterServiceLinks = () => {
  return (
    <div>
      <span className="quick-link-title">Service</span>
        <div className="quick-links-container">
          {footerServiceLinks.map((link) => (
            <Link to={link.href} key={link.href} className="footer-quick-link">{link.tile}</Link>
          ))}
      </div>
    </div>
  )
}

export default FooterServiceLinks