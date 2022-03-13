import { StaticImage } from 'gatsby-plugin-image'
import Carousel from 'nuka-carousel'
import React, { useEffect, useState } from 'react'

export default function ImgGallery() {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [isInViewport, setIsInViewport] = useState(false)

  const getDimensons = () => {
    const body = document.getElementsByTagName('body')[0]
    const calcWidth = window.innerWidth || document.documentElement.clientWidth || body.clientWidth
    const calcHeight = window.innerHeight || document.documentElement.clientHeight || body.clientHeight
    return { calcWidth, calcHeight }
  }

  const handleResize = () => {
    const { calcHeight, calcWidth } = getDimensons()
    setHeight(calcHeight)
    setWidth(calcWidth)
  }

  const isInViewportFn = () => {
    const elem = document.querySelector('.slider')
    const bounding = elem?.getBoundingClientRect()
    if (!bounding) {
      return false
    }
    return bounding.top >= -200 && bounding.left >= 0 && bounding.bottom <= height && bounding.right <= width
  }

  const handleScroll = () => {
    setIsInViewport(isInViewportFn())
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const imageStyles = width > 700 ? { display: 'inline-block', width: '600px' } : undefined

  return (
    <section className="wrapper style1 align-center color1 invert">
      <Carousel
        className="inner"
        heightMode="current"
        pauseOnHover={false}
        enableKeyboardControls={false}
        autoplay={isInViewport}
        wrapAround
        speed={1000}
        renderCenterLeftControls={({ previousSlide }) => (
          <button type="button" onClick={previousSlide}>
            Előző
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button type="button" onClick={nextSlide}>
            Következő
          </button>
        )}
        renderBottomCenterControls={() => null}
      >
        <StaticImage
          style={imageStyles}
          src="../../images/barban.jpeg"
          alt="Gabi bácsi a Piros Pezsgő pianó bárban a zongora mögött"
        />
        <StaticImage style={imageStyles} src="../../images/profil.jpeg" alt="Közeli kép Gabi bácsiról" />
        <StaticImage style={imageStyles} src="../../images/zongora-mogott.jpeg" alt="Rendezvényen a zongora mögött" />
        <StaticImage style={imageStyles} src="../../images/gallery1.jpg" alt="Fűzy Gábor fehér zongorán játszik" />
        <StaticImage
          style={imageStyles}
          src="../../images/gallery2.jpg"
          alt="Fűzy Gábor egy szőke hölgy társaságában"
        />
        <StaticImage style={imageStyles} src="../../images/gallery3.jpg" alt="Gabi bácsi rajongókkal" />
        <StaticImage style={imageStyles} src="../../images/gallery4.jpg" alt="Gabi bácsi az indexes videóból" />
      </Carousel>
    </section>
  )
}
