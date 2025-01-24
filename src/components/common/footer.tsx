import "@/styles/footer.scss"
import FooterLinks from "../footer-links"
import FooterSocials from "../footer-socials"

const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="footer-flex-container">
        {/* Left */}
        <FooterSocials/>
        {/* right */}
        <FooterLinks/>
      </div>
    </div>
  )
}

export default Footer