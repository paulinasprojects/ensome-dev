import "@/styles/newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter-main-container">
      <div className="newsletter-content-container">
        <div className="newsletter-title-container">
          <span className="newsletter-title">Subscribe to our newsletter</span>
          <span className="newsletter-description">Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudantium.</span>
        </div>
        <div className="">
          <input type="text" className="newsletter-input" placeholder="Your email" />
          <button className="newsletter-send-button">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter