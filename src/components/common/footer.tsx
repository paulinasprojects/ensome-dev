import "@/styles/footer.scss"
import FooterLinks from "../footer-links"
import FooterSocials from "../footer-socials"
import FooterTerms from "../footer-terms"

const Footer = () => {
  return (
    <footer className="footer-main-container">
      <div className="footer-flex-container">
        {/* Left */}
        <FooterSocials/>
        {/* right */}
        <FooterLinks/>
      </div>
      <FooterTerms/>
    </footer>
  )
}

export default Footer