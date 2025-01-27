import { Link } from "react-router-dom";
import { footerQuickLinks } from "@/lib/data";

import "@/styles/footer-quick-links.scss";

const FooterQuickLinks = () => {
  return (
    <div>
      <span className="quick-link-title">Quick links</span>
      {/* Links map */}
      <div className="quick-links-container">
        {footerQuickLinks.map((link) => (
          <Link to={link.href} key={link.href} className="footer-quick-link">{link.title}</Link>
        ))}
      </div>
    </div>
  )
}

export default FooterQuickLinks