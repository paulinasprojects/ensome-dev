import { ourClientsData } from "@/lib/data"
import '@/styles/our-clients.scss'

const OurClients = () => {
  return (
    <div className="our-client-main-container">
      {ourClientsData.map((data) => (
          <img src={data.image} alt="" key={data.id} className="test-image" />
      ))}
    </div>
  )
}

export default OurClients