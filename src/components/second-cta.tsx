import "@/styles/second-cta.scss";
import SecondCtaInfo from "./second-cta-info";
import SecondCtaForm from "./second-cta-form";

const SecondCTA = () => {
  return (
    <div className="second-cta-main-container">
      <div className="second-cta-main-content-container">
        <SecondCtaInfo/>
        <SecondCtaForm/>
      </div>
    </div>
  )
}

export default SecondCTA