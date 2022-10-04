import React from 'react'

interface Props {
  title: string
}

export function Head({ title }: Props) {
  return (
    <>
      <title>{title}</title>
      <meta
        name="description"
        content="Fűzy Gábor vagyok, a zene közkatonája. Sokak Gabija -ma már olykor Gabi bácsija-, a bárzene utolsó mohikánja."
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="canonical" href="https://pianobar.hu" />
      <link rel="icon" href="../images/favicon-192x192.png" sizes="192x192" />
      <link rel="icon" href="../images/favicon-32x32.png" sizes="32x32" />
    </>
  )
}
