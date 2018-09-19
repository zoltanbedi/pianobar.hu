import React, { Component } from 'react'
import * as image from './hero-img.jpg'

export default class Hero extends Component {
  render() {
    const containerStyle = {
      backgroundImage: `url(${image})`,
      height: '943px',
      backgroundPosition: `50% 0px`,
    }

    return (
      <div>
        <div style={containerStyle} />
      </div>
    )
  }
}
