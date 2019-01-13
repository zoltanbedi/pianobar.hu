import React from 'react'

export const Icon = props => (
  <span>
    <svg>
      <use xlinkHref={`#icons_si-${props.name}`} />
    </svg>
  </span>
)
