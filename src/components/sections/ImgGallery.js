import React, { Component } from 'react'
import Img from 'gatsby-image'
import Carousel from 'nuka-carousel'

export default class ImgGallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0,
      isInViewport: false,
    }
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleResize = () => {
    this.setState(this.getDimensons())
  }

  handleScroll = () => {
    this.setState({ isInViewport: this.isInViewport() })
  }

  isInViewport() {
    const elem = document.querySelector('.slider')
    const bounding = elem.getBoundingClientRect()
    return (
      bounding.top >= -200 &&
      bounding.left >= 0 &&
      bounding.bottom <= this.state.height &&
      bounding.right <= this.state.width
    )
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
          pauseOnHover={false}
          autoplay={this.state.isInViewport}
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
