import React, { Component } from 'react'

export default class ContactUs extends Component {
  initialState = { name: '', email: '', message: '' }
  constructor(props) {
    super(props)
    this.state = this.initialState
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => this.setState(this.initialState))
      .catch(error => console.error(error))
  }

  render() {
    return (
      <section className="wrapper style1 align-center">
        <div className="inner medium">
          <h2>Kapcsolat</h2>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="fields">
              <div className="field half">
                <label htmlFor="name">Név</label>
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  value={this.state.name}
                  onChange={e => this.handleInputChange(e)}
                />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  value={this.state.email}
                  onChange={e => this.handleInputChange(e)}
                />
              </div>
              <div className="field">
                <label htmlFor="message">Üzenet</label>
                <textarea
                  required
                  name="message"
                  id="message"
                  rows="6"
                  value={this.state.message}
                  onChange={e => this.handleInputChange(e)}
                />
              </div>
            </div>
            <ul className="actions special">
              <li>
                <input type="submit" name="submit" id="submit" value="Üzenet küldése" />
              </li>
            </ul>
          </form>
        </div>
      </section>
    )
  }
}

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
