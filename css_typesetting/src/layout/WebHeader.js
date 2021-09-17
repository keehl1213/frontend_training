import '../css/WebHeader.css'
import shopingBag from '../images/shopping-bag-solid.svg'
const menuList = ['Home', 'Decor', 'Kitchen', 'Bedroom', 'About', 'Concact']

const WebHeader = () => {
  return (
    <header className='web-header'>
      <div className="header-container">
        <h3>INDOOR</h3>
        {menuList.map(menu => <p key={menu} className='menu'>{menu}</p>)}
        <img className="header-icon" src={shopingBag} alt='shopping-bag' />
      </div>
    </header>
  )
}

export default WebHeader;