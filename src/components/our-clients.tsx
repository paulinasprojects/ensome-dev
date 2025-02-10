import { ourClientsData } from "@/lib/data";
import classNames from "@/lib/utils";
import '@/styles/our-clients.scss';

interface Props {
  isSecondHomePage?: boolean;
};

const OurClients = ({ isSecondHomePage }: Props) => {
  return (
    <div className={classNames(isSecondHomePage ? "our-clients-second-main-container" : "our-client-main-container")}>
      {ourClientsData.map((data) => (
          <img src={data.image} alt="" key={data.id} className="test-image" />
      ))}
    </div>
  )
}

export default OurClients