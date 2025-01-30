import Breadcrumb from "./breadcrumb";
import "@/styles/top-hero-breadcrumb.scss";

interface Props {
  breadcrumbTitle: string;
  breadcrumbHref: string;
  topHeroTitle: string;
  topHeroDescription: string;
}

const TopHeroWithBreadcrumb = ({ breadcrumbHref, breadcrumbTitle, topHeroDescription, topHeroTitle  }: Props) => {
  return (
    <div className="top-hero-with-breadcrumb-container">
      <Breadcrumb
        href={breadcrumbHref}
        title={breadcrumbTitle}
      />
      <div className="top-hero-with-breadcrumb-title-container">
        <h1>{topHeroTitle}</h1>
        <p>{topHeroDescription}</p>
      </div>
    </div>
  )
}

export default TopHeroWithBreadcrumb