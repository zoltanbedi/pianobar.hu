import React, { Component } from 'react'
import Img from 'gatsby-image'
import Carousel from 'nuka-carousel'

export default class ImgGallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
    }
  }
  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    this.setState(this.getDimensons())
  }

  getDimensons() {
    const body = document.getElementsByTagName('body')[0]
    const width = window.innerWidth || document.documentElement.clientWidth || body.clientWidth
    const height = window.innerHeight || document.documentElement.clientHeight || body.clientHeight
    return { width, height }
  }

  render() {
    const imageStyles = this.state.width > 700 ? { display: 'inline-block', width: '600px' } : undefined
    const images = this.props.photos.map((img, index) => {
      return <Img style={imageStyles} {...img} key={index} />
    })
    return (
      <section className="wrapper style1 align-center color1 invert">
        <Carousel
          className="inner"
          heightMode="current"
          autoplay={true}
          wrapAround={true}
          speed={1000}
          renderCenterLeftControls={({ previousSlide }) => <button onClick={previousSlide}>Előző</button>}
          renderCenterRightControls={({ nextSlide }) => <button onClick={nextSlide}>Következő</button>}
          renderBottomCenterControls={() => null}
        >
          {images}
        </Carousel>
      </section>
    )
  }
}
