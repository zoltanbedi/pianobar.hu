import React from 'react'
import Layout from '../components/layout'
import Banner from '../components/sections/banner'
import * as image from '../assets/images/hero2.jpg'

const IndexPage = () => (
  <Layout subTitle="Bárzongorista">
    <Banner
      bannerStyle={5}
      image={{ src: image, alt: 'Fűzy Gábor énekel' }}
      modifiers={['fullscreen', 'content-align-left', 'onload-image-fade-in']}
    >
      <header>
        <h1>Fűzy Gábor</h1>
        <p>bárzongorista</p>
      </header>
    </Banner>
  </Layout>
)

export default IndexPage
