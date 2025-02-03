import "@/styles/faq-tab.scss";

interface Props {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

const FaqTab = ({ label, isActive, onClick }: Props) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className="faq-tab-container"
      onClick={onClick}
    >
      {label}
      {isActive && (
        <hr className="faq-tab-hr" />
      )}
    </div>
  );
};

export default FaqTab;