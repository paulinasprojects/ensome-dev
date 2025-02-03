import "@/styles/contact-us-info.scss"

const ContactUsInfo = () => {
  return (
    <div className="contact-us-info-main-container">
      <div className="oontact-us-info-content-container">
        <div className="contact-us-info-content">
          <span>Phone</span>
          <p>+1 601-201-5580</p>
        </div>
        <div className="contact-us-info-content">
          <span>Email</span>
          <p>ensome@info.co.us</p>
        </div>
        <div className="contact-us-info-content">
          <span>Address</span>
          <p>1642 Washington Ave, Jackson, MS</p>
        </div>
      </div>
    </div>
  )
}

export default ContactUsInfo