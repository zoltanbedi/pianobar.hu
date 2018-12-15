import React, { Component } from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'

export default class ImgGallery extends Component {
  constructor(props) {
    super(props)
    this.state = { currentImage: 0 }
    this.closeLightbox = this.closeLightbox.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    })
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }

  render() {
    const { photos } = this.props
    return (
      <section className="wrapper style1 align-center">
        <div className="inner">
          <h2>Galéria</h2>
        </div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox
          images={photos}
          closeButtonTitle="Bezár (Esc)"
          leftArrowTitle="Előző"
          rightArrowTitle="Következő"
          showImageCount={false}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </section>
    )
  }
}
