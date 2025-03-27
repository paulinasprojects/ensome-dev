import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/constants";
import { BrainCircuit, ArrowTrendingLines, Key } from "./common/icons";
import BenefitsCard from "./benefits-card";
import "@/styles/ensome-benefits.scss";



const EnsomeBenefits = () => {
  return (
    <motion.div className="ensome-benefits-main-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={containerVariants}
      
    >
     <img src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1737531226/benefit_nd5htf.png" alt="" className="ensome-benefits-image" />
      <div>
        <div>
          <h3 className="ensome-benefits-main-title">The benefits of Ensome</h3>
          <hr className="ensome-benefits-hr" />
        </div>
        <motion.div className="benefits-container" variants={itemVariants}>
          <BenefitsCard
            icon={BrainCircuit}
            title="Machine Learing"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores. Totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto."
          />
          <BenefitsCard
            icon={ArrowTrendingLines}
            title="Embeded analytics"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis  praesentium voluptatum deleniti atque corrupti quos dolores. Totam rem  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto."
          />
          <BenefitsCard
            icon={Key}
            title="Access control"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default EnsomeBenefits