import HistoryCarousel from './history-carousel'
import "@/styles/ensomy-history.scss"

const EnsomeHistory = () => {
  return (
    <div className='ensome-history-main-container'>
      <div className='ensome-history-title-container'>
        <span>Ensome history</span>
        <hr />
      </div>
      <HistoryCarousel/>
    </div>
  )
}

export default EnsomeHistory