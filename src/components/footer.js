import React from 'react'

const Footer = () => (
  <footer className="wrapper style1 align-center">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="tel:+36209839434" title="Telefon" className="icon style2 fas fa-phone">
            <span className="label">Telefon</span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/Fuzy.Gabor44" title="Facebook" className="icon style2 fab fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UC7j3MQnaL_EqtROv9kvtR_A"
            title="YouTube"
            className="icon style2 fab fa-youtube"
          >
            <span className="label">YouTube</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/fuzygabor/" title="Instagram" className="icon style2 fab fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="mailto:zongoristagabibacsi@gmail.com" title="Email" className="icon style2 fas fa-envelope">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <p>
        © {new Date().getFullYear()} Fűzy Gábor. Design: <a href="https://html5up.net">HTML5 UP</a>.
      </p>
      <p>
        Built with ❤ by <a href="https://github.com/B3zo0">Bedi Zoltán</a>
      </p>
    </div>
  </footer>
)
export default Footer
