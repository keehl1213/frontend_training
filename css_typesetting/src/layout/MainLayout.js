import WebHeader from "./WebHeader";
import WebFooter from "./WebFooter";
import decorimg from "../images/section1-3.webp"
import section1 from "../images/section1-1.webp"
import section2 from "../images/section2-1.webp"
import section3 from "../images/section2-2.webp"
import slogan from "../images/slogan.webp"
import kitchen from "../images/kitchen.webp"
import kitchen1 from "../images/kitchen-1.webp"
import kitchen2 from "../images/kitchen-2.webp"
import kitchen3 from "../images/kitchen-3.webp"
import bedroom from "../images/bedroom.webp"
import bedroom1 from "../images/bedroom-1.webp"
import bedroom2 from "../images/bedroom-2.webp"
import bedroom3 from "../images/bedroom-3.webp"

import AdvertiseTemplate from "../components/AdvertiseTemplate";
import "../App.css"
const imgsValues = [
  { mainImg: section1, subOneImg: section2, subTwoImg: section3, advertiseImg: decorimg, title: 'DECOR', firstNum: 1, secondNum: 2, thirdNum: 3 },
  { mainImg: kitchen1, subOneImg: kitchen2, subTwoImg: kitchen3, advertiseImg: kitchen, title: 'KITCHEN', firstNum: 2, secondNum: 3, thirdNum: 1 },
  { mainImg: bedroom, subOneImg: bedroom1, subTwoImg: bedroom2, advertiseImg: bedroom3, title: 'BEDROOM', firstNum: 1, secondNum: 2, thirdNum: 3 },
]

const MainLayout = () => {
  return (
    <div className='main'>
      <WebHeader />
      <div className='main-container'>
        <div className="section">
          <div className='main-container_title'>
            <h3>MODERN DESIGN MEETS COZY COMFORT</h3>
            <h4>Create the perfect space</h4>
          </div>
          <img src={slogan} style={{ width: '50%' }} alt='slogan' />
        </div>
        {imgsValues.map((value, index) => <AdvertiseTemplate value={value} key={value.title} orderFirst={value.firstNum} index={index} orderSecond={value.secondNum} orderThird={value.thirdNum} />)}
      </div >
      <WebFooter />
    </div >
  )
}

export default MainLayout;