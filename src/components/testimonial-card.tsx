import "@/styles/testimonial-card.scss";

interface Props {
  image: string;
  name: string;
  position: string;
};

const TestimonialCard = ({ image, name, position  }: Props) => {
  return (
    <div className="testimonial-card-main-container">
      <div className="testimonial-card-content-container">
        <div className="flex items-center gap25">
          <img src={image} alt="" className="testimonial-card-image" />
          <div className="testimonial-content">
            <span className="testimonial-name">{name}</span>
            <span className="testimonial-position">{position}</span>
          </div>
        </div>
        <div>
          <span className="testimonial-description">“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” </span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard