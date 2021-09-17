import "../css/SystematicsCard.css"

const SystematicsCard = (props) => {
  const { title, img } = props
  return (
    <div className="card">
      <div className="card-title" >{title}</div>
      <div >
        <img src={img} alt={img} className="card-img" />
      </div>
    </div>
  )
}

export default SystematicsCard;