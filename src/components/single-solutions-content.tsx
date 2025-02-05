import { singleSolutionsData } from "@/lib/data";
import "@/styles/single-solutions-content.scss";
import { Circle } from "./common/icons";

const SingleSolutionsContent = () => {
  return (
    <div className="single-solutions-main-container">
      <div className="single-solution-first-content-container">
        <div className="single-solution-first-content">
          <span className="single-solution-first-content-title">What is data visualization?</span>
          <p className="single-solution-first-content-paragraph">Vestibulum varius mattis sagittis. Cras pharetra rutrum ante. Pellentesque pulvinar, odio ut convallis lobortis, massa ante mattis neque, a sagittis orci leo in quam. Ut convallis ex orci, nec sodales urna convallis ac. Sed cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu. </p>
        </div>
        <div>
          <span className="single-solution-first-content-title">Types of data visualization</span>
          <img src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1738594532/img_14_yyants.png" alt="" className="single-solution-first-content-image" />
          <p className="single-solution-first-content-paragraph">Vestibulum varius mattis sagittis. Cras pharetra rutrum ante. Pellentesque pulvinar, odio ut convallis lobortis, massa ante mattis neque, a sagittis orci leo in quam. Ut convallis ex orci, nec sodales urna convallis ac. Sed cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu: </p>
          <div className="single-solution-first-content-data-container">
            {singleSolutionsData.map((data) => (
              <div key={data.title} className="single-solution-first-content-data">
                <Circle className="single-solution-first-content-data-icon"/>
                <span className="single-solution-data-title">{data.title} — <span className="single-solution-data-content">{data.content}</span></span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="single-solution-second-content">
        <span className="single-solution-second-title">Data visualization practices</span>
        <p className="single-solution-second-paragraph">Vestibulum varius mattis sagittis. Cras pharetra rutrum ante. Pellentesque pulvinar, odio ut convallis lobortis, massa ante mattis neque, a sagittis orci leo in quam. Ut convallis ex orci, nec sodales urna convallis ac. Sed cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu.</p>
        <p className="single-solution-second-second-paragraph">Phasellus sed venenatis leo. Cras pulvinar, eros sed dictum semper, orci ipsum scelerisque tortor, at euismod sem lectus sed ex. Praesent purus orci, rutrum ac aliquet nec, egestas sit amet nibh.</p>
        <img src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1738594654/img_0012_ibxzw0.png" alt="" className="single-solution-second-content-image" />
        <div className="single-solution-data-visualization-in-ensome">
          <span className="single-solution-data-visualization-in-ensome-title">Data visualization in Ensome</span>
          <p className="single-solution-data-visualization-in-ensome-paragraph">Cras aliquet felis nec lobortis pellentesque. Nam accumsan felis feugiat lorem volutpat, at mollis ipsum congue. Morbi non feugiat odio, ut facilisis eros. Duis in consequat mauris, vel interdum odio. Vestibulum et ex in neque bibendum vestibulum. Sed eget pharetra nunc. Duis mollis ante mauris, vitae volutpat libero rhoncus vitae.</p>
          <p className="single-solution-data-visualization-in-ensome-paragraph">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean luctus ultrices eros, vel sollicitudin arcu fringilla quis</p>
          <p className="single-solution-data-visualization-in-ensome-paragraph">Vestibulum porttitor euismod sagittis. Pellentesque scelerisque purus nisi, ac convallis neque bibendum eget. Pellentesque augue nunc, ullamcorper vel sollicitudin sed, auctor nec libero. </p>
        </div>
      </div>
    </div>
  )
}

export default SingleSolutionsContent