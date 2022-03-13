import React from 'react'
import Envelope from '../../assets/icons/envelope.svg'
import Phone from '../../assets/icons/phone.svg'

export default function AboutUs() {
  return (
    <section className="wrapper style1 align-center about-us">
      <div className="inner">
        <h2>Elérhetőség</h2>
        <p>Fellépés, koncert, magánrendezvény:</p>
        <div className="icon style1">
          <span>
            <Phone />
          </span>
          <a href="tel:+36209839434" title="Telefon">
            +36209839434
          </a>
        </div>
        <div className="icon style1">
          <span>
            <Envelope />
          </span>
          <a href="mailto:zongoristagabibacsi@gmail.com">zongoristagabibacsi@gmail.com</a>
        </div>
        <p>Asztalfoglalás a Piros Pezsgő Piano Bárba</p>
        <div className="icon style1">
          <span>
            <Phone />
          </span>
          <a href="tel:+36307350000" title="Telefon">
            +36307350000
          </a>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.8362786418807!2d19.027967615627226!3d47.51257957917849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dea7e355435f%3A0x279a64724f60590c!2sPiros+Pezsg%C5%91+Piano+B%C3%A1r!5e0!3m2!1shu!2shu!4v1547904425679"
          title="Google térkép a Piros Pezsgő pianobárhoz"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </section>
  )
}
