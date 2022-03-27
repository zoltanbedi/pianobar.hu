import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Query } from '../../../graphql-types'

export default function News() {
  const data = useStaticQuery<Query>(graphql`
    {
      facebook {
        id
        posts {
          data {
            attachments {
              data {
                type
                title
                url
              }
            }
            id
            permalink_url
          }
        }
      }
    }
  `)

  return (
    <section className="wrapper style1 align-center">
      <div className="inner" style={{ width: '100%' }}>
        <h2>Aktuális</h2>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap' }}>
          {data.facebook?.posts?.data?.map((post) => {
            let src = `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(
              post?.permalink_url!
            )}&show_text=true&width=500`
            if (post?.attachments?.data?.[0]?.type === 'video_inline') {
              src = `https://www.facebook.com/plugins/video.php?height=476&href=${encodeURIComponent(
                post?.attachments.data?.[0]?.url!
              )}&show_text=true&width=500`
            }
            return (
              <iframe
                key={post?.id!}
                title={post?.id!}
                src={src}
                width="500"
                height="600"
                scrolling="no"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
