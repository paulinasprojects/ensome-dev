import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { motion } from "framer-motion";

import CtaForm from "./cta-form";

import "@/styles/single-team-member-content.scss";
import { TeamMemberDescription, TeamMemberTitle } from "./ui/team-member-card";

const SingleTeamMemberContent = () => {
  return (
    <div className="team-member-main-container">
      <div 
        className="team-member-first-main-content-container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
        >
          <img src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1737546097/testimonial-one_rpk8zm.png" alt="" className="team-member-image" />
        </motion.div>
        <motion.div 
          className="team-member-first-content-container"
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
        >
          <div>
            <TeamMemberTitle>Name</TeamMemberTitle>
            <TeamMemberDescription>Bagrat Leo</TeamMemberDescription>
          </div>
          <div>
            <TeamMemberTitle>Position</TeamMemberTitle>
            <TeamMemberDescription>Data analytics researcher</TeamMemberDescription>
          </div>
          <div>
            <TeamMemberTitle>Description</TeamMemberTitle>
            <TeamMemberDescription>Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo libero. At vero eos et accusamus et iusto odio dignissimos ducimus.</TeamMemberDescription>
          </div>
          <div>
            <TeamMemberTitle>Social networks</TeamMemberTitle>
            <div className="team-member-social-links">
              <Link to="#">
                <FaFacebook className="team-member-social-icon"/>
              </Link>
              <Link to="#">
                <AiFillTwitterCircle className="team-member-social-icon"/>
              </Link>
              <Link to="#">
                <FaLinkedin className="team-member-social-icon" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <div  
        className="team-member-second-main-content-container"
      >
        <div className="team-member-second-content-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} 
          >
            <span className="team-member-second-content-title">Want Leo to share his expertise with you?</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} 
          >
            <CtaForm/>
          </motion.div>
        </div>
      </div>
    </div>
  )
};




export default SingleTeamMemberContent