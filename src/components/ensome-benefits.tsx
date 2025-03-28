import { motion } from "framer-motion";
import { BrainCircuit, ArrowTrendingLines, Key } from "./common/icons";
import BenefitsCard from "./benefits-card";
import "@/styles/ensome-benefits.scss";



const EnsomeBenefits = () => {
  return (
    <div className="ensome-benefits-main-container">
     <motion.img 
      src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1737531226/benefit_nd5htf.png" alt="" className="ensome-benefits-image" 
      initial={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }} 
      />
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} 
      >
        <div>
          <h3 className="ensome-benefits-main-title">The benefits of Ensome</h3>
          <hr className="ensome-benefits-hr" />
        </div>
        <div 
          className="benefits-container">
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
        </div>
      </motion.div>
    </div>
  )
}

export default EnsomeBenefits