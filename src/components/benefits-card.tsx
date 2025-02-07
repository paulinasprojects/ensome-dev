import { SVGProps } from "react";
import IconComponent from "./icon";

interface BenefitsCardProps {
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  description: string;
};


const BenefitsCard = ({ icon, title, description }: BenefitsCardProps) => {
  return (
    <div>
      <span className="benefits-title">
        <IconComponent icon={icon} className="benefits-icon"/>
        {title}
      </span>
      <span className="benefits-description">{description}</span>
    </div>
  )
}

export default BenefitsCard