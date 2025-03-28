import { OurTeamData } from "@/lib/data";
import "@/styles/our-team.scss";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import { containerVariants, itemVariants } from "@/lib/constants";
import { useMediaQuery } from "usehooks-ts";

const OurTeam = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <AnimatePresence initial={isMobile ? false : true}>
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.2}}
      variants={containerVariants}
      className="our-team-main-container"
    >
      <div className="our-team-image-container">
      {OurTeamData.map((member) => (
        <motion.div variants={itemVariants} className="our-team-member-container" key={member.id} onClick={() => navigate("/our-team/member/1")}>
          <img src={member.image} alt="" className="our-team-member-image" />
          <div className="our-team-member-info">
            <span className="our-team-member-name">{member.title}</span>
            <span className="our-team-member-role">{member.role}</span>
          </div>
        </motion.div>
      ))}
      </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default OurTeam