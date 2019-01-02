import React from 'react'
import Layout from '../components/layout'
import Banner from '../components/sections/Banner'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import ContactUs from '../components/sections/ContactUs'
import WelcomeText from '../components/sections/WelcomeText'
import ImgGallery from '../components/sections/ImgGallery'

export default props => (
  <Layout subTitle="Bárzongorista">
    <Banner
      bannerStyle={5}
      image={
        <Img
          fluid={props.data.imageOne.childImageSharp.fluid}
          alt="Fűzy Gábor énekel"
          className="image"
          style={{ position: 'absolute' }}
        />
      }
      modifiers={['fullscreen', 'content-align-left', 'onload-image-fade-in']}
    >
      <header>
        <h1>Fűzy Gábor</h1>
        <p>bárzongorista</p>
      </header>
    </Banner>
    <Banner
      bannerStyle={2}
      isSpotlight={true}
      modifiers={['orient-right', 'content-align-left', 'image-position-right']}
      image={
        <Img
          fluid={props.data.imageTwo.childImageSharp.fluid}
          alt="Fűzy Gábor zongora mellett"
          className="image"
          imgStyle={{ objectPosition: 'right' }}
        />
      }
    >
      <WelcomeText />
    </Banner>
    <ImgGallery
      photos={[
        { fluid: { ...props.data.galleryOne.childImageSharp.fluid }, alt: 'Fűzy Gábor fehér zongorán játszik' },
        { fluid: { ...props.data.galleryTwo.childImageSharp.fluid }, alt: 'Fűzy Gábor egy szőke hölgy társaságában' },
        { fluid: { ...props.data.galleryThree.childImageSharp.fluid }, alt: 'Gabi bácsi rajongókkal' },
        { fluid: { ...props.data.galleryFour.childImageSharp.fluid }, alt: 'Gabi bácsi az indexes videóból' },
      ]}
    />
    <ContactUs />
  </Layout>
)

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const fixedImage = graphql`
  fragment fixedImage on File {
    childImageSharp {
      fixed(width: 400) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "hero2.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "hero-img.jpg" }) {
      ...fluidImage
    }
    galleryOne: file(relativePath: { eq: "gallery1.jpg" }) {
      ...fluidImage
    }
    galleryTwo: file(relativePath: { eq: "gallery2.jpg" }) {
      ...fluidImage
    }
    galleryThree: file(relativePath: { eq: "gallery3.jpg" }) {
      ...fluidImage
    }
    galleryFour: file(relativePath: { eq: "gallery4.jpg" }) {
      ...fluidImage
    }
  }
`
