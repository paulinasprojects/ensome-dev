import { Link } from "react-router-dom";
import { Divider } from "./common/icons";

import "@/styles/breadcrumb.scss";

interface BreadcrumbProps {
  title: string;
  href: string;
  secondTitle?: string;
  secondHref?: string;
  isTeamMemberPage?: boolean;
}

const Breadcrumb = ({ title, href, secondTitle, isTeamMemberPage, secondHref }: BreadcrumbProps) => {
  return (
    <div className="breadcrumb-container">
      <Link to="/" className="breadcrumb-home">Home</Link>
      <Divider className="breadcrumb-divider"/>
      <Link to={href} className="breadcrumb-title">{title}</Link>
      {isTeamMemberPage && (
        <>
        <Divider className="breadcrumb-divider"/>
        <Link to={secondHref || "/our-team"} className="breadcrumb-title">{secondTitle}</Link>
        </>
      )}
    </div>
  )
}

export default Breadcrumb