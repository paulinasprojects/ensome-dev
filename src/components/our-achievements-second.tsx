import { ourAchievementsData } from "@/lib/data";
import "@/styles/our-achievements-second.scss";


const OurAchievementsSecond = () => {
  return (
    <div className="our-achievements-second-main-container">
      <div className="our-achievements-second-content-container">
        {ourAchievementsData.map((data) => (
          <div className="our-achievements-second-content" key={data.id}>
            <span>{data.number}</span>
            <p>{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurAchievementsSecond