import { motion } from "framer-motion";
import Breadcrumb from "./breadcrumb";
import "@/styles/top-hero-breadcrumb.scss";

interface Props {
  breadcrumbTitle: string;
  breadcrumbHref: string;
  topHeroTitle: string;
  topHeroDescription: string;
  isTeamMemberPage?: boolean;
  teamMemberTitle?: string;
  secondHref?: string;
}

const TopHeroWithBreadcrumb = ({ breadcrumbHref, breadcrumbTitle, topHeroDescription, topHeroTitle, isTeamMemberPage, teamMemberTitle, secondHref  }: Props) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "circInOut" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} 
      className="top-hero-with-breadcrumb-container"
    >
      <Breadcrumb
        href={breadcrumbHref}
        title={breadcrumbTitle}
        isTeamMemberPage={isTeamMemberPage}
        secondHref={secondHref}
        secondTitle={teamMemberTitle}
      />
      <div className="top-hero-with-breadcrumb-title-container">
        <h1>{topHeroTitle}</h1>
        <p>{topHeroDescription}</p>
      </div>
    </motion.div>
  )
}

export default TopHeroWithBreadcrumb