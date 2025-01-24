interface Props {
  content: React.ReactNode;
}

const PricingContent = ({  content }: Props) => {
  return (
    <div>{content}</div>
  );
};

export default PricingContent;