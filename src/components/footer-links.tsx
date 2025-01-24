import "@/styles/footer-links.scss";
import FooterQuickLinks from "./footer-quick-links";
import FooterServiceLinks from "./footer-service-links";
import FooterContactInfo from "./footer-contact-info";

const FooterLinks = () => {
  return (
    <div className="footer-links-container">
      <FooterQuickLinks/>
      <FooterServiceLinks/>
      <FooterContactInfo/>
    </div>
  )
}

export default FooterLinks