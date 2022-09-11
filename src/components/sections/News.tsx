import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { NewsQuery } from '../../../graphql-types'
import Banner from './Banner'

export default function News() {
  const { allDataJson } = useStaticQuery<NewsQuery>(graphql`
    query News {
      allDataJson(sort: { order: DESC, fields: created_time }) {
        edges {
          node {
            id
            message
            created_time
          }
        }
      }
    }
  `)

  return (
    <>
      {allDataJson.edges.map((edge, i) => (
        <Banner
          key={edge.node.id}
          isSpotlight
          modifiers={[i % 2 === 0 ? 'orient-right' : 'orient-left', 'content-align-left', 'image-position-right']}
          image={<StaticImage src="../../images/barban.jpeg" alt="Közeli kép Gabi bácsiról" />}
        >
          <header>
            <h3>{edge.node.message}</h3>
            <p>{new Date(edge.node.created_time).toLocaleString()}</p>
          </header>
        </Banner>
      ))}
    </>
  )
}
