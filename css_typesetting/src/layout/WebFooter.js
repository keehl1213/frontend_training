import "../css/WebFooter.css"
import fb from "../images/fb.webp"
import twitter from "../images/twitter.webp"
import p from "../images/p.webp"
import visa from '../images/visa.webp'
import pay from '../images/pay.webp'
import american from "../images/american.webp"
import master from "../images/master.webp"


const businessIcon = [fb, twitter, p];
const creditIcon = [visa, pay, american, master]

const WebFooter = () => {
  return (
    <footer className="web-footer">
      <div className='footer-container'>
        <ul>
          <li>Contact Us</li>
          <li>1-800-000-0000</li>
          <li>info@mysite.com</li>
          <li className='footer-icons'>{businessIcon.map(icon => <img src={icon} key={icon} alt={icon} />)}</li>
        </ul>
        <ul>
          <li>We Accept</li>
          <li className='footer-icons'>{creditIcon.map(icon => <img src={icon} key={icon} alt={icon} />)}</li>
        </ul>
        <form className='footer-container_form'>
          <p>Join our mailing list</p>
          <input placeholder='Email Adress' />
          <br />
          <button>Subcribe Now</button>
        </form>
      </div>
      <div className="footer-author">© 2023 by INDOOR. Proudly created with Wix.com</div>
    </footer>
  )
}

export default WebFooter;