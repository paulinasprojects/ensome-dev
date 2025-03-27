import { motion } from "framer-motion"
import "@/styles/about-ensome.scss";
import { ourClientsDarkData } from "@/lib/data";
import TitleHeading from "./title-heading";

const AboutEnsome = () => {

  
  return (
    <>
      <motion.div 
        className="about-ensome-main-container"
        initial={{ opacity: 0, y: 70 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} 
      >
        <motion.div className="about-ensome-main-content-container">
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
              <motion.img 
                initial={{ opacity: 0, y: 70 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} 
              src={client.image} key={client.id} alt="" className="about-ensome-logos" />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default AboutEnsome