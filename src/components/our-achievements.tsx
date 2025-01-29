import { ourAchievementsData } from "@/lib/data";
import "@/styles/ensome-achievements.scss";
import TitleHeading from "./title-heading";

const OurAchievements = () => {
  return (
    <div>
      <TitleHeading
        title="Our achievements"
      />
      <div className="our-achievemenets-content-container">
        {ourAchievementsData.map((data) => (
          <div className="our-achievements-content" key={data.id}>
            <span>{data.number}</span>
            <p>{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurAchievements