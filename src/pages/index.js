import React from 'react'
import Layout from '../components/layout'
import Banner from '../components/sections/banner'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import ContactUs from '../components/sections/contact-us'

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

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "hero2.jpg" }) {
      ...fluidImage
    }
  }
`
