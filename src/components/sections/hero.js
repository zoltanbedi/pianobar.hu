import React, { Component } from 'react'
import { Visibility } from 'semantic-ui-react'
import * as image from './hero-img.jpg'

export default class Hero extends Component {
  state = {
    calculations: {
      pixelsPassed: 0,
    },
  }

  handleContextRef = contextRef => this.setState({ contextRef })

  handleUpdate = (e, { calculations }) => this.setState({ calculations })

  render() {
    const { calculations, contextRef } = this.state

    const containerStyle = {
      backgroundImage: `url(${image})`,
      height: '943px',
      backgroundPosition: `50% ${calculations.pixelsPassed.toFixed()}px`,
    }

    return (
      <div ref={this.handleContextRef}>
        <Visibility onUpdate={this.handleUpdate}>
          <div context={contextRef} style={containerStyle} />
        </Visibility>
      </div>
    )
  }
}
