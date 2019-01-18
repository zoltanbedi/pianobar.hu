import React from 'react'
import { Icon } from '../Icon'

export default class AboutUs extends React.Component {
  render() {
    return (
      <section className="wrapper style1 align-center about-us">
        <h2>Elérhetőség</h2>
        <div className="inner" id="map" style={{ height: '25rem' }} />
        <p>Fellépés, koncert, magánrendezvény:</p>
        <div className="icon style1">
          <Icon name="awesome-phone" />
          <a href="tel:+36209839434" title="Telefon">
            +36209839434
          </a>
        </div>
        <div className="icon style1">
          <Icon name="awesome-envelope" />
          <a href="mailto:zongoristagabibacsi@gmail.com">zongoristagabibacsi@gmail.com</a>
        </div>
      </section>
    )
  }
}
