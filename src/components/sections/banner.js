import React from 'react'
import PropTypes from 'prop-types'

const Banner = props => {
  let bannerClasses = 'banner '
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
  bannerStyle: PropTypes.number,
  modifiers: PropTypes.arrayOf(PropTypes.string),
}

Banner.defaultProps = {
  bannerStyle: 1,
  modifiers: ['orient-left', 'content-align-left', 'image-position-right', 'fullscreen', 'onload-image-fade-in'],
}

export default Banner
