import React from 'react'
import PropTypes from 'prop-types'

const Banner = (props) => {
  let bannerClasses = props.isSpotlight ? 'spotlight ' : 'banner '
  bannerClasses += `style${props.bannerStyle} `
  bannerClasses += props.modifiers.join(' ')

  return (
    <section className={bannerClasses}>
      <div className="content">{props.children}</div>
      {props.image}
    </section>
  )
}

Banner.propTypes = {
  image: PropTypes.node,
  isSpotlight: PropTypes.bool,
  bannerStyle: PropTypes.number,
  modifiers: PropTypes.arrayOf(PropTypes.string),
}

Banner.defaultProps = {
  isSpotlight: false,
  bannerStyle: 1,
  modifiers: ['orient-left', 'content-align-left', 'image-position-right', 'fullscreen', 'onload-image-fade-in'],
}

export default Banner
