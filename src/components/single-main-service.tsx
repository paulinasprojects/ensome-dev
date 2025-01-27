import "@/styles/single-main-service.scss";
import SingleServiceContent from "./single-service-content";
import OtherServices from "./other-services";

const SingleMainService = () => {
  return (
    <div className="single-main-service-container">
     <SingleServiceContent/>
      <OtherServices/>
    </div>
  )
}

export default SingleMainService