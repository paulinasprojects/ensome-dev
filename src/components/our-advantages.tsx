import { servicesData } from "@/lib/data"
import TitleHeading from "./title-heading"
import IconComponent from "./icon"

import "@/styles/our-advantages.scss";

const OurAdvantages = () => {
  return (
    <div>
      <TitleHeading
        title="Our advantages"
      />
      <div className="our-advantages-content-container">
        {servicesData.slice(0, 3).map((data) => (
          <div key={data.id} className="our-advantages-content">
            <IconComponent icon={data.icon} className="our-advantages-icon"/>
            <span>{data.title}</span>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurAdvantages