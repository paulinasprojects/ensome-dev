import { ourAchievementsData } from "@/lib/data";
import "@/styles/ensome-achievements.scss";

const OurAchievements = () => {
  return (
    <div>
      <div className="our-achievemenets-title-container">
        <span>Our achievements</span>
        <hr />
      </div>
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