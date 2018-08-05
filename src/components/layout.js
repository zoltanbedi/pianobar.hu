import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import { Sticky } from 'semantic-ui-react'
import '../../site-theme/styles.less'
import * as favicon32 from './favicon-32x32.png'
import * as favicon192 from './favicon-192x192.png'

export default class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleContextRef = contextRef => this.setState({ contextRef })

  renderHelmet(data) {
    return (
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
    )
  }

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
            {this.renderHelmet(data)}
            <div ref={this.handleContextRef}>
              <Sticky context={contextRef}>
                <Header siteTitle={data.site.siteMetadata.title} />
              </Sticky>
                {this.props.children}
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
