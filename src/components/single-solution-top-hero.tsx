import "@/styles/single-solution-top-hero.scss";
import Breadcrumb from "./breadcrumb";

const SingleSolutionTopHero = () => {
  return (
    <div className="single-solution-top-hero-container">
      <span>Data visualization</span>
      <Breadcrumb href="/solutions/1" title="Data visualization"/>
    </div>
  )
}

export default SingleSolutionTopHero