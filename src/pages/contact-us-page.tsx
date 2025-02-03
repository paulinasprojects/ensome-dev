import ContactUsBreacrumb from "@/components/contact-us-breadcrumb";
import ContactUsForm from "@/components/contact-us-form";
import ContactUsInfo from "@/components/contact-us-info";
import "@/styles/contact-us.scss";

const ContactUsPage = () => {
  return (
    <>
    <div className='contact-us-main-container'>
      <div className="contact-us-content-container">
       <div className="contact-us-title-container">
        <ContactUsBreacrumb/>
        <span className="contact-us-title">
          Contact Us
        </span>
       </div>
       <div>
        <ContactUsForm/>
       </div>
      </div>
    </div>
    <div>
      <ContactUsInfo/>
    </div>
    </>
  )
}

export default ContactUsPage