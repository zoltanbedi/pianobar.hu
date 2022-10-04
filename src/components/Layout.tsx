import React, { PropsWithChildren } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import '../assets/sass/main.scss'
import Footer from './footer'
import { Head } from './Head'
import { Site } from '../../graphql-types'

export default function Layout({ children, subTitle }: PropsWithChildren<{ subTitle: string }>) {
  const { site } = useStaticQuery<{ site: Site }>(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div id="wrapper" className="divided">
      <Head title={`${site.siteMetadata?.title} - ${subTitle}`} />
      {children}
      <Footer />
    </div>
  )
}
