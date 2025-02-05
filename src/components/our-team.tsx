import { OurTeamData } from "@/lib/data";
import "@/styles/our-team.scss";
import { useNavigate } from "react-router-dom";

const OurTeam = () => {
  const navigate = useNavigate();

  return (
    <div className="our-team-main-container">
      <div className="our-team-image-container">
      {OurTeamData.map((member) => (
        <div className="our-team-member-container" key={member.id} onClick={() => navigate("/our-team/member/1")}>
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