import { motion } from 'framer-motion'
import HistoryCarousel from './history-carousel'
import TitleHeading from './title-heading'
import "@/styles/ensomy-history.scss"

const EnsomeHistory = () => {
  return (
    <motion.div 
      className='ensome-history-main-container'
      initial={{ opacity: 0, y: 80 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{ once: true }} 
    >
      <div className='ensome-history-title-container'> 
      <TitleHeading
        title='Ensome history'
      />
      </div>
      <HistoryCarousel/>
    </motion.div>
  )
}

export default EnsomeHistory