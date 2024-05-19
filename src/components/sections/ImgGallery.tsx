import { StaticImage } from 'gatsby-plugin-image'
import Carousel from 'react-slick'
import React, { CSSProperties, PropsWithChildren, useEffect, useState } from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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

  const imageStyles: CSSProperties = { objectFit: 'contain' }

  return (
    <section className="wrapper style1 align-center color1 invert">
      <Carousel
        adaptiveHeight
        autoplay={isInViewport}
        prevArrow={<Arrow isPrev={true}>Előző</Arrow>}
        nextArrow={<Arrow>Következő</Arrow>}
      >
        <StaticImage
          imgStyle={imageStyles}
          height={500}
          src="../../images/barban.jpeg"
          alt="Gabi bácsi a Piros Pezsgő pianó bárban a zongora mögött"
        />
        <StaticImage
          height={500}
          imgStyle={imageStyles}
          src="../../images/profil.jpeg"
          alt="Közeli kép Gabi bácsiról"
        />
        <StaticImage
          imgStyle={imageStyles}
          height={500}
          src="../../images/zongora-mogott.jpeg"
          alt="Rendezvényen a zongora mögött"
        />
        <StaticImage
          height={500}
          imgStyle={imageStyles}
          src="../../images/gallery1.jpg"
          alt="Fűzy Gábor fehér zongorán játszik"
        />
        <StaticImage
          imgStyle={imageStyles}
          height={500}
          src="../../images/gallery2.jpg"
          alt="Fűzy Gábor egy szőke hölgy társaságában"
        />
        <StaticImage height={500} imgStyle={imageStyles} src="../../images/gallery3.jpg" alt="Gabi bácsi rajongókkal" />
        <StaticImage
          height={500}
          imgStyle={imageStyles}
          src="../../images/gallery4.jpg"
          alt="Gabi bácsi az indexes videóból"
        />
      </Carousel>
    </section>
  )
}

function Arrow(props: PropsWithChildren<{ onClick?: () => void; isPrev?: boolean }>) {
  const { onClick, children, isPrev } = props
  const side = isPrev ? 'left' : 'right'
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ display: 'block', position: 'absolute', top: '50%', [side]: '10px', zIndex: 10 }}
    >
      {children}
    </button>
  )
}
