import "@/styles/second-testimonial-card.scss";

interface Props {
  image: string;
  name: string;
  position: string;
};

const SecondTestimonialCard = ({ image, name, position }: Props) => {
  return (
    <div className="second-testimonial-card-main-container">
      <div className="second-testimonial-card-image-container">
        <img src={image} alt="" />
      </div>
      <div className="second-testimonial-card-main-content">
        <p>"Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.</p>
        <span className="second-testimonial-name">{name}</span>
        <span className="second-testimonial-position">{position}</span>
      </div>
    </div>
  )
}

export default SecondTestimonialCard