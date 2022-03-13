import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import '../../assets/sass/main.scss';
import Footer from './footer';

export default class Layout extends Component {
  renderHelmet(data) {
    return (
      <Helmet>
        <html lang="hu" />
        <title>{`${data.site.siteMetadata.title} - ${this.props.subTitle}`}</title>
        <meta
          name="description"
          content="Fűzy Gábor vagyok, a zene közkatonája. Sokak Gabija -ma már olykor Gabi bácsija-, a bárzene utolsó mohikánja."
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href="https://pianobar.hu" />
        <link rel="icon" href="../images/favicon-192x192.png" sizes="192x192" />
        <link rel="icon" href="../images/favicon-32x32.png" sizes="32x32" />
      </Helmet>
    );
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
        render={(data) => (
          <div id="wrapper" className="divided">
            {this.renderHelmet(data)}
            {this.props.children}
            <Footer />
          </div>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  subTitle: PropTypes.string,
};
