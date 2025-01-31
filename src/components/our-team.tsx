import { OurTeamData } from "@/lib/data";
import "@/styles/our-team.scss";

const OurTeam = () => {
  return (
    <div className="our-team-main-container">
      <div className="our-team-image-container">
      {OurTeamData.map((member) => (
        <div className="our-team-member-container" key={member.id}>
          <img src={member.image} alt="" className="our-team-member-image" />
          <div className="our-team-member-info">
            <span className="our-team-member-name">{member.title}</span>
            <span className="our-team-member-role">{member.role}</span>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default OurTeam