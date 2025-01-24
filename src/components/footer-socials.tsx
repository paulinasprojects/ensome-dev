import ensomelogo from '/ensone-logo.svg';
import "@/styles/footer-social.scss";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaDribbble, FaBehance } from "react-icons/fa";


const FooterSocials = () => {
  return (
    <div className='footer-socials-container'>
      {/* <div> */}
        <img src={ensomelogo} alt="" className='ensome-footer-logo' />
        <span className='footer-social-description'>Ut enim ad minima veniam, quis nostrum <br /> exercitationem ullam corporis suscipit <br /> laboriosam, nisi ut aliquid ex ea commodi.</span>
        <div className='footer-social-links'>
          <Link to="#" className='footer-social-link'>
            <FaFacebookF className='footer-social-link-icon'/>
          </Link>
          <Link to="#" className='footer-social-link'>
            <FaTwitter className='footer-social-link-icon'/>
          </Link>
          <Link to="#" className='footer-social-link'>
            <FaLinkedinIn className='footer-social-link-icon'/>
          </Link>
          <Link to="#" className='footer-social-link'>
            <FaYoutube className='footer-social-link-icon'/>
          </Link>
          <Link to="#" className='footer-social-link'>
            <FaDribbble className='footer-social-link-icon'/>
          </Link>
          <Link to="#" className='footer-social-link'>
            <FaBehance className='footer-social-link-icon'/>
          </Link>
        </div>
      {/* </div> */}
    </div>
  )
}

export default FooterSocials