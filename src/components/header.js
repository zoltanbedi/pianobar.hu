import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <h1 style={{ margin: 0 }}>
    <Link to="/">{siteTitle}</Link>
  </h1>
)

export default Header
