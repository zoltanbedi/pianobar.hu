import React from 'react'
import Envelope from '../assets/icons/envelope.svg'
import Facebook from '../assets/icons/facebook.svg'
import Instagram from '../assets/icons/instagram.svg'
import Phone from '../assets/icons/phone.svg'
import Youtube from '../assets/icons/youtube.svg'

export default function Footer() {
  return (
    <footer className="wrapper style1 align-center">
      <div className="inner">
        <ul className="icons">
          <li>
            <a href="tel:+36209839434" title="Telefon" className="icon style2">
              <span>
                <Phone />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/Fuzy.Gabor44"
              rel="noopener noreferrer"
              target="_blank"
              title="Facebook"
              className="icon style2"
            >
              <span>
                <Facebook />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UC7j3MQnaL_EqtROv9kvtR_A"
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube"
              className="icon style2"
            >
              <span>
                <Youtube />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/fuzygabor/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="icon style2"
            >
              <span>
                <Instagram />
              </span>
            </a>
          </li>
          <li>
            <a href="mailto:zongoristagabibacsi@gmail.com" title="Email" className="icon style2">
              <span>
                <Envelope />
              </span>
            </a>
          </li>
        </ul>
        <p>
          © {new Date().getFullYear()} Fűzy Gábor. Design: <a href="https://html5up.net">HTML5 UP</a>.
        </p>
        <p>
          Az oldalt készítette <a href="https://github.com/zoltanBedi">Bedi Zoltán</a>
        </p>
        <p>
          <a
            href="/PrivacyPolicy"
            target="_blank"
            rel="noopener noreferrer"
            title="Privacy Policy"
          >Privacy Policy</a>
        </p>
      </div>
    </footer>
  )
}
