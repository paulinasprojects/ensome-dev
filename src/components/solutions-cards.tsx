import "@/styles/solutions-cards.scss";
import TitleHeading from "./title-heading";
import { SolutionsData } from "@/lib/data";
import IconComponent from "./icon";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Circle } from "./common/icons";

const SolutionsCards = () => {
  return (
    <div className="solutions-cards-main-container">
      <div className="solutions-cards-title-container">
        <TitleHeading
          title="Our Solution"
        />
      </div>
      <div className="solutions-cards-main-content-container">
        {SolutionsData.map((data) => (
          <div className="solutions-cards-card" key={data.id}>
            <IconComponent icon={data.icon}/>
            <span className="solutions-card-title">{data.title}</span>
            <div className="solutions-card-items">
              {data.items.map((item) => (
                <span key={item} className="solutions-card-item">
                  <Circle/>
                  {item}
                </span>
              ))}
            </div>
              <button className="solutions-card-button">Read More <MdOutlineArrowRightAlt className="solutions-card-button-icon"/></button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SolutionsCards