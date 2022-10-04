import React, { PropsWithChildren, ReactNode } from 'react'

type Props = PropsWithChildren<{
  isSpotlight?: boolean
  bannerStyle?: number
  modifiers?: string[]
  image?: ReactNode
}>

export default function Banner({
  modifiers = ['orient-left', 'content-align-left', 'image-position-right', 'fullscreen', 'onload-image-fade-in'],
  bannerStyle = 1,
  children,
  isSpotlight = false,
  image,
}: Props) {
  let bannerClasses = isSpotlight ? 'spotlight ' : 'banner '
  bannerClasses += `style${bannerStyle} `
  bannerClasses += modifiers.join(' ')

  return (
    <section className={bannerClasses}>
      <div className="content">{children}</div>
      {image && <div className="image">{image}</div>}
    </section>
  )
}
