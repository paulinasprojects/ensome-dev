import { SVGProps } from "react";

interface IconProps {
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  className?: string;
}

const IconComponent = ({ icon:Icon, className }: IconProps) => {
  return (
   <Icon className={className}/>
  )
}

export default IconComponent;