import SecondHeader from "./common/second-header";
import SecondFooter from "./common/second-footer";

interface SecondLayoutProps {
  children: React.ReactNode;
};

export const SecondLayout = ({ children }: SecondLayoutProps) => {
  return (
    <div className="main-layout">
      <SecondHeader/>
      <div className="children-container">
        {children}
      </div>
      <SecondFooter/>
    </div>
  )
}
