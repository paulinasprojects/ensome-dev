import { Link } from "react-router-dom";
import { Divider } from "./common/icons";

import "@/styles/breadcrumb.scss";

interface BreadcrumbProps {
  title: string;
  href: string;
}

const Breadcrumb = ({ title, href }: BreadcrumbProps) => {
  return (
    <div className="breadcrumb-container">
      <Link to="/" className="breadcrumb-home">Home</Link>
      <Divider className="breadcrumb-divider"/>
      <Link to={href} className="breadcrumb-title">{title}</Link>
    </div>
  )
}

export default Breadcrumb