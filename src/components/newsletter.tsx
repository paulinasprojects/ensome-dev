import "@/styles/newsletter.scss";
import classNames from "@/lib/utils";

interface Props {
  isSecondHomePage?: boolean;
}

const Newsletter = ({ isSecondHomePage }: Props) => {
  return (
    <div className={classNames(isSecondHomePage ? "second-newsletter-main-container": "newsletter-main-container")}>
      <div className="newsletter-content-container">
        <div className="newsletter-title-container">
          <h3 className="newsletter-title">Subscribe to our newsletter</h3>
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