interface Props {
  content: React.ReactNode;
};


const FaqContent = ({ content }: Props) => {
  return (
    <div>{content}</div>
  );
};

export default FaqContent;