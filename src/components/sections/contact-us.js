import React, { Component } from 'react'

export default class ContactUs extends Component {
  render() {
    return (
      <section className="wrapper style1 align-center">
        <div className="inner medium">
          <h2>Kapcsolat</h2>
          <form method="post" action="#">
            <div className="fields">
              <div className="field half">
                <label htmlFor="name">Név</label>
                <input type="text" name="name" id="name" value="" />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value="" />
              </div>
              <div className="field">
                <label htmlFor="message">Üzenet</label>
                <textarea name="message" id="message" rows="6" />
              </div>
            </div>
            <ul className="actions special">
              <li>
                <input type="submit" name="submit" id="submit" value="Üzenet küldése" />
              </li>
            </ul>
          </form>
          <p>
            Fellépés, koncert, magán rendezvény:{' '}
            <a href="tel:+36209839434" title="Telefon">
              +36209839434
            </a>{' '}
            vagy <a href="mailto:zongoristagabibacsi@gmail.com">zongoristagabibacsi@gmail.com</a>
          </p>
        </div>
      </section>
    )
  }
}
