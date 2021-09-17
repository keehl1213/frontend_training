import SystematicsCard from "../components/SystematicsCard";
import DesignationCard from "./DesignationCard";
import "../css/AdvertiseTemplate.css"

const AdvertiseTemplate = (props) => {
  const { value, orderFirst, orderSecond, orderThird, index } = props
  return (
    <div className="advertise">
      <div className="advertise-row" style={{ order: orderFirst }}>
        <DesignationCard imgSrc={value.mainImg} alt={value.section1} showed={index === 2 ? '' : 'none'} mark='ON SALE' />
      </div>
      <div className="advertise-row_2" style={{ order: orderSecond }}>
        <DesignationCard imgSrc={value.subOneImg} alt={value.section2} showed='none' />
        <DesignationCard imgSrc={value.subTwoImg} alt={value.section3} showed={index === 1 ? '' : 'none'} mark='NEW' />
      </div>
      <div className="advertise-row" style={{ order: orderThird }}>
        <SystematicsCard title={value.title} img={value.advertiseImg} />
      </div>
    </div >
  )
}

export default AdvertiseTemplate;