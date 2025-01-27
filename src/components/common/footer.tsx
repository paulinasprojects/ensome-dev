import "@/styles/footer.scss"
import FooterLinks from "../footer-links"
import FooterSocials from "../footer-socials"
import FooterTerms from "../footer-terms"

const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="footer-flex-container">
        {/* Left */}
        <FooterSocials/>
        {/* right */}
        <FooterLinks/>
      </div>
      <FooterTerms/>
    </div>
  )
}

export default Footer