import HistoryCarousel from './history-carousel'
import "@/styles/ensomy-history.scss"
import TitleHeading from './title-heading'

const EnsomeHistory = () => {
  return (
    <div className='ensome-history-main-container'>
      <div className='ensome-history-title-container'> 
      <TitleHeading
        title='Ensome history'
      />
      </div>
      <HistoryCarousel/>
    </div>
  )
}

export default EnsomeHistory