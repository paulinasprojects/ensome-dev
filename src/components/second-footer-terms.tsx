import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const SecondFooterTerms = () => {
  return (
    <div className="second-footer-terms-main-container">
      <div className="second-footer-terms-main-content-container">
        <div className="second-footer-terms-container">
          <Link to="#" className="second-footer-terms-link">Privacy policy <MdArrowRightAlt className="second-footer-terms-icon"/></Link>
          <Link to="#" className="second-footer-terms-link">Terms of use <MdArrowRightAlt className="second-footer-terms-icon"/></Link>
        </div>
          <p className="second-footer-copyright">© 2025 Ensome. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default SecondFooterTerms