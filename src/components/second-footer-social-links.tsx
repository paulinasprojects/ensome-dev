import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaDribbble, FaBehance } from "react-icons/fa";
import { Link } from "react-router-dom";

const SecondFooterSocialLinks = () => {
  return (
    <div>
      <span className="second-footer-social-links-title">Socials</span>
      <div className="second-footer-social-links">
      <Link to="#" className='second-footer-social-link'>
        <FaFacebookF className='second-footer-social-link-icon'/>
      </Link>
       <Link to="#" className='second-footer-social-link'>
        <FaTwitter className='second-footer-social-link-icon'/>
       </Link>
       <Link to="#" className='second-footer-social-link'>
        <FaLinkedinIn className='second-footer-social-link-icon'/>
       </Link>
       <Link to="#" className='second-footer-social-link'>
        <FaYoutube className='second-footer-social-link-icon'/>
       </Link>
       <Link to="#" className='second-footer-social-link'>
        <FaDribbble className='second-footer-social-link-icon'/>
       </Link>
       <Link to="#" className='second-footer-social-link'>
        <FaBehance className='second-footer-social-link-icon'/>
       </Link>
      </div>
    </div>
  )
}

export default SecondFooterSocialLinks