import React from 'react'
import Layout from '../components/layout'
import WelcomeText from '../components/sections/welcome-text'
import Hero from '../components/sections/hero'

const IndexPage = () => (
  <Layout subTitle="Bárzongorista">
    <Hero />
    <WelcomeText />
  </Layout>
)

export default IndexPage
