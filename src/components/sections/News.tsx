import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image'
import { NewsQuery } from '../../../graphql-types'
import Banner from './Banner'

export default function News() {
  const { allDataJson } = useStaticQuery<NewsQuery>(graphql`
    query News {
      allDataJson(sort: { created_time: DESC }, limit: 5) {
        edges {
          node {
            id
            message
            created_time
            first_action {
              link
            }
            featuredImg {
              childrenImageSharp {
                gatsbyImageData(height: 550)
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', padding: 10 }}>
        <h2 style={{ margin: 0 }}>Aktuális</h2>
      </div>
      {allDataJson.edges.map((edge, i) => {
        const imageSrc = edge.node.featuredImg?.childrenImageSharp?.[0]?.gatsbyImageData
        const image = imageSrc ? (
          <GatsbyImage image={imageSrc} alt="Image from Facebook post." />
        ) : (
          <StaticImage src="../../images/barban.jpeg" alt="Közeli kép Gabi bácsiról" />
        )
        return (
          <Banner
            key={edge.node.id}
            isSpotlight
            modifiers={[i % 2 === 0 ? 'orient-right' : 'orient-left', 'content-align-left', 'image-position-right']}
            image={image}
          >
            <header>
              <h3 style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
                {edge.node.message}
              </h3>
              <p>{new Date(edge.node.created_time).toLocaleString()}</p>
              <ul className="actions stacked">
                <li>
                  <a href={edge.node.first_action?.link!} target="_blank" className="button" rel="noreferrer">
                    Tovább a Facebook posthoz
                  </a>
                </li>
              </ul>
            </header>
          </Banner>
        )
      })}
    </>
  )
}
