import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoMdPin } from "react-icons/io";

import CtaForm from "./cta-form";
import "@/styles/cta.scss";
import classNames from "@/lib/utils";

interface CTAProps {
  className?: string | undefined;
  isServicesPage?: boolean;
}

const Cta = ({ className, isServicesPage }: CTAProps) => {
  return (
    <div className={classNames(isServicesPage ? className : "cta-main-container")}>
      <div className="cta-content-container">
        <div className="cta-contact-us-container">
          <div>
            <span className="cta-contact-us-title">Contact information</span>
            <hr className="cta-hr" />
          </div>
          <div>
            <span className="cta-contact-us-descr">Fill up the form and our Team will get back <br /> to you with 25 hours.</span>
          </div>
        <div className="cta-contact-us-links">
          <span className="cta-contact-us-link">
            <IoMail className="cta-contact-us-icon"/>
            ensome@info.co.us
          </span>
          <span className="cta-contact-us-link">
            <FaPhone className="cta-contact-us-icon"/>
            +1 601-201-5580
          </span>
          <span className="cta-contact-us-link">
            <IoMdPin className="cta-contact-us-icon"/>
            1642 Washington Ave, Jackson, MS
          </span>
        </div>
        </div>
        <div>
          <CtaForm/>
        </div>
      </div>
    </div>
  )
}

export default Cta