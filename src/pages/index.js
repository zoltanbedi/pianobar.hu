import React from 'react'
import Layout from '../components/layout'
import WelcomeText from '../components/sections/welcome-text'
import HeroImage from '../components/sections/hero'

const IndexPage = () => (
  <Layout subTitle="Bárzongorista">
    <HeroImage />
    <WelcomeText />
  </Layout>
)

export default IndexPage
