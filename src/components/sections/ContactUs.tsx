import React, { FormEvent, useState } from 'react'

function encode(data: { [key: string]: string }) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

export default function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const nullForm = () => {
    setName('')
    setEmail('')
    setMessage('')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    window
      .fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name') || '',
          name,
          email,
          message,
        }),
      })
      .then(nullForm)
  }

  return (
    <section className="wrapper style1 align-center">
      <div className="inner medium">
        <h2>Kapcsolat</h2>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="fields">
            <div className="field half">
              <label htmlFor="name">
                Név
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
              </label>
            </div>
            <div className="field half">
              <label htmlFor="email">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </label>
            </div>
            <div className="field">
              <label htmlFor="message">
                Üzenet
                <textarea
                  required
                  name="message"
                  id="message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.currentTarget.value)}
                />
              </label>
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
