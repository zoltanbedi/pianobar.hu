import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/layout'
import AboutUs from '../components/sections/AboutUs'
import Banner from '../components/sections/Banner'
import ContactUs from '../components/sections/ContactUs'
import ImgGallery from '../components/sections/ImgGallery'
import WelcomeText from '../components/sections/WelcomeText'

const HomePage = () => {
  return (
    <Layout subTitle="Bárzongorista">
      <Banner
        bannerStyle={5}
        image={
          <StaticImage
            src="../images/hero2.jpg"
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
          <StaticImage
            src="../images/hero-img.jpg"
            alt="Fűzy Gábor zongora mellett"
            className="image"
            imgStyle={{ objectPosition: 'right' }}
          />
        }
      >
        <WelcomeText />
      </Banner>
      <ImgGallery />
      <AboutUs />
      <ContactUs />
    </Layout>
  )
}
export default HomePage
