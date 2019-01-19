import React from 'react'
import '../assets/icons.svg'
import { Icon } from './Icon'

const Footer = () => (
  <footer className="wrapper style1 align-center">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="tel:+36209839434" title="Telefon" className="icon style2">
            <Icon name="awesome-phone" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/Fuzy.Gabor44" title="Facebook" className="icon style2">
            <Icon name="awesome-facebook-official" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UC7j3MQnaL_EqtROv9kvtR_A" title="YouTube" className="icon style2">
            <Icon name="awesome-youtube-play" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/fuzygabor/" title="Instagram" className="icon style2">
            <Icon name="awesome-instagram" />
          </a>
        </li>
        <li>
          <a href="mailto:zongoristagabibacsi@gmail.com" title="Email" className="icon style2">
            <Icon name="awesome-envelope" />
          </a>
        </li>
      </ul>
      <p>
        © {new Date().getFullYear()} Fűzy Gábor. Design: <a href="https://html5up.net">HTML5 UP</a>.
      </p>
      <p>
        Az oldalt készítette <a href="https://github.com/B3zo0">Bedi Zoltán</a>
      </p>
    </div>
  </footer>
)
export default Footer
