import "@/styles/ensome-benefits.scss";
import benefits from '/benefit.png';
import { BrainCircuit, ArrowTrendingLines, Key } from "./common/icons";

const EnsomeBenefits = () => {
  return (
    <div className="ensome-benefits-main-container">
      <div><img src={benefits} alt="" className="ensome-benefits-image" /></div>
      <div>
        <div>
          <span className="ensome-benefits-main-title">The benefits of Ensome</span>
          <hr className="ensome-benefits-hr" />
        </div>
        <div className="benefits-container">
         <div>
            <span className="benefits-title">
                <BrainCircuit className="benefits-icon"/>
                Machine Learing
              </span>
            <span className="benefits-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis <br /> praesentium voluptatum deleniti atque corrupti quos dolores. Totam rem <br /> aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</span>
         </div>
         <div>
            <span className="benefits-title">
                <ArrowTrendingLines className="benefits-icon"/>
                Embeded analytics
              </span>
            <span className="benefits-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis <br /> praesentium voluptatum deleniti atque corrupti quos dolores. Totam rem <br /> aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</span>
         </div>
         <div>
            <span className="benefits-title">
                <Key className="benefits-icon"/>
                Access control
              </span>
            <span className="benefits-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis <br /> praesentium voluptatum deleniti atque corrupti quos dolores. Totam rem <br /> aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</span>
         </div>
        </div>
      </div>
    </div>
  )
}

export default EnsomeBenefits