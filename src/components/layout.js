import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import '../assets/sass/main.scss'
import Footer from './footer'
import * as favicon32 from '../assets/images/favicon-32x32.png'
import * as favicon192 from '../assets/images/favicon-192x192.png'

export default class Layout extends Component {
  renderHelmet(data) {
    return (
      <Helmet
        title={`${data.site.siteMetadata.title} - ${this.props.subTitle}`}
        meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
        link={[{ rel: 'icon', href: favicon192, sizes: '192x192' }, { rel: 'icon', href: favicon32, sizes: '32x32' }]}
      >
        <html lang="hu" />
      </Helmet>
    )
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <div id="wrapper" className="divided">
            {this.renderHelmet(data)}
            {this.props.children}
            <Footer />
          </div>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  subTitle: PropTypes.string,
}
