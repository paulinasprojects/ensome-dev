import "@/styles/second-footer.scss";
import logo from '/ensome-blue-logo.svg';
import SecondFooterLinks from "../second-footer-links";
import SecondFooterContactInfo from "../second-footer-contact-info";
import SecondFooterSocialLinks from "../second-footer-social-links";
import SecondFooterTerms from "../second-footer-terms";

const SecondFooter = () => {
  return (
    <footer className="second-footer-main-container">
      <div className="second-footer-first-main-container">
        <img src={logo} alt="" />
        <div className="">
          <SecondFooterLinks/>
        </div>
      </div>
      <hr className="second-footer-hr" />
      <div className="second-footer-second-main-container">
        <SecondFooterContactInfo/>
        <SecondFooterSocialLinks/>
      </div>
      <hr className="second-footer-second-hr" />
      <SecondFooterTerms/>
    </footer>
  )
}

export default SecondFooter