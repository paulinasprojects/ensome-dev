import { gladWereHereData } from "@/lib/data";
import "@/styles/glad-were-here.scss";

const GladWereHere = () => {
  return (
    <div className="glad-were-here-main-container">
      <h3 className="glad-were-here-title">Glad we're here to help you succeed</h3>
      <div className="glad-were-here-content-container">
        {gladWereHereData.map((data) => (
          <div key={data.date} className="glad-were-here-content">
            <span>{data.date}</span>
            <h4>{data.title}</h4>
            <p>{data.content}</p>
            <div className="glad-were-here-extras">
              {data.extras.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="glad-were-here-button-container">
        <button className="glad-were-here-button">Learn more</button>
      </div>
    </div>
  )
}

export default GladWereHere