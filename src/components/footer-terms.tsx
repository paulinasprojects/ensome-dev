import "@/styles/footer-terms.scss";
import { Link } from "react-router-dom";

const FooterTerms = () => {
  return (
    <div className="footer-terms-main-container">
      <hr className="footer-terms-hr"/>
      <div className="footer-terms-content-container">
          <span>Ensome© 2025 All Rights Reserved</span>
        <div className="footer-terms-links">
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of use</Link>
        </div>
      </div>
    </div>
  )
}

export default FooterTerms