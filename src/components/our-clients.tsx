import { ourClientsData } from "@/lib/data";
import classNames from "@/lib/utils";
import { motion } from "framer-motion";
import '@/styles/our-clients.scss';

interface Props {
  isSecondHomePage?: boolean;
};

const OurClients = ({ isSecondHomePage }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y:20 }}
      transition={{ duration: 0.5, ease: "easeIn"}}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={classNames(isSecondHomePage ? 
        "our-clients-second-main-container" : 
        "our-client-main-container"
      )}
    >
      {ourClientsData.map((data) => (
          <img src={data.image} alt="" key={data.id} className="test-image" />
      ))}
    </motion.div>
  )
}

export default OurClients