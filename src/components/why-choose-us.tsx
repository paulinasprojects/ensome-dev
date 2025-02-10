import { servicesData } from "@/lib/data";
import "@/styles/why-choose-us-.scss";
import IconComponent from "./icon";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-main-container">
      <div className="why-choose-us-title-container">
        <h3>Why our clients choose Ensome</h3>
        <p>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore <br /> veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      </div>
      <div className="why-choose-us-content-container">
        {servicesData.slice(0, 3).map((data) => (
          <div key={data.id} className="why-choose-us-advantages-content">
            <IconComponent icon={data.icon} className="why-choose-us-advantages-icon"/>
            <span>{data.title}</span>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyChooseUs