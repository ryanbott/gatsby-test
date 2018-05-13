import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>hello world</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to blarg page 2</Link>

    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      >
      <input name="name" type="text" placeholder="Enter Your Name"></input>
      <input name="email" type="email" placeholder="name@email.com"></input>
      <button>Send me</button>
    </form>
  </div>
)

export default IndexPage
