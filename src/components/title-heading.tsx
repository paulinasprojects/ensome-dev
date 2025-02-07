interface TitleHeadingProps {
  title: string;
}

const TitleHeading = ({title}: TitleHeadingProps) => {
  return (
       <div className="title-heading-container">
        <h3>{title}</h3>
        <hr />
      </div>
  )
}

export default TitleHeading