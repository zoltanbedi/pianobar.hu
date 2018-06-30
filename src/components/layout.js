import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import { Sticky } from 'semantic-ui-react'
import 'semantic-ui-css/components/sticky.css'
import './layout.css'
import * as favicon32 from './favicon-32x32.png'
import * as favicon192 from './favicon-192x192.png'

export default class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state

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
          <>
            <Helmet
              title={`${data.site.siteMetadata.title} - ${this.props.subTitle}`}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
              link={[
                { rel: 'icon', href: favicon192, sizes: '192x192' },
                { rel: 'icon', href: favicon32, sizes: '32x32' },
              ]}
            />
            <div ref={this.handleContextRef}>
              <Sticky context={contextRef}>
                <Header siteTitle={data.site.siteMetadata.title} />
              </Sticky>
              <div
                style={{
                  margin: '0 auto',
                  maxWidth: 960,
                  padding: '0px 1.0875rem 1.45rem',
                  paddingTop: 0,
                }}
              >
                {this.props.children}
              </div>
            </div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  subTitle: PropTypes.string,
}
