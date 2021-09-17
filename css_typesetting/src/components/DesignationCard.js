import "../css/DesignationCard.css"
const DesignationCard = (props) => {
  const { imgSrc, mark, showed, alt } = props
  return (
    <div className="container">
      <img className="container-img" src={imgSrc} alt={alt} />
      <div style={{ display: showed }} className="mark-label">
        <p>{mark}</p>
      </div>
    </div>
  )
}


export default DesignationCard;