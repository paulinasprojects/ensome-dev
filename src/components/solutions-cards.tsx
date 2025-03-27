import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { SolutionsData } from "@/lib/data";
import TitleHeading from "./title-heading";
import IconComponent from "./icon";
import { Circle } from "./common/icons";
import { useMediaQuery } from "usehooks-ts";
import { containerVariants, itemVariants } from "@/lib/constants";

import "@/styles/solutions-cards.scss";

const SolutionsCards = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <AnimatePresence initial={isMobile ? false : true}>
      <motion.div className="solutions-cards-main-container"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.8}}
        variants={containerVariants}
      >
        <div className="solutions-cards-title-container">
          <TitleHeading
            title="Our Solution"
          />
        </div>
        <div className="solutions-cards-main-content-container" >
          {SolutionsData.map((data) => (
            <motion.div className="solutions-cards-card" key={data.id} variants={itemVariants}>
              <IconComponent icon={data.icon}/>
              <span className="solutions-card-title">{data.title}</span>
              <div className="solutions-card-items">
                {data.items.map((item) => (
                  <span key={item} className="solutions-card-item">
                    <Circle className="solutions-card-item-icon"/>
                    {item}
                  </span>
                ))}
              </div>
                <button onClick={() => navigate("/solutions/1")} className="solutions-card-button">Read More <MdOutlineArrowRightAlt className="solutions-card-button-icon"/></button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default SolutionsCards