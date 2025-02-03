import { Link } from "react-router-dom";
import { Divider } from "./common/icons";

import "@/styles/contact-us-breadcrumb.scss";

const ContactUsBreacrumb = () => {
  return (
    <div className="contact-us-breadcrumb-container">
      <Link to="/" className="contact-us-breadcrumb-home">Home</Link>
      <Divider className="contact-us-breadcrumb-divider"/>
      <Link to="/contact-us" className="contact-us-breadcrumb-title">Contact Us</Link>
    </div>
  )
}

export default ContactUsBreacrumb