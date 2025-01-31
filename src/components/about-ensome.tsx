import "@/styles/about-ensome.scss";
import { ourClientsDarkData } from "@/lib/data";
import TitleHeading from "./title-heading";

const AboutEnsome = () => {
  return (
    <div className="about-ensome-main-container">
      <div className="about-ensome-main-content-container">
        <TitleHeading
          title="About Ensome"
        />
        <img src="https://res.cloudinary.com/dymlzmyuo/image/upload/v1738140015/img_10_vvimsu.png" alt="" />
        <div className="about-ensome-content">
          <span>Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudantium, totam <br />  rem aperiam, eaque ipsa quaeab illo inventore. Donec <br /> tincidunt tempor quam, non mollis quam finibus nec.</span>
          <span>Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudantium, totam <br />  rem aperiam, eaque ipsa quaeab illo inventore. Donec <br /> tincidunt tempor quam.</span>
        </div>
        <div className="about-ensome-image-container">
          {ourClientsDarkData.map((client) => (
            <img src={client.image} key={client.id} alt="" className="about-ensome-logos" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutEnsome