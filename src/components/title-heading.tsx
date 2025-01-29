interface TitleHeadingProps {
  title: string;
}

const TitleHeading = ({title}: TitleHeadingProps) => {
  return (
       <div className="title-heading-container">
        <span>{title}</span>
        <hr />
      </div>
  )
}

export default TitleHeading